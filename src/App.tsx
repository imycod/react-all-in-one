/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-09-29 01:51:28
 * @FilePath: \react-all-in-one\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
