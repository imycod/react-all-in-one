import  {Component,createContext} from 'react';
import {nanoid} from "nanoid"

import {MyTodoContext} from "./TodoContext.tsx"
const MyContext = createContext(MyTodoContext);
class Header extends Component{
    static contextType = MyContext;
    addTodo=(event)=>{
        const {keyCode,target}=event
        if (keyCode!==13) return
        if (target.value.trim()==='') {
            // @ts-ignore
            alert('输入不能为空');
            return
        }
        const context=this.context._currentValue
        context.setTodo({
            id:nanoid(),
            name:target.value,
            done:false,
        })
        event.target.value=""
    }
    render(){
        // const contextData = this.context;
        // console.log(contextData._currentValue)
        return (
            <div>
                <input
                    className="form-control"
                    type="text"
                    placeholder="Default input" aria-label="default input example"
                    onKeyUp={this.addTodo}
                />
            </div>
        );
    }
}

export default Header;