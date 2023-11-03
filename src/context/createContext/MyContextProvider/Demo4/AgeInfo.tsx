/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:02:20
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:16:01
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\AgeInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import {MyContainer} from "./MyContextProvider.tsx";

export default function AgeInfo() {
    const [state,dispatch] = MyContainer.useTracked();
    return (
        <div className='info-card'>
            <span>{state.age}</span>
            <button onClick={() => dispatch({type: 'addAge'})}>age ++</button>
            <span>{Math.random()}</span>
        </div>
    );
}
