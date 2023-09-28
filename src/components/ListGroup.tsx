/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 01:05:02
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-09-29 01:30:49
 * @FilePath: \react-all-in-one\src\components\ListGroup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * https://getbootstrap.com/
 */

import { useState, MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({items,heading}:Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
