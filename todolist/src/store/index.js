import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga';
import todoSagas from './saga';


// create the saga middleware
// 创建 SagaMiddleware 
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware)
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

  // 使用 SagaMiddleware 
const enhancer = composeEnhancers(
  applyMiddleware(thunk,sagaMiddleware)
);

// 创建sagaMiddleware 中间件
const store = createStore(reducer, enhancer);

// then run the saga
sagaMiddleware.run(todoSagas);

export default store;
