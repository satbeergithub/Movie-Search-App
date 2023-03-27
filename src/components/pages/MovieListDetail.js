import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './MovieListDetail.css'
function MovieListDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${id}&apikey=8a7484af`
    );
    setMovie(response.data);
    console.log(response.data)
  };
  useEffect(()=>{
   fetchMovieDetails()
  })

   return(
    <div>
         <div className="detail">
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt="Movie Poster" />
          <p>Year :{movie.Year}</p>
          <p>Plot: {movie.Plot}</p>
          <p>Actors: {movie.Actors}</p>
          <p>Director: {movie.Director}</p>
          <p>IMDB Rating: {movie.imdbRating}</p>
        </div>
    </div>
   )
}
export default MovieListDetail