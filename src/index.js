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
    .then(movies => {
      App(movies.Search);
    });
}

function Indiana(props) {
  return (
    <p>
      Indiana Jones: {props.film.title}
    </p>
  );
}

function App(filmsArray) {
  console.log('FILMS', filmsArray);
  const indie = filmsArray.map(film => (
    <Indiana
        key={film.imdbID}
        title={film.Title}
        poster={film.Poster}
        type={film.Type}
        year={film.Year}
    />
  ));
  console.log(indie.key);
  return (
    <div>
      <h1>The Best Action Flicks Ever</h1>
      {indie}
    </div>
  );
}


ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
