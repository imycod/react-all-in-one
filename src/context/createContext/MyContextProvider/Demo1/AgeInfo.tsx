/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:02:20
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:16:01
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\AgeInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import PropTypes from "proptypes"

type AgeInfoProps = {
  age: number;
  addAge: () => void
}

export default function AgeInfo({ age, addAge }: AgeInfoProps) {
    return (
        <div className='info-card'>
            <p>savinginfo和ageinfo会触发父组件渲染，同时子组件跟着渲染</p>
            <span>{age}</span>
            <button onClick={addAge}>age ++</button>
            <span>{Math.random()}</span>
        </div>
    );
}
AgeInfo.propTypes = {
  age: PropTypes.number.isRequired,
  addAge: PropTypes.func.isRequired
}