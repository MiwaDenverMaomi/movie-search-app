import React from 'react'
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';
import store from '../store';
export const MovieList = ({ result, resultErr }: Props) => {

  return (
    <div>MovieList
      {result?.map(item => <MovieListItem key={item.imdbID} movie={item} />)}
    </div>
  )
}

type StateToProps = {
  result: MovieData[],
  resultErr: string | null,
}
type Props = StateToProps;

const mapStateToProps = (state: RootStates ) => ({
  result: state.search.result,
  resultErr: state.search.resultErr,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
