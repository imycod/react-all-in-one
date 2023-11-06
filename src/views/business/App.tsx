/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-09-29 00:37:04
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-02 10:38:59
 * @FilePath: \react-all-in-one\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// import QuaterTime from "@/components/QuaterTime/QuaterTime";
import QuaterTimeConfig from "@/components/QuaterTime/QuaterTimeConfig";

function App() {
  const emptyArray = new Array(1).fill(null);
  return (
    <div>
      {/* <QuaterTime></QuaterTime>   */}
      {/* <QuaterTimeConfig></QuaterTimeConfig>   */}
      { emptyArray.map((_,i)=><li className={'m-l-'+ 2}>i</li>) }
    </div>
  );
}

export default App;
