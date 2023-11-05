import React, {Component} from 'react';
import axios from "axios";

const items=[
    {
        "login": "imycode",
        "id": 43439224,
        "node_id": "MDQ6VXNlcjQzNDM5MjI0",
        "avatar_url": "https://avatars.githubusercontent.com/u/43439224?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/imycode",
        "html_url": "https://github.com/imycode",
        "followers_url": "https://api.github.com/users/imycode/followers",
        "following_url": "https://api.github.com/users/imycode/following{/other_user}",
        "gists_url": "https://api.github.com/users/imycode/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/imycode/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/imycode/subscriptions",
        "organizations_url": "https://api.github.com/users/imycode/orgs",
        "repos_url": "https://api.github.com/users/imycode/repos",
        "events_url": "https://api.github.com/users/imycode/events{/privacy}",
        "received_events_url": "https://api.github.com/users/imycode/received_events",
        "type": "User",
        "site_admin": false,
        "score": 1
    }
]

class SearchContainer extends Component {
    search=()=>{
        const {keyWordRef}=this
        this.props.updateState({
            isInit:false,
            isLoading:true,
        })
        axios.request({
            url:`https://api.github.com/search/users?q=${keyWordRef.value}`
        }).then(res=>{
            this.props.updateState({
                isInit:false,
                isLoading:false,
                users:res.data.items
            })
        }).catch(err=>{
            this.props.updateState({
                isInit:false,
                isLoading:false,
                err:err.message,
            })
        })
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
    render(){
        const {state:{users,isLoading,err,isInit}}=this.props
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
    state={
        users:[],
        isInit:true, //是否是第一次
        isLoading:false,
        err:'', //存储请求相关的错误信息
    }
    updateState=(data)=>{
        this.setState(data)
    }

    render() {
        const {users} = this.state
        return (
            <div className="p-5 bd">
                <SearchContainer updateState={this.updateState}></SearchContainer>
                <ListContainer state={this.state}></ListContainer>
            </div>
        );
    }
}

export default SearchGitApp;