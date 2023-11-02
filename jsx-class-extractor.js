/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-02 09:47:28
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-02 10:42:31
 * @FilePath: \react-all-in-one\jsx-class-extractor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default function () {
    return {
        visitor: {
            JSXAttribute(path) {
                console.log('path.node.value---',path.node);
                if (path.node.name.name === "className" && path.node.value.type === "JSXExpressionContainer") {
                    console.log(path.node.value);
                    // 使用正则表达式来匹配类名
                    // const classNames = path.node.value.value.match(/\S+/g);
                    // if (classNames) {
                        // 处理提取到的类名
                        // 在这里你可以执行你的预处理操作
                        // console.log("Extracted classNames:", classNames);
                    // }
                }
            }
        }
    };
};
