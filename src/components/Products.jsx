import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Products() {
    const [data, setData] = useState({
        name: "",
        price: "",
        gst: ""
    })
    const [newData, setNewDAta] = useState([]);
    const [id ,setId]=useState(undefined)
    function handleChange(e) {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(id===undefined){
        if(!data.name||!data.price||!data.gst){
            alert("Please fill the Fields")
        }
        else{
        console.log(data);

        axios.post("https://65eee023ead08fa78a4f2129.mockapi.io/products", data)
            .then((res) => {
                console.log(res.data);
                loadData();
            })
            setData({
                name: "",
                price: "",
                gst: ""
            })
        }
    }
    else{
        axios.put("https://65eee023ead08fa78a4f2129.mockapi.io/products/"+id,data)
        .then ((res)=>{
            console.log(res.data);
            loadData();
        })
        setData({
            name: "",
            price: "",
            gst: ""
        })

    }

    }
    function handleDelete(e , id){
        e.preventDefault();
        axios.delete("https://65eee023ead08fa78a4f2129.mockapi.io/products/"+id)
        .then((res)=>{
            console.log(res.data);
            loadData();
        })

    }
    function handleUpdate(e, id){
        e.preventDefault();
        setId(id)
        axios.get("https://65eee023ead08fa78a4f2129.mockapi.io/products/"+id)
        .then((res)=>{
            console.log(res.data);
            setData({
                name:res.data.name,
                price:res.data.price,
                gst:res.data.gst
            })
        })

    }
    function loadData() {
        axios.get("https://65eee023ead08fa78a4f2129.mockapi.io/products")
            .then((res) => {
                setNewDAta(res.data)
                console.log(newData.length);
            })

    }
    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-10" style={{ marginTop: "68px" }}>
                        <div>
                            <div className="container">
                                <div className="row">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <a className="breadcrumb-item" href="/admin/dashboard"><a>Home</a></a>
                                            <a className="breadcrumb-item active" aria-current="page">Products</a>
                                            <div className="mb-3 col-lg-12 d-flex justify-content-end">
                                                <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Add</button>
                                            </div>
                                        </ol>
                                    </nav>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" style={{ display: "none;" }} aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                    </button>
                                                </div>
                                                <div className="modal-body"><div className="row">
                                                    <div className="row">
                                                        <div className="col-lg-1">
                                                        </div>
                                                        <div className="mb-3 col-lg-10">
                                                            <label className="form-label">Product</label>
                                                            <input onChange={(e) => handleChange(e)} id="name" value={data.name} type="text" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-1">
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-1">
                                                        </div>
                                                        <div className="mb-3 col-lg-10">
                                                            <label className="form-label">Price</label>
                                                            <input onChange={(e) => handleChange(e)} id="price" value={data.price} type="number" className="form-control" />
                                                        </div>
                                                        <div className="col-lg-1">
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-1">
                                                        </div>
                                                        <div className="mb-3 col-lg-10">
                                                            <label htmlFor="disabledSelect" className="form-label">GST %
                                                            </label>
                                                            <select value={data.gst} onChange={(e) => handleChange(e)} id="gst" className="form-select">
                                                                <option>Choose option</option>
                                                                <option value="18">18%</option>
                                                                <option value="12">12%</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-lg-1">
                                                        </div>
                                                    </div>
                                                </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                                        <button onClick={(e) => handleSubmit(e)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card mt-2">
                                        <div className="card-body">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Sr.</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">GST %</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>{
                                                    newData.map(( eachData , i)=>{
                                                        return(
                                                            <tr>

                                                            <td>{i+1}</td>
                                                            <td>{eachData.name}</td>
                                                            <td>₹{eachData.price}/-</td>
                                                            <td>{eachData.gst}%</td>
                                                            <td>
                                                                <button onClick={(e)=>handleUpdate(e,eachData.id)} className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pen-to-square"></i></button>
                                                                <button onClick={(e)=>handleDelete(e,eachData.id)} className="btn btn-danger ml-2"><i className="fa-solid fa-trash-can"></i></button>
                                                            </td>
                                                        </tr>


                                                        )
                                                    })
                                                   
                                                }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

