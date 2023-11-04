import React, {createContext} from 'react';

const AppContextContainer = createContext()
function Foo() {
    return (
        <AppContextContainer.Consumer>
            {value=><div>{value}</div>}
        </AppContextContainer.Consumer>
    );
}

function Bar() {
    return <div>bar</div>
}
function Middel() {
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


function AppContext() {
    return (
        <AppContextContainer.Provider value={"imycode"}>
            <>
                <Middel></Middel>
            </>
        </AppContextContainer.Provider>
    );
}

export default AppContext;