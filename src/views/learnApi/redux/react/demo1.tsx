import React, {Component} from 'react';
import {applyMiddleware, createStore} from "redux";
import {Button} from "antd";
import thunk from "redux-thunk";

const initialState={
    tab:{
        class:{
            nav1:1
        },
        growth:{
            nav1:2
        }
    },
    model:{
        class: {
            visible1: false,
            title: 'class',
        },
        growth: {
            visible1: false,
            title: 'growth',
        }
    }
}
export const store= createStore((prestate=initialState,action)=>{
    console.log(action)
    switch (action.type) {
        case 'class/model':
            return {...prestate, model: {...prestate.model, class: action.payload}};
        case 'growth/model':
            return {...prestate, model: {...prestate.model, growth: action.payload}};
        case 'class/tab':
            return {...prestate, tab: {...prestate.tab, class: action.payload}};
        case 'growth/tab':
            return {...prestate, tab: {...prestate.tab, growth: action.payload}};
        default:
            return prestate;
    }
},applyMiddleware(thunk))
function createClassCourseAction(data) {
    switch (data.type) {
        case 'model':
            return { type:'class/model',payload:data }
        default:
            return {type: 'class/tab',payload: data};
    }
}
function createGrowthCourseAction(data) {
    switch (data.type) {
        case 'model':
            return { type:'growth/model',payload:data }
        default:
            return {type: 'growth/tab', payload:data};
    }
}
function createAsyncAction(data,time) {
    return (dispatch)=>{
        setTimeout(() => {
            console.log(2222)
            dispatch(createClassCourseAction(data));
        }, time);
    }
}

// UI组件
class ClassBB extends Component<any, any>{
    view=()=>{
        this.props.view()
    }
    asyncView=()=>{
        this.props.asyncView()
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.view}>查看</Button>
                <Button type="primary" onClick={this.asyncView}>异步查看</Button>
            </div>
        );
    }
}
// 容器组件
// const ClassBBContainer=connect(null,(dispatch) => {
//     return {
//         view:()=>{
//             dispatch(createClassCourseAction({type:'model',visible1:true,title:'查看'}))
//         },
//         asyncView:()=>{
//             dispatch(createAsyncAction({type:'model',visible1:true,title:'异步查看'},1000))
//         }
//     }
// })(ClassBB)
const ClassBBContainer=connect(null,{
    view:()=>createClassCourseAction({type:'model',visible1:true,title:'查看'}),
    asyncView:()=>createAsyncAction({type:'model',visible1:true,title:'异步查看'},1000)
})(ClassBB)
// UI组件
class ClassCourse extends Component{
    componentDidMount() {

    }

    render() {
        console.log('class-this.props',this.props)
        return (
            <div>
                classCourse : <br/>
                <div className="bd">
                    {this.props.tab.class.nav1} <br/>
                    {this.props.model.class.title} <br/>
                    {this.props.model.class.visible1.toString()}
                </div>
                <ClassBBContainer store={store}></ClassBBContainer>
            </div>
        );
    }
}
// UI组件
class GrowthCourse extends Component{
    render(){
        return (
            <div>
                GrowthCourse : <br/>
                <div className="bd">
                    {/*{state.tab.growth.nav1} <br/>*/}
                    {/*{state.model.growth.title} <br/>*/}
                    {/*{state.model.growth.visible1.toString()}*/}
                </div>
            </div>
        );
    }
}
// 容器组件
const ClassContainer = connect(
    (state) => {
        console.log('state container class',state)
        return state
    })(ClassCourse);

class Practice extends Component<any, any>{
    render(){
        console.log('this.props',this.props)
        const {model}=this.props
        return (
            <div>
                <p>tab.class.model.title: {model.class.title}</p>
                <ClassContainer store={store}></ClassContainer> //给容器组件传递store
                <GrowthCourse></GrowthCourse>
            </div>
        );
    }
}

import {connect} from "react-redux";
// 容器组件和UI组件建立联系
const PracticeContainer=connect((state)=>{
    return state
})(Practice)

export default PracticeContainer;