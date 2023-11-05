import {Component} from 'react';
import PropTypes from "proptypes"
import Item from "./ListItem.tsx"
class List extends Component{
    static propTypes={
        todos:PropTypes.array.isRequired,
        setCheckById:PropTypes.func.isRequired,
        handleDelete:PropTypes.func.isRequired,
    }
    static defaultProps={
        todos: ['1', '2'],
    }
    render(){
        const {todos,setCheckById,handleDelete}=this.props
        return (
            <>
                <ul className="list-group">
                    {todos.map(todo=><Item key={todo.id} {...todo} setCheckById={setCheckById} handleDelete={handleDelete}></Item>)}
                </ul>
            </>
        );
    }
}

export default List;