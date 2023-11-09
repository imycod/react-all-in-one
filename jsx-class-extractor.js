/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-11-02 09:47:28
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-11-02 17:57:25
 * @FilePath: \react-all-in-one\jsx-class-extractor.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fs from "fs"
// 出现的页面 后期人工审查
const pathViewMap = {}
// 出现的样式 需要到时候用补的
const cssMap = {}

const keyMap = {
    'p-t': 'padding-top',
    'p-l': 'padding-left',
    'p-r': 'padding-right',
    'p-b': 'padding-bottom',
    'm-t': 'margin-top',
    'm-l': 'margin-left',
    'm-r': 'margin-right',
    'm-b': 'margin-bottom'
}
async function write(fileName, content) {
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            console.error(err);
        }
    });
}
function outCssStyle() {
    const css = Object.keys(cssMap)
    let styleCss = ''

    css.forEach(el => {
        let signleCss = ''
        const params = el.split('-')
        // 判断两个
        if (params.length <= 2) {
            if (params[0] == 'm') {
                signleCss = `.${el} {
            margin: ${params[1]}px;
          }`
            } else {
                signleCss = `.${el} {
            padding: ${params[1]}px;
          }`
            }
        } else {
            const attr = `${params[0]}-${params[1]}`
            signleCss = `.${el} {
           ${keyMap[attr]}: ${params[2]}px;
          }`
        }
        if (signleCss) { styleCss = styleCss + '\n' + signleCss }
    })
    return styleCss
}



export default function () {
    // 文件所在相对路径
    return {
        visitor: {
            Program: {
                enter(path, state) {
                    // 进入每个文件时执行的操作
                    const currentFileAbsolutePath = state.file.opts.filename;
                    console.log('当前文件的绝对路径：', currentFileAbsolutePath);
                },
                exit() {
                    // 所有文件解析完毕后执行的操作
                    console.log('所有文件已解析完毕');
                    write('./src/ast/files.txt', Object.keys(pathViewMap).join('\n'))
                    write('./src/ast/css.txt', Object.keys(cssMap).join('\n'))
                    write('./src/assets/diyStyle.scss', outCssStyle())
                },
            },
            JSXAttribute(path, state) {
                const { node } = path
                const currentFileAbsolutePath = state.file.opts.filename;
                console.log('当前文件的绝对路径：', currentFileAbsolutePath);
                console.log('path--', path);
                // 文件的绝对路径

                if (node.name.name === "className" && node.value.type === "JSXExpressionContainer") {
                    const { expression } = node.value
                    const { left, right } = expression
                    const classText = left.value + right.value
                    const cssRegExp = /\b(p|m)(-(l|r|t|b))?-\d+/g;
                    const matches = classText.match(cssRegExp);
                    if (matches && matches.length) {
                        console.log(matches);
                        // 这个时候表示这个页面存在这种样式
                        if (!pathViewMap[currentFileAbsolutePath]) {
                            pathViewMap[currentFileAbsolutePath] = classText
                        }
                        matches.forEach(el => {
                            if (!cssMap[el]) {
                                cssMap[el] = true
                            }
                        })
                    }
                }
            }
        }
    };
};
