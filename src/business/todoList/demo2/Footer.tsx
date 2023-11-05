import React, {useContext} from "react";

import "./footer.scss"
import {MyTodoContext} from "./TodoContext.tsx";
function Footer(){
    const {todos,handleCheckAll,handleClear} = useContext(MyTodoContext)
    const doneNum=todos.filter(todo=>todo.done).length
    const total=todos.length
    return (
        <div className="footer-container">
            {Math.random()}
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    checked={doneNum == total && total > 0}
                    onChange={(event)=>handleCheckAll(event.target.checked)}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    已完成 {doneNum} / 全部 {total}
                </label>
            </div>
            <button type="button" className="btn btn-danger" onClick={handleClear}>清除已完成的任务</button>
        </div>
    );
}

export default Footer;