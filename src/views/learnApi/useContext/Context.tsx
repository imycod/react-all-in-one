import React from 'react';

import CreateContext from "./createContext/CreateContext.tsx"
import AppContext from "./AppContext"
import NestingAtomExample from "./NestingContext";
function Context() {
    return (
        <>
            {/*<CreateContext></CreateContext>*/}
            {/*<AppContext></AppContext>*/}
            <NestingAtomExample></NestingAtomExample>
        </>
    );
}

export default Context;