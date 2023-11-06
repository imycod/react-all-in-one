import React, {useEffect, useState} from 'react';
import {Button, Input, Space, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {ADD_PERSON} from "@/constant/business.tsx";
import {nanoid} from "nanoid";

function PersonList(props) {
    const persons = useSelector(state=>state.personReducer)
    const [dataSource,setDataSource]=useState(persons)
    const [user,setUser]=useState({
        name:'',
        age:''
    })
    const dispatch= useDispatch()

    useEffect(()=>{
        console.log('persons---',persons)
        setDataSource(persons)
    },[persons])

    const add=()=>{
        dispatch({type:ADD_PERSON,data:user})
    }
    const columns=[
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
            <div>
                <Table  rowKey="id" dataSource={dataSource} columns={columns}></Table>
            </div>
        </div>
    );
}

export default PersonList;