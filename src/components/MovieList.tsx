import React from 'react'
import { connect } from 'react-redux'
import MovieListItem from './MovieListItem';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import store from '../store';

export const MovieList = ({ result, resultErr }: Props) => {

  return (
<Container sx={{ py: 8 }} maxWidth="md">
    <Grid container spacing={3}>{result?.map(item => <MovieListItem key={item.imdbID} movie={item} />)}
    </Grid>
    <div>{resultErr}</div>
</Container>

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
