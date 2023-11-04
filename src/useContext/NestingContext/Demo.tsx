import React, {Component, createContext, memo, useMemo} from 'react';
import {preview} from "vite";

const UserInfo = createContext({})
const Role = createContext({})
class UserContainer extends Component {
    state={
        userInfo: {
            name: 'bill'
        },
        role: "admin"
    }

    setRole=(role)=>{
        this.setState({
            role
        })
    }

    render(){
        return (
            <UserInfo.Provider value={this.state.userInfo}>
                <Role.Provider value={{role:this.state.role,setRole:this.setRole}}>
                    <UserCardContainer></UserCardContainer>
                </Role.Provider>
            </UserInfo.Provider>
        )
    }
}

const UserCardContainer = memo(()=>{
    return (
        <div className="bd">
            <UserCard></UserCard>
            <span>{Math.random()}</span>
        </div>
    )
})
const SavingInfo = memo((props) => {
    return (
        <div className='bd'>
            这是其他不会变得信息
            <span>{Math.random()}</span>
        </div>
    )
}, (prevProps, nextProps) => {
    // if ( prevProps !== nextProps ) {
    //     return false
    // }else{
    //     return true;
    // }
    return true
});

const RoleComponent=  memo((props)=>{
    const userInfo = props.userInfo
    return (
        <Role.Consumer>
            {
                contextValue => (
                    <div className="m-2 bd">
                        <div>{userInfo.name} - {contextValue.role}</div>
                        <input type="text" onChange={(event)=>contextValue.setRole(event.target.value)}/>
                        <span>{Math.random()}</span>
                    </div>
                )
            }
        </Role.Consumer>

    )
},(prev,next)=>{
    if (prev.userInfo.name === next.userInfo.name) {
        return true;
    } else {
        return false;
    }
})

function UserCard(){
    // function addData(type='') {
    //     return (event)=>{
    //         console.log(event.target.value)
    //     }
    // }
    return (
        <UserInfo.Consumer>
            {
                userInfo => (
                    <div style={{display:'flex',}}>
                        <span>{userInfo.name}</span>
                        <RoleComponent userInfo={userInfo}></RoleComponent>
                        <SavingInfo></SavingInfo>
                    </div>
                )
            }
        </UserInfo.Consumer>
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