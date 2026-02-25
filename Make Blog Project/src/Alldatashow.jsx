import React, { useEffect, useState } from 'react'
import API from './Service/API'
import { useNavigate } from 'react-router-dom'

export default function Alldatashow() {
  const [disdata, setdisdata] = useState([])
  const [search, setsearch] = useState("")
  const navigation = useNavigate()
 const [sortOrder, setSortOrder] = useState("")
  useEffect(() => {
    displydata()
  }, [])

  const displydata = async () => {
    const res = await API.get("/Blog")
    setdisdata(res.data)
  }
  
  const filteredData = disdata.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
    if (sortOrder === "asc") {
    filteredData.sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  } else if (sortOrder === "desc") {
    filteredData.sort((a, b) =>
      b.title.localeCompare(a.title)
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">All Blogs</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <div className="col-md-6 mt-4">
          <select
            className="form-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="asc">Title A-Z</option>
            <option value="desc">Title Z-A</option>
          </select>
        </div>
      </div>
      {filteredData.length === 0 && (
        <div className="alert alert-info text-center">
          No blog found
        </div>
      )}

      <div className="row">
        {filteredData.map((data) => (
          <div className="col-md-4 mb-4" key={data.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                
                <h5 className="card-title">{data.title}</h5>

                <div className="mt-auto">
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => navigation(`/viewdata/${data.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}