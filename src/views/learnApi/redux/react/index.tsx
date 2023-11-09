import React from 'react';

// UI组件和容器组件
import Demo1 from "./demo1.tsx"
// 因为App已经提供的Provider了 注意引用redux/react的store
import Demo2 from "./demo2.tsx"
import {store} from "./demo1";
function ReactFC(props) {
    return (
        <div>
            <Demo1 store={store}/> // 给容器组件传递store
            <Demo2/>
        </div>
    );
}

export default ReactFC;