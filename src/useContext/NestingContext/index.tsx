import React from 'react';

import Demo from "./Demo.tsx"
function NestingAtomExample() {
    return (
        <div>
            <div>
                <Demo></Demo>
            </div>
            <h3>避免复杂嵌套场景</h3>
        </div>
    );
}

export default NestingAtomExample;