import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Showmovies } from '../redux/movieActions'

export default function MovieSearch() {
    const [search, setSearch] = useState("")
    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Showmovies())
    }, [])
    const filtered = movies.filter(m => m.Title.toLowerCase().includes(search.toLowerCase()))
    console.log(movies)

    return (
      <div className="container py-4">
    <h2 className="text-center mb-4">🎬 Movie Search</h2>
           <div className="row justify-content-center mb-4">
        <div className="col-md-6">
            <input
                type="text"
                className="form-control form-control-lg shadow-sm"
                placeholder="Search movies..."
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
            <div className="row">
        {filtered.length > 0 ? (
            filtered.map((movie, index) => (
                <div className="col-md-4 col-lg-3 mb-4" key={index}>
                    <div className="card h-100 shadow-sm border-0">
                        <img
                            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"}
                            className="card-img-top"
                            alt={movie.Title}
                            style={{ height: "400px", objectFit: "cover" }}
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title">{movie.Title}</h5>
                            <p className="card-text text-muted mb-1">{movie.Year}</p>
                            <span className="badge bg-primary">{movie.Type}</span>
                        </div>
                    </div>
                </div>
            ))
        ) :  (
            <div className="text-center">
                <p className="text-danger fs-5">No movies found</p>
            </div>
        )}
        </div>
        </div>
    )
}
