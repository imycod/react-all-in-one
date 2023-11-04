import React from 'react';

import MyContextProvider from "./MyContextProvider.tsx";
import AgeInfo from "./AgeInfo.tsx";
import SavingInfo from "./SavingInfo.tsx";
function Demo3() {
    return (
        <MyContextProvider>
            <div>
                <AgeInfo></AgeInfo>
                <SavingInfo></SavingInfo>
            </div>
        </MyContextProvider>
    );
}

export default Demo3;