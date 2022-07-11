import React from 'react'
import { connect } from 'react-redux';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';

export const MovieListItem = () => {
  return (
    <div>Title:</div>
  )
}
//親コンポーネントでnullか判定しているからここはnull判定不要。
type StateToProps = MovieData;
type Props = StateToProps;

const mapStateToProps = () => ({
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem)
