import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';


// function ReduxContainerChild(props) {
//     console.log(props);
//     return (
//         <div>
//             {props.count}
//         </div>
//     )
// }
class ReduxContainerChild extends Component{
    render(){
        return (
            <div>
                {this.props.count}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        count: state.value
    }
}
const ReduxChildCount = connect(mapStateToProps)(ReduxContainerChild)


import { createAddCountAction,createMinusCount } from '@/store/redux/raw/counter/action';
function ReduxReactContainer(props) {
    console.log('ReduxContainer---',props);
    const dispatch = useDispatch();

    // const counter = useSelector(state => state.counter);
    function add() {
        // props.addCount()  // use connect
        dispatch({type:'increment',value:1})
    }
    function minus() {
        // props.miusCount() // use connect
        dispatch({type:'decrement',value:1})
    }
    return (
        <div>
            <ReduxChildCount />
            <button onClick={add}>加</button>
            <button onClick={minus}>减</button>
            <p>
                react-redux注意store在mainjs根组件如何使用
            </p>
        </div>
    );
}

// class ReduxContainer extends Component{
//
//     render(){
//         return (
//             <div>
//                 redux
//                 <ReduxChildCount />
//                 <button onClick={()=>this.props.addCount()}>加</button>
//                 <button onClick={()=>this.props.miusCount()}>减</button>
//             </div>
//         );
//     }
// }
// https://medium.com/@rrohit.maheshwari/react-app-using-redux-e6a1a69822d1

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addCount() {
//             dispatch({type:'increment',value:10})
//         },
//         miusCount() {
//             dispatch({type:'decrement',value:29})
//         },
//     }
// }
// export default connect(null,mapDispatchToProps)(ReduxContainer);
export default ReduxReactContainer;