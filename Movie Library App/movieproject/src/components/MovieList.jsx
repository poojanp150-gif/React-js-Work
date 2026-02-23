import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Showmovies } from '../redux/movieActions'
import { useNavigate } from 'react-router-dom';

export default function MovieList() {
    const movies=useSelector((state)=>state.movies)
    const dispatch=useDispatch()
    const navigasion=useNavigate()
    useEffect(() => {
        dispatch(Showmovies())
    }, [dispatch])
    console.log(movies)
    const showdetails=((imdbID)=>{
        navigasion(`/Moviesdetails/${imdbID}`)
    })
   const whishlist = (id) => {
  // Current wishlist get karo
  const existing = JSON.parse(localStorage.getItem("whis")) || [];

  // Check karo ke movie already add che ke nahi
  if (!existing.includes(id)) {
    const updated = [...existing, id];
    localStorage.setItem("whis", JSON.stringify(updated));
    alert("Movie added to favorites ");
  } else {
    alert("Movie already in favorites");
  }
};

  return (
    <div className="container mt-4">
  <div className="row">
    {movies && movies.map((movie) => (
      <div className="col-md-4 mb-4" key={movie.imdbID}>
        <div className="card h-100 shadow-sm">
          <div className="card-body d-flex flex-column ">
            <h5 className="card-title mb-3">Title:{movie.Title}</h5>
            <button 
              className="btn btn-primary mt-auto"
              onClick={() => showdetails(movie.imdbID)}
            >
              View Details
            </button>
            <button className='btn btn-danger mt-3' onClick={()=>whishlist(movie.imdbID)} >Favorites</button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
