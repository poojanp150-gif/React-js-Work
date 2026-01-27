import React, { useState, useEffect } from 'react'

export default function TodoList() {
    const [data, setdata] = useState({
        pname: "", category: "", price: ""
    })
    const [editindex, seteditindex] = useState(null)

    const [savedUser, setSavedUser] = useState([])
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("product")) || [];
        setSavedUser(storedData);
    }, []);
    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(savedUser));
    }, [savedUser]);
    
    const handleinput = ((e) => {
        const { name, value } = e.target

        setdata((prev) => ({
            ...prev, [name]: value
        }))
    })

    const handlesubmmit = ((e) => {
        e.preventDefault()
        let updatedList;
        if (editindex === null) {
            updatedList = [...savedUser, data];

        } else {
            updatedList = [...savedUser]
            updatedList[editindex] = { ...data };
            seteditindex(null)

        }

        setSavedUser(updatedList)

        setdata({
            pname: "",
            category: "",
            price: ""
        })
    })


    const Delete = ((index) => {
        const updatedList = [...savedUser]
        updatedList.splice(index, 1)

        setSavedUser(updatedList)
    })

    const Update = ((index) => {

        let prducts = savedUser[index]
        setdata({
            pname: prducts.pname,
            category: prducts.category,
            price: prducts.price
        })

        seteditindex(index)
    })
    return (
        <div className="container mt-4">
            <div className="card shadow p-4 mb-4">
                <h3 className="text-center mb-3">
                    {editindex === null ? "Add Product" : "Update Product"}
                </h3>

                <form onSubmit={handlesubmmit}>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="pname"
                            value={data.pname}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            className="form-control"
                            name="category"
                            value={data.category}
                            onChange={handleinput}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            name="price"
                            value={data.price}
                            onChange={handleinput}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        {editindex === null ? "Add Data" : "Update Data"}
                    </button>
                </form>
            </div>

            <div className="row">
                {savedUser.map((pro, index) => (
                    <div className="col-md-4 mb-3" key={index}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{pro.pname}</h5>
                                <p className="card-text">
                                    <strong>Category:</strong> {pro.category}
                                </p>
                                <p className="card-text">
                                    <strong>Price:</strong> ₹{pro.price}
                                </p>

                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => Delete(index)}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-warning btn-sm"
                                        onClick={() => Update(index)}
                                    >
                                        Edit
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
