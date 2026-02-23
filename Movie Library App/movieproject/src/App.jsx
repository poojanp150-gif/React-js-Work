import React from 'react'
import MovieList from './components/MovieList'
import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import MovieDetails from './components/MovieDetails'
import MovieSearch from './components/MovieSearch'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Whislist from './components/Whislist'
export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/MovieList' element={
            <PrivateRoute>
              <MovieList />
            </PrivateRoute>
          } />
          <Route path='/Moviesdetails/:imdbID' element={<MovieDetails />} />
          <Route path='/MovieSearch' element={  <PrivateRoute>  <MovieSearch />  </PrivateRoute> } />
          <Route path='/whis' element={  <PrivateRoute>  <Whislist/>  </PrivateRoute> } />
          
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>

    </div>
  )
}
