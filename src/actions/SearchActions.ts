import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { OMDB } from '../api/OMDB';
import store from '../store';
import axios from 'axios';
import { apiKey } from '../api/OMDB';
import { RootActions, RootStates } from '../types'

export const inputKeyword = (keyword:string) => {
  return {
    type: 'INPUT_KEYWORD',
    payload:keyword
  }
};

export const searchKeyword = (): ThunkAction<any, any,any,any> => async (dispatch: Dispatch) => {
  const result = await OMDB.get(`?s=${store.getState().search.keyword}&apikey=${apiKey}`);
  console.log(result)
  dispatch({ type: 'SEARCH_KEYWORD', payload: result });
}

export const showKeywordErrMsg = (msg: string) => {
  return {
    type: 'SHOW_KEYWORD_ERR_MSG',
    payload:msg
  }
}
