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
const store= createStore((prestate=initialState,action)=>{
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

class ClassBB extends Component<any, any>{
    view=()=>{
        store.dispatch(createClassCourseAction({type:'model',visible1:true,title:'查看'}))
    }
    asyncView=()=>{
        store.dispatch(createAsyncAction({type:'tab', nav1:222 },1000))
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
class ClassCourse extends Component{
    componentDidMount() {
        //  可以直接包裹App这样订阅会导致App重新渲染
        store.subscribe(()=>{
            this.setState({})
        })
    }

    render() {
        const state=store.getState()
        console.log(state)
        return (
            <div>
                classCourse : <br/>
                <div className="bd">
                    {state.tab.class.nav1} <br/>
                    {state.model.class.title} <br/>
                    {state.model.class.visible1.toString()}
                </div>
                <ClassBB></ClassBB>
            </div>
        );
    }
}
class GrowthCourse extends Component{
    render(){
        const state=store.getState()
        return (
            <div>
                GrowthCourse : <br/>
                <div className="bd">
                    {state.tab.growth.nav1} <br/>
                    {state.model.growth.title} <br/>
                    {state.model.growth.visible1.toString()}
                </div>
            </div>
        );
    }
}

class Practice extends Component<any, any>{
    render(){
        return (
            <div>
                <ClassCourse></ClassCourse>
                <GrowthCourse></GrowthCourse>
            </div>
        );
    }
}

export default Practice;