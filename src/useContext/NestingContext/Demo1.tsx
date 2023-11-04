import React, {PureComponent, Component, createContext, memo, useState, useContext, useMemo} from 'react';
import {atom,useAtom} from "jotai"

const UserInfo = createContext({})
const Role = createContext({})

const UserContextAtom = atom({})
function useUserContextAtom() {
    return useAtom(UserContextAtom)
}

function UserContainer() {
    const [user,setUser]=useState({
        userInfo: {
            name: 'bill'
        },
        role: "admin"
    })

   function setRole(role){
       setUser((prev) => ({
           ...prev,
           role: role
       }));
    }

    const roleContext=useMemo(()=>({role:user.role,setRole}),[user.role,setRole])
    return (
        <div className="bd">
            <UserInfo.Provider value={user.userInfo}>
                <Role.Provider value={roleContext}>
                    <>
                        <span>最外层提供Provider父级 {Math.random()}</span>
                        <UserCardContainer></UserCardContainer>
                    </>
                </Role.Provider>
            </UserInfo.Provider>
        </div>
    );
}

const UserCardContainer = memo(()=>{
    return (
        <div className="bd">
            <span> 组件A: {Math.random()}</span>
            <UserCard></UserCard>
        </div>
    );
})
function UserCard(){
    const context= useContext(UserInfo)
    return (
        <div className="bd" style={{display:'flex',}}>
            <span>组件:B {context.name} - {Math.random()}</span>
            <RoleComponent userInfo={context}></RoleComponent>
            <SavingInfo></SavingInfo>
        </div>
    )
}
const SavingInfo = memo(() => {
    return (
        <div className='bd'>
            组件B2: 这是其他不会变得信息
            <span>{Math.random()}</span>
        </div>
    )
});
const RoleComponent=  function (props){
    const userInfo = props.userInfo
    return (
        <Role.Consumer>
            {
                contextValue => (
                    <div className="m-2 bd">
                        <div>组件B1: {userInfo.name} - {contextValue.role}</div>
                        <input type="text" onChange={(event)=>contextValue.setRole(event.target.value)}/>
                        <span>组件C: {Math.random()}</span>
                    </div>
                )
            }
        </Role.Consumer>
    )
}
function NestingDemoExample() {
    return (
        <div>
            <h3>复杂嵌套场景</h3>
            <UserContainer></UserContainer>
        </div>
    );
}

export default NestingDemoExample;