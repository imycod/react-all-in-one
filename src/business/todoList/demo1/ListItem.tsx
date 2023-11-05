import {Component} from 'react';
import PropTypes from "proptypes"
import styles from "./listItem.module.css"
class ListItem extends Component{

    static propTypes={
        setCheckById:PropTypes.func.isRequired,
        handleDelete:PropTypes.func.isRequired,
    }

    state={
        mouse:false,
    }

    setCheck=(id)=>{
        return (event)=>{
            this.props.setCheckById(id,event.target.checked)
        }
    }

    handleMouse=(flag)=>{
        return (_)=>{
            this.setState({
                mouse:flag,
                id:this.props.id
            },()=>{
                // console.log('listitem',this.state)
            })
        }
    }
    handleDelete=(id)=>{
        if(window.confirm('确定删除吗')){
            this.props.handleDelete(id)
        }
    }
    render(){
        const {id, name, done} = this.props;
        const {mouse}=this.state
        const className=`list-group-item ${styles['flex-between']} ${mouse ? 'list-group-item-success':null}`
        return (
            <>
                <li className={className} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                    <div>
                        {/* defaultChecked={done} 只在初始化时有用 */}
                        {/*<input className="form-check-input me-1" type="checkbox" name="listGroupRadio" value="" id="firstRadio" defaultChecked={done} onChange={this.setCheck(id)}/>*/}
                        <input className="form-check-input me-1" type="checkbox" name="listGroupRadio" value="" id="firstRadio" checked={done} onChange={this.setCheck(id)}/>
                        <label className="form-check-label" htmlFor="firstRadio">{name}</label>
                    </div>
                    <button onClick={()=>this.handleDelete(id)} type="button" className="btn btn-danger" style={{display:mouse ?'block':'none'}}>删除</button>
                </li>
            </>
        );
    }
}

export default ListItem;