import { takeEvery , put} from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType'
import { initListAction } from './actionCreators';
import axios from 'axios';
import store from '.';
/*Alternatively you may use takeLatest.
  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

function* getInitListSaga() {
    try {
        const res = yield axios.get('/todoList.json');
        const action = initListAction(res.data);
        // 传给store reducer进行处理
        yield put(action);
    }catch(e) {
        console.log('list.json 404');
    }
}
// generrator 函数
function* todoSaga() {
    // 捕捉action的类型
    yield takeEvery(GET_INIT_LIST, getInitListSaga);
}

export default todoSaga;
