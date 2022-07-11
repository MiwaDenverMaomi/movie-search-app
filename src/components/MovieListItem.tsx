import React from 'react'
import { connect } from 'react-redux';
import { MovieData } from '../types/Search';
import { RootStates } from '../types';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export const MovieListItem = ({ movie }:any) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
      <Card sx={{ width:150  }}>
      <CardMedia
        component="img"
        width="100%"
        height="auto"
        image={movie.Poster}
        alt={movie.Title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
        <CardContent>
          <Typography variant="h6">Type:{movie.Title}</Typography>
          <Typography variant="body2">{movie.Year}</Typography>
          <Typography variant="body2">Type:{movie.Type}
          </Typography>
        </CardContent>
    </Card>
  )
}

//親コンポーネントでnullか判定しているからここはnull判定不要。
type StateToProps = MovieData;
type Props = StateToProps;

const mapStateToProps = (state: RootStates, ownProps: {movie:MovieData|null}) => ({movie:ownProps.movie
})//★この定義が分からない

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListItem)
