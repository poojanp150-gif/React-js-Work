"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useRef, useState, useEffect } from 'react'

export default function Input() {

    const [data, setdata] = useState({
        Name: "",
        password: "",
        email: "", Phone: '', gender: '', city: '', agree: false
    })
const [currentPage, setCurrentPage] = useState(1);
const usersPerPage = 5;

    const [editindex, seteditindex] = useState(null)
    const [prduct, setprduct] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("user")) || [];
        setprduct(storedData);
    }, []);
    const [allProduct, setAllProduct] = useState([]);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("user")) || [];
        setprduct(storedData);
        setAllProduct(storedData);
    }, []);

    const [search, setSearch] = useState("")
    const handleinput = (e) => {
        const { name, value } = e.target
        setdata(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlesubmit = (e) => {
        e.preventDefault()
        if (!data.Name || !data.email || !data.password || !data.Phone) {
            alert("All fields are required");
            return;
        }
        if (!data.gender) {
            alert("Select Gender");
            return;
        }
        if (!data.agree) {
            alert("Accept Terms");
            return;
        }

        let updatedList

        if (editindex === null) {
            updatedList = [...prduct, data]
        } else {
            updatedList = [...prduct]
            updatedList[editindex] = { ...data }
            seteditindex(null)
        }
        localStorage.setItem("user", JSON.stringify(updatedList))
        setprduct(updatedList)
          setCurrentPage(1);
        setdata({ Name: "", password: "", email: "", Phone: '', gender: "", city: '', agree: false })
    }

    const Delete = (index) => {
        const updated = prduct.filter((_, i) => i !== index);
        setprduct(updated);
        localStorage.setItem("user", JSON.stringify(updated));
         setCurrentPage(1);
    };


    const Edit = (pro, index) => {
        setdata(pro)
        seteditindex(index)
    }

    const inputRef = useRef()
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            const value = inputRef.current.value.trim().toLowerCase();


            const storedData = JSON.parse(localStorage.getItem("user")) || [];

            if (value === "") {
                setprduct(storedData);
                setCurrentPage(1);
                return;
            }

            const filterData = storedData.filter((f) =>
                f.Name.toLowerCase().includes(value)
            );

            setprduct(filterData);
            setCurrentPage(1);
        }
    }
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = prduct.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(prduct.length / usersPerPage);

    return (
        <div className="container mt-4">

            <h3 className="mb-3 text-center">Product Form</h3>

            <form onSubmit={handlesubmit} className="card p-3 mb-4 shadow-sm">
                <div className="row g-3">
                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            name="Name"
                            placeholder="Product Name"
                            value={data.Name}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="col-12">
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            placeholder="email"
                            value={data.email}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="col-12">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            value={data.password}
                            onChange={handleinput}
                        />
                    </div>
                    <div className="col-12">
                        <input
                            type="number"
                            className="form-control"
                            name="Phone"
                            placeholder="Phone"
                            value={data.Phone}
                            onChange={handleinput}
                        />
                    </div>
                    <div className="col-12">
                        <label className="me-3">
                            <input type="radio" name='gender' value="male" onChange={handleinput} checked={data.gender === "male"} /> Male
                        </label>
                        <input type="radio" name='gender' value="female" onChange={handleinput} checked={data.gender === "female"} /> <label htmlFor="male">Female</label>
                    </div>

                    <div className="col-12">
                        <select name="city" value={data.city} className="form-control mb-2" onChange={handleinput} >
                            <option value="">Select City</option>
                            <option value="Ahmedabad">Ahmedabad</option>
                            <option value="Surat">Surat</option>
                            <option value="Palanpur">Palanpur</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <input type="checkbox" name="agree" checked={data.agree} onChange={handleinput} /> Accept Terms
                    </div>
                </div>

                <div className="mt-3 ">
                    <button className="btn btn-primary">
                        {editindex === null ? "Submit" : "Update"}
                    </button>
                </div>
            </form>

            {/* <input
        className="form-control mb-3"
        placeholder="Search by name"
        onChange={(e) => setSearch(e.target.value)}/> */}
            <input
                className="form-control mb-3"
                placeholder="Search by name" ref={inputRef}
                onKeyDown={handleKeyPress} />
            <table className="table table-bordered table-striped table-hover text-center">
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Phone</th>
                        <th>Gender</th>
                        <th>city</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                    {currentUsers.length === 0 ? (
                        <tr>
                            <td colSpan="7">No Data Found</td>
                        </tr>
                    ) : (
                         currentUsers.map((pro, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{pro.Name}</td>
                                <td>{pro.email}</td>
                                <td>{pro.Phone}</td>
                                <td>{pro.gender}</td>
                                <td>{pro.city}</td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-sm me-2"
                                        onClick={() => Edit(pro, index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => Delete(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

              {prduct.length > 5 && (
        <nav>
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 && "disabled"}`}>
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </button>
            </li>

            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            <li
              className={`page-item ${
                currentPage === totalPages && "disabled"
              }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
        </div>
    )
}

