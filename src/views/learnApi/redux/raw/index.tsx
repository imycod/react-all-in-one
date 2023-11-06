import React, {Component, createRef, useEffect, useRef, useState} from 'react';
import store from "@/store/redux/raw";
// 写法1
// function ReduxExample(props) {
//     // const state=store.getState()
//     const {counter,userinfo}=store.getState()
//
//     const [count,setCount]=useState(counter.value)
//     const [user,setUser]=useState(userinfo)
//     useEffect(()=>{
//         store.subscribe(()=>{
//             const {counter,userinfo}=store.getState()
//             setCount(counter.value)
//             setUser(userinfo)
//         })
//     },[count])
//
//     function add() {
//         store.dispatch({
//             type: 'INCREMENT',
//         })
//     }
//     function minus(){
//         store.dispatch({
//             type: 'DECREMENT',
//         })
//     }
//
//     const inputRef=createRef()
//     function addUser(){
//         store.dispatch({
//             type: 'ADD_USER',
//             payload:{
//                 name:inputRef.current.value,
//                 avatar_url:'http://xxxx',
//             }
//         })
//     }
//     return (
//         <div>
//             ReduxExample
//             <div className="bd">
//                 {count} -   {user.name} - {user.avatar_url}
//                 <button onClick={add}>+</button>
//                 <button onClick={minus}>-</button>
//             </div>
//             <div className="bd">
//                 {user.name} - {user.avatar_url}
//                 <input type="text" ref={inputRef}/>
//                 <button onClick={addUser}>添加用户</button>
//             </div>
//         </div>
//     );
// }
// 写法2
// function Counter() {
//     const {counter,userinfo:user}=store.getState()
//
//     const [count,setCount]=useState(counter.value)
//
//     let unCounterSubscribe=useRef()
//     const mounted=useRef()
//     useEffect(()=>{
//         if (!mounted.current){
//             mounted.current=true
//         }
//         unCounterSubscribe.current =  store.subscribe(()=>{
//             const {counter}=store.getState()
//             setCount(counter.value);
//         })
//         return ()=>{
//             console.log('卸载取消订阅')
//             unCounterSubscribe.current()
//         }
//     },[count])
//
//     function add() {
//         store.dispatch({
//             type: 'INCREMENT',
//         })
//     }
//     function minus(){
//         store.dispatch({
//             type: 'DECREMENT',
//         })
//     }
//     return (
//         <div className="bd">
//             {count} -   {user.name} - {user.avatar_url}
//             <button onClick={add}>+</button>
//             <button onClick={minus}>-</button>
//         </div>
//     )
// }
// // https://blog.csdn.net/Mrwang21/article/details/125997540
// function User() {
//     const {userinfo}=store.getState()
//     const inputRef=createRef()
//     const [user,setUser]=useState(userinfo)
//
//     let unUserSubscribe=null
//     const mounted=useRef()
//     useEffect(()=>{
//         if (!mounted.current){
//             mounted.current=true
//         }
//         unUserSubscribe=store.subscribe(()=>{
//             const {userinfo}=store.getState()
//             setUser(userinfo)
//         })
//         return ()=>{
//             console.log('userSubscribe')
//             unUserSubscribe()
//         }
//     },[user])
//
//     function addUser(){
//         store.dispatch({
//             type: 'ADD_USER',
//             payload:{
//                 name:inputRef.current.value,
//                 avatar_url:'http://xxxx',
//             }
//         })
//     }
//     return (
//         <div className="bd">
//             {user.name} - {user.avatar_url}
//             <input type="text" ref={inputRef}/>
//             <button onClick={addUser}>添加用户</button>
//         </div>
//     )
// }

// 写法3
class Counter extends Component{

    componentDidMount=()=>{
        this.unSubCounter=store.subscribe(()=>{
            this.setState({})
        })
    }
    componentWillUnmount=()=> {
        console.log('卸载组件')
        this.unSubCounter()
    }

    minus = () => {
        store.dispatch({
            type: 'DECREMENT',
        })
    }
    add = () => {
        store.dispatch({
            type: 'INCREMENT',
        })
    }

    render() {
        const {counter}=store.getState()
        return (
            <div>
                {counter.value}
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        )
    }
}

class User extends Component{
    componentDidMount=()=>{
        this.unSub=store.subscribe(()=>{
            this.setState({})
        })
    }
    componentWillUnmount=()=> {
        console.log('卸载组件')
        this.unSub()
    }

    inputChange=(e)=>{
        const payload={
            name:e.target.value,
            avatar_url: 'http://xxx_avartar',
        }
        store.dispatch({type: 'ADD_USER',payload})
    }
    render() {
        const {userinfo}=store.getState()
        return (
            <div>
                {userinfo.name}
                {userinfo.avatar_url}
                <input type="text" onChange={this.inputChange}/>
            </div>
        );
    }
}
class ReduxExample extends Component{
    render(){
        return (
            <div>
                <Counter></Counter>
                <User></User>
            </div>
        )
    }
}

export default ReduxExample;