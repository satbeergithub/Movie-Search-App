import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MovieList.css";
import { Link } from "react-router-dom";
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=star wars&page=${currentPage}&apikey=8a7484af`
      );
      setMovies((prevMovies) => [...prevMovies, ...response.data.Search]);
      setHasMore(response.data.Search.length > 0);
      console.log(response.data.Search)
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
   
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const apiCall = () => {
    const data = axios.get(
      `http://www.omdbapi.com/?s=${text}&apikey=8a7484af&page=${currentPage}`
    );
    return data;
  };
  const fetchmoviehandler = (event) => {
    event.preventDefault();
    setLoading(true);
    const data = apiCall();
    data
      .then((resp) => {
        console.log(resp.data.Search);
        setMovies(resp.data.Search);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
      });
    setText("");
  };
  return (
    <div className="app">
      <h5>Movie Search App</h5>
      <form className="form-inline" onSubmit={fetchmoviehandler}>
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Enter Movie Name"
          aria-label="Search"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        />
        <button type="submit" className="btn btn-dark ">
          Search
        </button>
      </form>
      {!loading && error && <p>{error}</p>}

      <div className="col">
        {loading && (
          <span style={{ textAlign: "center" }}>Loading a content....</span>
        )}
        {!loading && movies && movies.length ? (
          movies.map((movie, i) => (
            <div key={i}>
              {
                <div className="col1">
                  <Link to={`/movie/${movie.imdbID}`}>
                  <img
                    src={
                      movie.Poster === "N/A"
                        ? "https://cdn.pixabay.com/photo/2017/09/04/09/37/cinema-strip-2713352_960_720.jpg"
                        : movie.Poster
                    }
                    className="si"
                    alt="movie.Title"
                  />
                  </Link>
                  <div>
                    <h4>{movie.Title}</h4>
                    <span>{movie.Year}</span>
                  </div>
                </div>
              }
            </div>
          ))
        )
         :
         (!loading && <h5 style={{ textAlign: "centre" }}>No movies found</h5>)
        }
      </div>

      {!loading && hasMore && (
        <button onClick={handleLoadMore} className="btn btn-primary">
          Load More.......
        </button>
      )}
    </div>
  );
};

export default MovieList;
