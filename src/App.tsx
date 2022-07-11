import React from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import MovieList from './components/MovieList';
import MovieListItem from './components/MovieListItem';

const App=()=> {
  return (
    <div className="App">
      <Header />
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
