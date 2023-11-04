import React, {Component, createContext, useMemo} from 'react';

const UserInfo = createContext(null)
const Role = createContext(null)
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

    // userRole =useMemo(()=>({role:this.state.role,setRole:this.setRole}),[this.state.role,this.setRole])

    render(){
        return (
            <UserInfo.Provider value={this.state.userInfo}>
                <Role.Provider value={{role:this.state.role,setRole:this.setRole}}>
                    <div className="bd">
                        <UserCard></UserCard>
                        <span>{Math.random()}</span>
                    </div>
                </Role.Provider>
            </UserInfo.Provider>
        )
    }
}

function SavingInfo() {
    return <div className='bd'>
        这是其他不会变得信息
        <span>{Math.random()}</span>
    </div>;
}

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
                        <Role.Consumer>
                            {
                                value => (
                                    <div className="m-2 bd">
                                        <div>{userInfo.name}-{value.role}</div>
                                        <input type="text" onChange={(event)=>value.setRole(event.target.value)}/>
                                        <span>{Math.random()}</span>
                                    </div>
                                )
                            }
                        </Role.Consumer>
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