import React from 'react';

import CreateContext from "./createContext/CreateContext.tsx"
import AppContext from "./AppContext"
function Context() {
    return (
        <>
            {/*<CreateContext></CreateContext>*/}
            <div>
                <AppContext></AppContext>
            </div>
        </>
    );
}

export default Context;