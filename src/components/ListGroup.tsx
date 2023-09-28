/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 01:05:02
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-09-29 01:30:49
 * @FilePath: \react-all-in-one\src\components\ListGroup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * https://getbootstrap.com/
 */

import { Fragment, useState } from "react";

import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // const getMessage = () => {
  //   return items.length === 0 ? <p>No item found</p> : null;
  // };

  const handleClick = (event: MouseEvent) => {};
  return (
    <Fragment>
      {/*  React.createElement('h1') */}
      <h1>List</h1>
      {/* {getMessage()} */}
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
    </Fragment>
  );
}

export default ListGroup;
