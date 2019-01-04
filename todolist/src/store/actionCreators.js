import { GET_INIT_LIST,INIT_LIST_ACTION,CHANGE_INPUT_INPUTVALUE, ADD_TODO_ITEM, DEL_DATA, GET_AJAX } from "./actionType";
import axios from 'axios';
import store from '../store/index'

export const getInputChangeAction = (value) => ({
    type:  CHANGE_INPUT_INPUTVALUE,
    value
})

export const getAddTodoItem = () => ({
    type:  ADD_TODO_ITEM,
})

export const getDelData = (index) => ({
    type:  DEL_DATA,
    index
})

export const getAjax = (data) => ({
    type:  GET_AJAX,
    data
})

// export const getTodoList = () => {
//     return () => {
//       axios.get("../../todoList.json")
//       .then(res => {
//           const data = res.data;
//         const action = getAjax(data);
//         store.dispatch(action);
//       })
//     }
// }

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getInitList = () => ({
   type: GET_INIT_LIST ,
});