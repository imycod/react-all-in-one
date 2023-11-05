import React, {Component} from 'react';
import axios from "axios";
import PubSub from "pubsub-js"

class SearchContainer extends Component {
    search=()=>{
        const {keyWordRef}=this
        // 发布消息，让订阅者更新状态
        PubSub.publish('update', {
            isInit: false,
            isLoading: true,
        });

        axios.request({
            url: `https://api.github.com/search/users?q=${keyWordRef.value}`
        }).then(res => {
            // 发布消息，让订阅者更新状态
            PubSub.publish('update', {
                isInit: false,
                isLoading: false,
                users: res.data.items
            });
        }).catch(err => {
            PubSub.publish('update', {
                isInit: false,
                isLoading: false,
                err: err.message,
            });
        });
    }
    render(){
        return (
            <div>
                <input type="text" ref={c=> this.keyWordRef = c}/>
                <button onClick={this.search}>搜索</button>
            </div>
        )
    }
}

class ListContainer extends Component {
    state={
        users:[],
        isInit:true, //是否是第一次
        isLoading:false,
        err:'', //存储请求相关的错误信息
    }

    componentDidMount() {
        this.subtoken = PubSub.subscribe('update',(_,data)=>{
            this.setState(data);
        })
    }
    componentWillUnmount() {
        PubSub.unsubscribe(this.subtoken)
    }

    render(){
        const {users,isLoading,err,isInit}=this.state
        return (
            <div>
                <div className="row">
                    {
                        isInit ? <span>输入搜索内容并点击按钮</span> :
                        isLoading ? <h2>loading....</h2> :
                        err ? <h2>{err}</h2>:
                        users.map(user=>{
                            return (
                                <div key={user.id} className="card">
                                    <a href={user.html_url} rel="noreferrer" target="_blank">
                                        <img src={user.avatar_url} alt=""/>
                                    </a>
                                    <p className="text-black">{user.login}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

class SearchGitApp extends Component {
    render() {
        return (
            <div className="p-5 bd">
                <SearchContainer></SearchContainer>
                <ListContainer></ListContainer>
            </div>
        );
    }
}

export default SearchGitApp;