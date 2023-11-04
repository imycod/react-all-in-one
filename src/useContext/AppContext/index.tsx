import React, {Component, createContext} from 'react';

const AppContextContainer = createContext()
class Foo extends Component{
    render(){
        return (
            <AppContextContainer.Consumer>
                {value=><div>{value}</div>}
            </AppContextContainer.Consumer>
        );
    }
}

class Bar extends Component {
    render(){
        return <div>bar</div>
    }
}

class Middle extends Component {
    render() {
        return (
            <>
                <span>基础用法</span>
                <div>
                    <Foo></Foo>
                    <Bar></Bar>
                    <Bar></Bar>
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