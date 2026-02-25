import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import API from './Service/API'

export default function ViewData() {
  const { id } = useParams()
  const [data, setData] = useState(null)
    const navigasion=useNavigate()
  useEffect(() => {
    displayData()
  }, [id])

  const displayData = async () => {

      const res = await API.get("/Blog")
     const filter = res.data.find((r) => r.id === id)

      setData(filter)
  }
  const Delete=(async(id)=>{
        await API.delete(`/Blog/${id}`)
        navigasion("/Alldatashow")
    })
    const Update=((id)=>{
        navigasion(`/Updatedata/${id}`)
    })
    if (!data) {
  return <div>Loading...</div>
}
  return (
   <div className="container mt-4">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card shadow-sm">
        <div className="card-body">
          
          <h5 className="card-title mb-3">{data.title}</h5>
          
          <p className="card-text">
            <strong>Date:</strong> {data.date}
          </p>
          
          <p className="card-text">
            <strong>Description:</strong> {data.decription}
          </p>

          <div className="d-flex justify-content-between mt-3">
            <button 
              className="btn btn-danger"
              onClick={() => Delete(data.id)}
            >
              Delete
            </button>

            <button 
              className="btn btn-warning"
              onClick={() => Update(data.id)}
            >
              Update
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
  )
}