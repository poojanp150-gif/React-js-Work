import React, { useState } from 'react'
import { useSelector } from 'react-redux';

export default function Whislist() {

  const [refresh, setRefresh] = useState(false);

  const wishlistData = JSON.parse(localStorage.getItem("whis")) || [];

  const movies = useSelector(state =>
    state.movies.filter(movie =>
      wishlistData.includes(movie.imdbID)
    )
  );

  const handleDelete = (id) => {
    const updatedWishlist = wishlistData.filter(item => item !== id);
    localStorage.setItem("whis", JSON.stringify(updatedWishlist));
    setRefresh(!refresh)
  }
  return (
    <div>
      {
        movies && movies.map((movie, index) => (
          <div key={index}>
            <img
              src={movie.Poster}
              className="card-img-top"
              alt={movie.Title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">
                <strong>Year:</strong> {movie.Year}
              </p>
              <p className="card-text">
                <strong>Type:</strong> {movie.Type}
              </p>

              <button 
                onClick={() => handleDelete(movie.imdbID)}
                style={{ background: "red", color: "white", padding: "8px", border: "none" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
}