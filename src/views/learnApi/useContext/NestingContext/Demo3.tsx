import React, { memo} from 'react';
import {atom,useAtom,Provider} from "jotai"
import {atomWithImmer} from "jotai-immer";

// atom({count:0})  const [count,setCount] = useAtom()  setCount(count=>++count.value)
const UserContextAtom = atomWithImmer({
    userInfo:{
        name: 'ss',
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

    function setRole(event) {
        setContext((prev)=>{
            prev.role=event.target.value
            // return {
            //     ...prev,
            //     role:event.target.value
            // }
        })
    }
    return (
        <div className="m-2 bd">
            <div>组件B1: {userInfo.name} - {role}</div>
            <input type="text" onChange={setRole}/>
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
    const [context,setContext] = useUserContextAtom()
    return (
        <div className='bd'>
            <span> 组件B2: {context.role}</span>
            <br/>
            <span>{Math.random()}</span>
        </div>
    )
});
function NestingDemoExample() {
    return (
        <Provider>
            <h3>复杂嵌套场景</h3>
            <UserContainer></UserContainer>
        </Provider>
    );
}

export default NestingDemoExample;