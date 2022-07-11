import React from 'react'
import { connect } from 'react-redux';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';

export const MovieListItem = ({ movie }:any) => {
  return (
    <div>Title:{ movie.Title}</div>
  )
}
//親コンポーネントでnullか判定しているからここはnull判定不要。
type StateToProps = MovieData;
type Props = StateToProps;

const mapStateToProps = (state: RootStates, ownProps: {movie:MovieData|null}) => ({movie:ownProps.movie
})//★この定義が分からない

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem)
