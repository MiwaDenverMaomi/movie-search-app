import React from 'react';
import { Action } from '@reduxjs/toolkit';
import { inputKeyword } from '../actions/SearchActions';

// import { inputKeyword, searchKeyword, showKeywordErrMsg } from '../actions/SearchActions';
export type InputKeywordPayload = string;
export type MovieData = {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
  }

// export type SearchKeywordPayload = {
//   data: {
//     Search?: MovieData[],
//     Response?: string,
//     Error?:string
//   },
//   status: number,
//   statusText: string,
// }

export type ShowKeywordErrMsgPayload = string;

export interface InputKeywordAction extends Action{
  type: string,
  payload:InputKeywordPayload
};

// export interface SearchKeywordAction extends Action{
//   type: string,
//   payload: SearchKeywordPayload
//  }

export interface ShowKeywordErrMsgAction extends Action {
  type: string,
  payload:ShowKeywordErrMsgPayload
};

export type SearchActions = InputKeywordAction & ShowKeywordErrMsgAction;

// export type SearchActions = InputKeywordAction & ShowKeywordErrMsgAction&SearchKeywordAction

export type SearchStates = {
    result:  null,
    keyword: string,
    resultErr: string | null,
    keywordErr: string | null
};
