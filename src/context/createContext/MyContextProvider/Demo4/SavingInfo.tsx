/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:02:35
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:24:56
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\SavingInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {MyContainer} from "./MyContextProvider.tsx";
export default function SavingInfo() {
    const [state,setState] = MyContainer.useTracked()
    function addSaving() {
        setState((prev)=>({...prev,saving: prev.saving+1}))
    }
    return (
        <div className='info-card'>
            <span>{state.saving}</span>
            <button onClick={addSaving}>addSaving</button>
            <span>{Math.random()}</span>
        </div>
    );
}
