import {Component, PureComponent} from "react";

import "./footer.scss"
class Footer extends Component{
    handleCheck=(event)=>{
        this.props.handleCheckAll(event.target.checked);
    }
    render(){
        const {todos}=this.props
        const doneNum = todos.filter(todo=>todo.done).length
        const total=todos.length
        // todos.reduce((pre,todo)=>pre+(todo.done?1:0),0)
        return (
            <div className="footer-container">
                {Math.random()}
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={total === doneNum && total>0} onChange={this.handleCheck}/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                       已完成 {doneNum} / 全部 {total}
                    </label>
                </div>
                <button type="button" className="btn btn-danger" onClick={this.props.handleClear}>清除已完成的任务</button>
            </div>
        );
    }
}

export default Footer;