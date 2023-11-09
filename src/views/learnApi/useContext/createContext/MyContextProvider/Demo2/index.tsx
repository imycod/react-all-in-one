/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:02:20
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 07:06:00
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\AgeInfo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 一线柏拉图 https://www.bilibili.com/video/BV1Z84y1h7aj/?spm_id_from=333.999.0.0&vd_source=8a6ca6eeeba9a15fe95465ee3242504d
 */
import React, { createContext, useState } from 'react'

import AgeInfo from './AgeInfo'
import SavingInfo from './SavingInfo'

const initialValue={
    age:0,
    addAge:()=>{},
    saving:0,
    addSaving:()=>{}
}
export const InfoContext=createContext(initialValue)

export default function Demo1() {
    const [age, setAge] = useState(20)
    const addAge = () => {
        setAge(prev => prev + 1)
    }

    const [saving, setSaving] = useState(3000)
    const addSaving = () => {
        setSaving(prev => prev + 1000)
    }
    return (
        <InfoContext.Provider value={{age, addAge, saving, addSaving}}>
            <div style={{border:'1px solid black'}}>
                <AgeInfo></AgeInfo>
                <p></p>
                <SavingInfo></SavingInfo>
            </div>
        </InfoContext.Provider>
    );
};
