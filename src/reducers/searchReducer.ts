import React from 'react';
import { validRequired, sanitize } from '../functions';
import { RootActions, RootStates } from '../types';
import { SearchStates } from '../types/Search';



type State =any;
const initialState:State = {
  keyword: '',
  result: null,
  resultErr: null,
  keywordErr:null
}

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'INPUT_KEYWORD':
      return { ...state,keyword:action.payload};
      break;

    case 'SEARCH_KEYWORD':
      let keywordResult = null;
      let keyword = '';

      if (action.payload === undefined) {
        return { ...state, resultErr: 'Sorry! We could not find it!', result: null };
      } else if (action.payload.data.Response === 'False') {
        return { ...state, resultErr: action.payload.data.Error, result:null }
      } else {
        return { ...state, resultErr:null,result: action.payload.data.Search };
      }

      break;
    case 'SHOW_KEYWORD_ERR_MSG':
      return {...state,keywordErr:action.payload};
  }
  return state;
};

export default searchReducer;
