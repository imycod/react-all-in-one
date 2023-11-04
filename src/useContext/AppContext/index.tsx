import React, {Component, createContext, useContext} from 'react';

const AppContextContainer = createContext()

// 第一种写法
class Foo extends Component{
    render(){
        return (
            <AppContextContainer.Consumer>
                {value =>
                    <div>
                        第一种写法适用简单嵌套不超过2级组件: {value}
                        <p>AppContextContainer.Consumer传入一个回调参数value</p>
                    </div>
                }
            </AppContextContainer.Consumer>
        );
    }
}

// 第二种写法
class Bar extends Component {
    static contextType = AppContextContainer
    render() {
        const context = this.context
        return <div>第二种写法适用于类组件 : {context}</div>
    }
}

// 第三种写法
function Cat() {
    const value = useContext(AppContextContainer)
    return <div>第三种写法适用于函数组件 : {value}</div>
}
class Middle extends Component {
    render() {
        return (
            <>
                <span>基础用法</span>
                <div>
                    <Foo></Foo>
                    <Bar></Bar>
                    <Cat></Cat>
                </div>
            </>
        );
    }
}

class AppContext extends Component {
    render(){
        return (
            <AppContextContainer.Provider value={"imycode"}>
                <>
                    <Middle></Middle>
                </>
            </AppContextContainer.Provider>
        );
    }
}

export default AppContext;