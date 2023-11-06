import {ADD_PERSON} from "@/constant/business.tsx";

interface IPerson {
    name:string;
    age:number;
    id:string;
}

const initialState:IPerson[]=[
    {
        id: '003',
        name:'tom',
        age:22,
    }
]

export default function (preState = initialState, action) {
    console.log(action.type)
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            // 这里不能直接更改preState，纯函数必须返回一个新的值，或者返回一个新引用
            return [data, ...preState];
        default:
            return preState
    }
};