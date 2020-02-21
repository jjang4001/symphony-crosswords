import { createStore, combineReducers } from 'redux';

const reducers = {};
const reducer = combineReducers(reducers);

const store = createStore(reducer);

export default store;
