import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../redux/movieActions'

export default function Login() {
     const [logindata,setlogindata]=useState({
    email:"",password:""
  })
  const navigasion=useNavigate()
  const dispatch=useDispatch()
  const handleinput=((e)=>{
    const { name, value } = e.target;
    setlogindata((prev)=>({
        ...prev,[name]:value
    }))
  })
  const handlesubmit=((e)=>{
    e.preventDefault()
    dispatch(loginUser(logindata))
    navigasion("/")
  })
  return (
    <div>
         <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
         <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        
        <h3 className="text-center mb-4">Login</h3>
      <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
        <input type="email"  className="form-control" placeholder='email' name='email' value={logindata.email} onChange={handleinput} />
        </div>
         <div className="mb-3">
            <label className="form-label">Password</label>
        <input type="password"  className="form-control" placeholder='password' name='password' value={logindata.password} onChange={handleinput} />
        </div>
        <div className="d-grid">
        <button type='submit'  className="btn btn-primary" >Login</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}
