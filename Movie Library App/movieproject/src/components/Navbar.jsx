import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
   const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="container mt-4">
  <div className="d-flex gap-3 align-items-center mb-3">

    <Link to={'/MovieList'} className="btn btn-primary">
      MovieList
    </Link>

    <Link to={'/MovieSearch'} className="btn btn-secondary">
      MovieSearch
    </Link> 
    <Link to={'/whis'} className="btn btn-secondary">
      Whislist
    </Link>

    {user ? (
      <button
        className="btn btn-danger ms-auto"
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        Logout
      </button>
    ) : (
      <Link to="/login" className="btn btn-success ms-auto">
        Login
      </Link>
    )}

  </div>

  <div className="card p-3 shadow-sm">
    <Outlet />
  </div>
</div>
  )
}
