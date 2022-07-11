import { combineReducers } from '@reduxjs/toolkit';
import searchReducer from './searchReducer';

const reducers = combineReducers({
  search:searchReducer//ここでreducerごとにkey 名を入れる！！！でないとcomponentでstate.searchReducer.keywordみたいなプロパティになる。
});

export default reducers;
