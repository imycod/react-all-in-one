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
            return [data, ...preState];
        default:
            return preState
    }
};