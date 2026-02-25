import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from './Service/API'


export default function Updatedata() {

    const {id}=useParams()
    const[form,setform]=useState({
      title:"",date:"",decription:""
    })
    useEffect(()=>{
             const fetchData = async () => {
            try {
                const res = await API.get(`/Blog/${id}`)
                setform(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])
    const handleinput=((e)=>{
        const {name,value}=e.target
        setform((prev)=>({
            ...prev,[name]:value
        }))
    })
   
    const Navigate=useNavigate()
  const handlesubmit= async(e)=>{
        e.preventDefault();
             await API.put(`/Blog/${id}`, form)
        Navigate(`/viewdata/${id}`)
  }
    return (
   <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Update Form</h3>
          
          <form onSubmit={handlesubmit}>
            
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                name="title"
                value={form.title}
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
                value={form.date}
                onChange={handleinput}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                name="decription"
                value={form.decription}
                onChange={handleinput}
                className="form-control"
                rows="3"
                placeholder="Enter description"
              ></textarea>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
