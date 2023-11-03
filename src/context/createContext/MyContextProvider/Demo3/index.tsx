import React from 'react';

import MyContextProvider from "./MyContextProvider.tsx";
import AgeInfo from "../Demo3/AgeInfo.tsx";
import SavingInfo from "../Demo3/SavingInfo.tsx";
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