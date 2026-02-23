import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
    const {imdbID}=useParams()
    
    const movies = useSelector(state =>state.movies.find(m => m.imdbID === imdbID))
  return (
    <div>
     <div className="container mt-4">
  <div className="row">
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img 
          src={movies.Poster} 
          className="card-img-top" 
          alt={movies.Title} 
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{movies.Title}</h5>
          <p className="card-text">
            <strong>Year:</strong> {movies.Year}
          </p>
          <p className="card-text">
            <strong>Type:</strong> {movies.Type}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
