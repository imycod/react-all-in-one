import React, {PureComponent, Component, createContext, memo, useState, useContext, useMemo} from 'react';
import {atom,useAtom} from "jotai"

const UserInfo = createContext({})
const Role = createContext({})

const UserContextAtom = atom({
    userInfo:{
        name:'ss'
    },
    role:'admin'
})
function useUserContextAtom() {
    return useAtom(UserContextAtom)
}

function UserContainer() {
    return (
        <div className="bd">
            <span>最外层提供Provider父级 {Math.random()}</span>
            <UserCardContainer></UserCardContainer>
        </div>
    );
}

const UserCard=()=>{
    const [context]= useUserContextAtom()
    const {userInfo}=context
    return (
        <div className="bd" style={{display:'flex',}}>
            <span>组件:B {userInfo.name} {Math.random()}</span>
            <RoleComponent></RoleComponent>
            <SavingInfo></SavingInfo>
        </div>
    )
}

const RoleComponent=  function (){
    const [context,setContext]=useUserContextAtom()
    const {userInfo}=context
    const role = context.role;

    return (
        <div className="m-2 bd">
            <div>组件B1: {userInfo.name} - {role}</div>
            <input type="text" onChange={(event) => setContext((prev)=>({...prev,role:event.target.value}))}/>
            <span>组件C: {Math.random()}</span>
        </div>
    );
}
const UserCardContainer = ()=>{
    return (
        <div className="bd">
            <span> 组件A: {Math.random()}</span>
            <UserCard></UserCard>
        </div>
    );
}
const SavingInfo = memo(() => {
    return (
        <div className='bd'>
            组件B2: 这是其他不会变得信息
            <span>{Math.random()}</span>
        </div>
    )
});
function NestingDemoExample() {
    return (
        <div>
            <h3>复杂嵌套场景</h3>
            <UserContainer></UserContainer>
        </div>
    );
}

export default NestingDemoExample;