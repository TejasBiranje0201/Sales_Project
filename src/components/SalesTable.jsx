import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SalesTable() {
  const navigate=useNavigate()
  const [product, setProduct] = useState([])
  const [row, setRow] = useState([{quantity:1},{quantity:1},{quantity:1}])
  const [tprice,setTprice]=useState()
  const[gst, setGst]=useState()
  const[sub ,setSub]=useState()
  const [data ,setData]=useState({
    date:"",
    name:"",
    mob:"",
    totalprice:"",
    totalgst:"",
    subtotal:"",
    product:[...row]
   
  })

   

  function handleChange(e){
    setData({...data,[e.target.id]:e.target.value})
    // setData(...data.product,...row)
   
  }

  
  function getData() {
    axios.get("https://65eee023ead08fa78a4f2129.mockapi.io/products")
      .then((res) => {
        setProduct(res.data)
       
      })
  }

  function handleGet(id,index) {
          
    let dropdown;
     for(let i=0; i<product.length ;i++){
      if(product[i].id===id){
        dropdown=product[i];
       
      }
    }
    let copyoproduct = [...row] 

    copyoproduct[index].selecteproduct=dropdown
    setRow(copyoproduct)
    getTotal();
  }

  
  function addRow(e) {

    let copyrows =[...row]
    copyrows.push({quantity:1})
    setRow(copyrows)
   
  }

  function quantityChange(value,index){
    let copyquantity=[...row]
    copyquantity[index].quantity =value
    setRow(copyquantity)
    console.log(row);
    getTotal();  
    
  }
  function getTotal(){
    let total=0;
    let gst=0;
    for(let i=0;i<=row.length;i++){
      
      if (row[i]?.selecteproduct) {
        total += row[i].selecteproduct.price*row[i].quantity;
        gst += ((row[i].selecteproduct.price)*row[i].selecteproduct.gst/100)*row[i].quantity
      }
      console.log(total)
      setTprice(total)
      setGst(gst)
    }
    
   let sub= total+gst;
   console.log(sub);
   setSub(sub)
  }
 

  useEffect(() => {
    getData();
  }, [])

  
  function handleSubmit(e){
    e.preventDefault();

    const senddata = {
      date:data.date,
      name:data.name,
      mob:data.mob,
      total:tprice,
      gst:gst,
      sub:sub,
      products:[...row]
    }
   
    console.log(data);
    axios.post("https://65eee023ead08fa78a4f2129.mockapi.io/expence",senddata)
    .then((res)=>{
      console.log(res.data);
    })
    navigate("/admin/expencedata")
  }
 


  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
            </div>
            <div className="col-lg-10">
              <div style={{ marginTop: "58px" }}>
                <div className="container pt-4">
                  <div className="">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-4 mb-3">
                            <label htmlFor="date" className="form-label">Date:</label>
                            <input on onChange={(e)=>{handleChange(e)}} type="date" className="form-control" id="date" />
                          </div>
                          <div className="col-lg-4 mb-3">
                            <label htmlFor="customerName" className="form-label">Customer Name:</label>
                            <input onChange={(e)=>{handleChange(e)}} type="text" className="form-control" id="name" />
                          </div>
                          <div className="col-lg-4 mb-3">
                            <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                            <input onChange={(e)=>{handleChange(e)}} type="tel" className="form-control" id="mob" />
                          </div>
                        </div>
                        <button onClick={(e) => { addRow(e) }} className="btn btn-primary mb-3">Add Row</button>
                      </div>
                    </div>
                    <div className="card mt-1">
                      <div className="card-body">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Price</th>
                              <th>Quantity</th>
                              <th>GST</th>
                              <th>Subtotal</th>
                              <th>Action</th>
                            </tr></thead>
                          <tbody>
                            {    
                               
                                row.map((row, index)=>{
                                  return(
                                    <tr key={row.id}>
                                    <td>
                                      <select onChange={(e) => { handleGet(e.target.value,index) }} className="form-select">
                                        <option aria-disabled>Select a product</option>
                                        {
                                          product.map((eachProduct,i ) => {
                                            return (
                                              <option key={i} value={eachProduct.id}>{eachProduct.name} </option>
                                              
                                            )
                                          })
    
                                        }
                                      </select>
                                    </td>
                                    <td> ₹{row.selecteproduct ? row.selecteproduct.price: "0"}/-</td>
                                    <td>
                                      <input onChange={(e) => { quantityChange(e.target.value,index) }} type="number" min="1" className="form-control" value={row.quantity} />
                                    </td>
                                    <td>{row.selecteproduct ? row.selecteproduct.gst: "0"}%</td>
                                    <td>₹{row.selecteproduct ?  parseFloat((((parseInt(row.selecteproduct.price)+ ((parseInt(row.selecteproduct.price)*parseInt(row.selecteproduct.gst))/100))*parseInt(row.quantity)))): "0"}/-</td>
                                    <td>
                                      <button className="btn btn-danger">Remove</button>
                                    </td>
                                  </tr>
                                    
                                  )
                                })
                             
                            }
                          </tbody>
                        </table>
                        <hr />
                        <div className="mt-5">
                          <h4 id="totalprice"   onChange={(e)=>{handleChange(e)}} value={data.totalprice}>Total Price: ₹{tprice}/-</h4>
                          <h4 id="totalgst"  onChange={(e)=>{handleChange(e)}} value={data.totalgst}>Total GST: ₹{gst}/-</h4>
                          <h4 id="subtotal"  onChange={(e)=>{handleChange(e)}} value={data.subtotal}>Overall Subtotal:₹{sub}/-</h4>
                        </div>
                        <div className="col-lg-12 d-flex justify-content-end">
                          <button onClick={(e)=>{handleSubmit(e)}} className="btn btn-success">Submit Data</button>
                        </div>
                      </div>
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
