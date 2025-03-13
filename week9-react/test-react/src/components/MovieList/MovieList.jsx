import {useState} from "react";
import Movie from "../Movie/Movie";

//hardcoded array of movies
//Typically, you would get your data from an API or some other source.
var movieArray = [
  {
    title: "The King's Man",
    year: "2021"
  },
  {
    title: "The Dark Knight",
    year: "2008"
  }
];

export default function MovieList() {
  //create state variable and set movieArray as the initial value
  const [moviesList, setMoviesList] = useState(movieArray);

  function formHandler(e) {
    e.preventDefault(); //prevent page reload
    //e.target corresponds to the form (if using onsubmit for a form)
    //console.log(e.target.title.value);
    let newMovie = {
      title: e.target.title.value,
      year: e.target.year.value
    };
    //You cannot use moviesList.push(newMovie) inside setMoviesList because .push() directly modifies the array (i.e. the moviesList array, which is our state variable).
    /* You also cannot do [moviesList, newMovie] because this will result in 
    [
      [{<movie_1>}, {<movie_2>}], 
      {...}
      ]
    */
    /*
      What we want is 
      [
        {<movie_1}, 
        {<movie_2>}, 
        { <newMovie> }
      ]
    */
    //The array spread syntax (...<array_var>) will spread out the array and only list out the items without the array structure ([]).

    setMoviesList([
      ...moviesList,
      newMovie
    ])
  }

  return(
    <section>
      <h2>My Movies</h2>
      <form onSubmit={formHandler}>
        <label htmlFor="title">Movie title:</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="year">Movie year:</label>
        <input type="text" id="year" name="year" />
        <button type="submit">Add movie</button>
      </form>
      {
        moviesList.map((m) => (
          <Movie 
            title={m.title} 
            year={m.year} 
            key={m.title + m.year}
          />
        ))
      }
    </section>
  );
}