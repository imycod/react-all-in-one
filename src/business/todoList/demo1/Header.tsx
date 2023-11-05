import  {Component} from 'react';
import {nanoid} from "nanoid"
import PropTypes from "proptypes"
class Header extends Component{
    static propTypes ={
        setTodo:PropTypes.func.isRequired,
    }
    addTodo=(event)=>{
        const {keyCode,target}=event
        if (keyCode!==13) return
        if (target.value.trim()==='') {
            // @ts-ignore
            alert('输入不能为空');
            return
        }
        this.props.setTodo({
            id:nanoid(),
            name:target.value,
            done:false,
        })
        event.target.value=""
    }
    render(){
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