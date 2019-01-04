import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';

// Provider 提供器连接了store，那么这里面的所有组件可以使用store
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
