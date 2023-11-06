import React, {Component, useEffect, useState} from 'react';
import {Button, Input, Space, Table} from "antd";
import {connect, useDispatch, useSelector} from "react-redux";
import {ADD_PERSON} from "@/constant/business.tsx";
import {nanoid} from "nanoid";


class List extends Component{

    columns=[
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
    ]
    render(){
        return (
            <div>
                <Table  rowKey="id" dataSource={this.props.dataSource} columns={this.columns}></Table>
            </div>
        )
    }
}
const mapStateToProps= ({personReducer})=>({dataSource:personReducer})
const ListContainer = connect(mapStateToProps)(List)
function PersonList(props) {
    // const persons = useSelector(state=>state.personReducer)
    // const [dataSource,setDataSource]=useState(persons)
    const [user,setUser]=useState({
        name:'',
        age:''
    })
    const dispatch= useDispatch()

    // useEffect(()=>{
    //     console.log('persons---',persons)
    //     setDataSource(persons)
    // },[persons])

    const add=()=>{
        dispatch({type:ADD_PERSON,data:user})
    }
    // const columns=[
    //     {
    //         title: '姓名',
    //         dataIndex: 'name',
    //         key: 'name',
    //     },
    //     {
    //         title: '年龄',
    //         dataIndex: 'age',
    //         key: 'age',
    //     },
    // ]
    function oninput(type) {
        return (e)=>{
            setUser({...user,[type]:e.target.value,id:nanoid()})
        }
    }
    return (
        <div>
            PersonList
            <div>
                <Space>
                    <Input placeholder="请输入姓名" onInput={oninput('name')}></Input>
                </Space>
                <Space>
                    <Input placeholder="请输入年龄" onInput={oninput('age')}></Input>
                </Space>
                <Button type={'primary'} onClick={add}>add</Button>
            </div>
            <ListContainer></ListContainer>
        </div>
    );
}

export default PersonList;