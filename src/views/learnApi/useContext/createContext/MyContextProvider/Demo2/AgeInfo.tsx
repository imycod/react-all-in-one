/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:02:20
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:16:01
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\AgeInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, {useContext} from 'react'
import {InfoContext} from "./index.tsx";

export default function AgeInfo() {
  const {age,addAge}=  useContext(InfoContext)
    return (
        <div className='info-card'>
            <span>{age}</span>
            <button onClick={addAge}>age ++</button>
            <span>{Math.random()}</span>
        </div>
    );
}
