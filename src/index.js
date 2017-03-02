import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

ReactDOM.render(
  <h1>Loading...</h1>,
  document.getElementById('root')
);

function films() {
  return fetch('http://www.omdbapi.com/?s=Indiana+Jones&plot=short&r=json')
    .then(res => res.json())
    .then(res => {
      const movies = res.Search;
      ReactDOM.render(
      <App movies={movies}/>,
      document.getElementById('root')
      );
    });
}

/*function Indiana(props) {
  return (
    <p>
      Indiana Jones: {props.movies.indie}
    </p>
  );
}*/

function App(props) {
  console.log('FILMS', props.movies);
  const indie = props.movies.map(film => {
    return (
    <li key={film.imdbID}>
        title={film.Title}
        year={film.Year}
    </li>
    );
  });
  return (
    <div>
      <h1>The Best Action Flicks Ever</h1>
      <ol>{indie}</ol>
    </div>
  );
}

films();