/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-03 05:08:08
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-03 05:26:42
 * @FilePath: \react-all-in-one\src\context\createContext\MyContextProvider\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'

import "./index.scss"
import Demo1 from './Demo1'
import Demo2 from './Demo2'
import Demo3 from "./Demo3";
import Demo4 from "./Demo4";
export default function MyContextProvider() {
    return (
        <div>
            {/*<Demo1></Demo1>*/}
            {/*<Demo2></Demo2>*/}
            {/*<Demo3></Demo3>*/}
            <Demo4></Demo4>
        </div>
    );
}
