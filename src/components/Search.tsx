import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from '@reduxjs/toolkit';
import { ThunkDispatch,ThunkAction } from 'redux-thunk';
import { inputKeyword,showKeywordErrMsg,searchKeyword } from '../actions/SearchActions';
import store from '../store';
import { validRequired } from '../functions';
import { RootStates, RootActions } from '../types';
import { SearchStates } from '../types/Search';
import { MovieData } from '../types/Search'
import { Container, Box, InputBase, Button,Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      width: '100%',
      height: 100,
      backgroundColor: 'grey',
      position: 'fixed',
      left: 0,
      bottom: 0
    },
    buttonSearch: {
      marginLeft: 5,
      backgroundColor: 'white'
    },
    inputRoot: {
      color: 'inherit',
      backgroundColor: 'white',
      borderRadius: '3px',
      marginTop: 30
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 1),
      // vertical padding + font size from searchIcon
      // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '18ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export const Search = ({ keyword, keywordErr, inputKeyword,  showKeywordErrMsg,searchKeyword }: Props) => {
  const classes = useStyles();
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
      <Box className={classes.box}>
        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          value={keyword}
          onChange={e => inputKeyword(e.target.value)}
        />
        <Button className={classes.buttonSearch} onClick={handleClickSearch}>Search</Button>
        <Typography>{keywordErr}</Typography>
      </Box>
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
