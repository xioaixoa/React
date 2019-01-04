import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChangeInputValue, getAddValue, getDelValue } from './store/actionCreators'

// 无状态组件 ，只有一个render，将render里面的东西复制过去即可，
// this.props 就写成 props
// 性能高
// const TodoList = (props) => {

// }

class TodoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        // 结构赋值 下面的this.props就可以直接取消
        const { inputValue, list, getChangeInputValue, handleAdd, handleChange, handleDel } = this.props;

        return (
            <div>
                <div>
                    <input
                        value={this.props.inputValue}
                        onChange={this.props.handleChange}
                    />
                    <button
                        onClick={this.props.handleAdd}>Add</button>
                </div>
                {
                    this.props.list.map((item, index) => 
                    <li 
                    key={index} 
                    onClick={() => (this.props.handleDel(index))}
                    >{item}</li>)
                }
            </div>
        )
    }

}

// 把store映射给props
const mapStataToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
// store.dispatch 映射到props上  
const mapDispatchToProps = (dispatch) => {
    return {
        handleChange(e) {
            const action = getChangeInputValue(e.target.value);
            dispatch(action);
        },

        handleAdd() {
            const action = getAddValue();
            dispatch(action);
        },
        handleDel(index) {
            const action = getDelValue(index);
            dispatch(action);
        }
    }
}
// TodoList 和store做连接，export之后，UI组件就变成容器组件了
export default connect(mapStataToProps, mapDispatchToProps)(TodoList);