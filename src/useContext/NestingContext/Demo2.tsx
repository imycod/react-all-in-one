import React, {PureComponent, createContext, memo} from 'react';

const UserInfo = createContext({})
const Role = createContext({})
class UserContainer extends PureComponent {
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

    render() {
        return (
            <div className="bd">
                <UserInfo.Provider value={this.state.userInfo}>
                    <Role.Provider value={{role: this.state.role, setRole: this.setRole}}>
                        <span>最外层提供Provider父级 {Math.random()}</span>
                        <UserCardContainer></UserCardContainer>
                    </Role.Provider>
                </UserInfo.Provider>
            </div>
        )
    }
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
    return (
        <UserInfo.Consumer>
            {
                userInfo => (
                    <div className="bd" style={{display:'flex',}}>
                        <span>组件:B {userInfo.name} - {Math.random()}</span>
                        <RoleComponent userInfo={userInfo}></RoleComponent>
                        <SavingInfo></SavingInfo>
                    </div>
                )
            }
        </UserInfo.Consumer>
    )
}
const SavingInfo = memo((props) => {
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