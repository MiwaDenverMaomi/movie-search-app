import React from 'react'
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';
export const MovieList = ({ result, resultErr }: Props) => {

  return (
    <div>MovieList
      {result?.map((movie: MovieData) =>
<MovieListItem key={movie.imdbID} movie={movie} />)}
      <div>Result Err:{resultErr ? resultErr : ''}</div>

    </div>
  )
}

type StateToProps = {
  result: MovieData[],
  resultErr: string | null,
}
type Props = StateToProps;

const mapStateToProps = (state: { search: {result:MovieData[],resultErr:string} } ) => ({
  result: state.search.result,
  resultErr: state.search.resultErr,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
