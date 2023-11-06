import React from 'react';
import { connect } from 'react-redux';


function ReduxContainerChild(props) {
    console.log(props);
    return (
        <div>
            {props.count}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.value
    }
}
const ReduxChildCount = connect(mapStateToProps)(ReduxContainerChild)


import { createAddCountAction,createMinusCount } from '@/store/redux/raw/counter/action';
function ReduxContainer(props) {
    console.log('ReduxContainer---',props);
    return (
        <div>
            redux
            <ReduxChildCount />
            <button onClick={()=>props.addCount()}>加</button>
            <button onClick={()=>props.miusCount()}>减</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCount() {
            dispatch(createAddCountAction())
        },
        miusCount() {
            dispatch(createMinusCount(29))
        },
    }
}
export default connect(null,mapDispatchToProps)(ReduxContainer);