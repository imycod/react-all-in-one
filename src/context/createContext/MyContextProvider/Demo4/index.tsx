import React from 'react';
import AgeInfo from "./AgeInfo.tsx";
import SavingInfo from "./SavingInfo.tsx";
import {MyContainer} from "./MyContextProvider.tsx";

function Demo4() {
    return (
        <MyContainer.Provider>
            <div className="App">
                <AgeInfo></AgeInfo>
                <SavingInfo></SavingInfo>
            </div>
        </MyContainer.Provider>
    );
}

export default Demo4;