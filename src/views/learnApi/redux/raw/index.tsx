import React, {Component} from 'react';
import { connect } from 'react-redux';


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
// function ReduxContainer(props) {
//     console.log('ReduxContainer---',props);
//     return (
//         <div>
//             redux
//             <ReduxChildCount />
//             <button onClick={()=>props.addCount()}>加</button>
//             <button onClick={()=>props.miusCount()}>减</button>
//         </div>
//     );
// }

class ReduxContainer extends Component{

    render(){
        return (
            <div>
                redux
                <ReduxChildCount />
                <button onClick={()=>this.props.addCount()}>加</button>
                <button onClick={()=>this.props.miusCount()}>减</button>
            </div>
        );
    }
}
// https://medium.com/@rrohit.maheshwari/react-app-using-redux-e6a1a69822d1

const mapDispatchToProps = (dispatch) => {
    return {
        addCount() {
            dispatch({type:'increment',value:10})
        },
        miusCount() {
            dispatch({type:'decrement',value:29})
        },
    }
}
export default connect(null,mapDispatchToProps)(ReduxContainer);