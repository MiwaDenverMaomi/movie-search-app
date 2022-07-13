import React from 'react'
import { connect } from 'react-redux';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const MovieListItem = ({ movie }:any) => {

  return (
     <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ width:'90%',height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={movie.Poster}
        alt={movie.Title}
      />
        <CardContent>
          <Typography variant="body1"  sx={{fontWeight:'bold'}}>{movie.Title}</Typography>
          <Typography variant="body2">{movie.Type}/{movie.Year}
          </Typography>
          <CardActions disableSpacing>
          <Link href={`https://www.imdb.com/title/${movie.imdbID}/`} target="blank" sx={{textDecoration:'none'}}>Details</Link>
      </CardActions>
        </CardContent>
    </Card>
    </Grid>
  )
}

//親コンポーネントでnullか判定しているからここはnull判定不要。
type StateToProps = MovieData;
type Props = StateToProps;

const mapStateToProps = (state: RootStates, ownProps: {movie:MovieData|null}) => ({movie:ownProps.movie
})//★この定義が分からない

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem)
