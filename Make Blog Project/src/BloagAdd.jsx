import React, { useEffect, useState } from 'react'
import API from './Service/API'
import { useNavigate } from 'react-router-dom'
export default function BloagAdd() {
  const [data,setdata]=useState({
    title:"",date:"",decription:""
  })
  const navigasion=useNavigate()
 
  const handleinput=((e)=>{
        const {name,value}=e.target
        setdata((prev)=>({
            ...prev,[name]:value
        }))
  })
    const handlesubmit=(async(e)=>{
        e.preventDefault()
        await API.post("/Blog",data)
        setdata({
              title:"",date:"",decription:""
        })
        navigasion("/Alldatashow")
    })
    
    return (
    <div>
        <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow">
        <div className="card-body">
          
          <h3 className="text-center mb-4">Add Blog</h3>

          <form onSubmit={handlesubmit}>
            
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={data.title}
                onChange={handleinput}
                className="form-control"
                placeholder="Enter title"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Date</label>
              <input
                type="date"
                name="date"
                value={data.date}
                onChange={handleinput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="decription"
                value={data.decription}
                onChange={handleinput}
                className="form-control"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-success">
                Add Data
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  </div>
</div> 
    </div>
  )
}
