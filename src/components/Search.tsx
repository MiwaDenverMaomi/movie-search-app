import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit';
import { ThunkDispatch,ThunkAction } from 'redux-thunk';
import { inputKeyword,showKeywordErrMsg,searchKeyword } from '../actions/SearchActions';
import store from '../store';
import { validRequired } from '../functions';
import { RootStates, RootActions } from '../types';
import { SearchStates } from '../types/Search';
import { MovieData} from '../types/Search'

export const Search = ({ keyword, keywordErr, inputKeyword,  showKeywordErrMsg,searchKeyword }: Props) => {

  const handleClickSearch = () => {
    //validation
    if (validRequired(keyword)) {
      searchKeyword();
    } else {
      showKeywordErrMsg('Input title!');
    }

  };
  console.log(keyword);
  return (
    <div><input value={keyword} onChange={(e) => inputKeyword(e.target.value)} /><input type="button" value="Search" onClick={handleClickSearch} />{keyword}
      <div>{keywordErr}</div></div>
  )
}

type DispatchToProps = {//ここはRootActionは指定できない。
  inputKeyword: (e: any) => void,
  searchKeyword: ()=>void,
  showKeywordErrMsg: (msg:string)=>void
}

type StateToProps = {
  keyword: string
  result: null
  resultErr: string | null
  keywordErr:string|null
}
type Props = StateToProps & DispatchToProps;

const mapStateToProps = (state:RootStates) => {
  return {
      keyword: state.search.keyword,
      result: state.search.result,
      resultErr: state.search.resultErr,
      keywordErr: state.search.keywordErr,
  }
}

type AppDispatch = Dispatch;
type AppThunkDispatch = ThunkDispatch<RootStates, undefined, RootActions>;
type DISPATCH=AppDispatch&AppThunkDispatch

const mapDispatchToProps = (dispatch: AppDispatch&AppThunkDispatch) => {//dispatchの定義をまとめるのがポイント
  return {
    inputKeyword: (keyword: string) => dispatch(inputKeyword(keyword)),//ここでの引数、引数の型づけをわすれない！dispatch()の中にも引数入れる！！！
    searchKeyword: () => dispatch(searchKeyword()),//thunkDispatchの場合は()=>これから始まる。
    showKeywordErrMsg:(msg:string)=>dispatch(showKeywordErrMsg(msg))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)
