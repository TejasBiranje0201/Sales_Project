import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './print.css'

export default function ExpenceData() {
    const [sales, SetSales] = useState([])
    const [info, setInfo] = useState({})
    function loaddata() {
        axios.get("https://65eee023ead08fa78a4f2129.mockapi.io/expence")
            .then((res) => {
                SetSales(res.data)
                console.log(sales);
            })

    }


    function handlePrint(e, id) {
        e.preventDefault();
       

        const selectedID = sales.find((sale) => {
            return (
                sale.id === id

            )

        })
        setInfo(selectedID)

        console.log(selectedID);


        console.log(info);
    };
    function handless(e){
        e.preventDefault();
       
    }



    useEffect(() => {
        loaddata();
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-lg-10">
                    <div >
                        <div className="container" style={{ marginTop: "58px" }}>
                            <div className="container pt-4">
                                <div className="container mt-2">
                                    <h2>Sale Expense Table</h2>
                                    <div className="card">
                                        <div className="card-body">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>Customer Name</th>
                                                        <th>Mobile No</th>
                                                        <th>Total Price</th>
                                                        <th>Total GST</th>
                                                        <th>Overall Subtotal</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        sales.map((eachsales, i) => {
                                                            return (
                                                                <tr>
                                                                    <td>{eachsales.date}</td>
                                                                    <td>{eachsales.name}</td>
                                                                    <td>{eachsales.mob}</td>
                                                                    <td>{eachsales.total}</td>
                                                                    <td>{eachsales.gst}</td>
                                                                    <td>{eachsales.sub}</td>
                                                                    <td>
                                                                        <button className="btn btn-primary me-2" ><i className="fa-solid fa-pen-to-square"></i></button>
                                                                        <button className="btn btn-danger me-2"><i className="fa-solid fa-trash-can"></i></button>
                                                                        <button onClick={(e) => { handlePrint(e, eachsales.id) }} className="btn btn-success ml-2" data-bs-toggle="modal" data-bs-target="#expenceModal"><i class="fa-solid fa-print"></i></button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="mt-3">
                                                <strong><h5>Total Overall Subtotal:-</h5></strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="expenceModal" tabindex="-1" aria-labelledby="exampleModalLabel" style={{ display: "none;" }} aria-hidden="true">
                            <div className="modal-dialog modal-dialog modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div>
                                            <div >

                                                <div class="receipt-main col-lg-12 col-sm-10 col-md-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-3">
                                                    <div class="row">
                                                        <div class="receipt-header">
                                                            <div class="col-lg-6 col-sm-6 col-md-6">
                                                                <div class="receipt-left">
                                                                    <img class="img-responsive" alt="iamgurdeeposahan" src="https://bootdey.com/img/Content/avatar/avatar6.png" style={{ width: "71px", borderRadius: "43px" }} />
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-10 col-sm-6 col-md-6 text-right">
                                                                <div class="receipt-right">
                                                                    <h5>Company Name.</h5>
                                                                    <p>+1 3649-6589 <i class="fa fa-phone"></i></p>
                                                                    <p>company@gmail.com <i class="fa fa-envelope-o"></i></p>
                                                                    <p>USA <i class="fa fa-location-arrow"></i></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="receipt-header receipt-header-mid">
                                                            <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                                                                <div class="receipt-right">
                                                                    <h5> {info.name} </h5>
                                                                    <p><b>Mobile :</b>{info.mob}</p>

                                                                </div>
                                                            </div>
                                                            <div class="col-xs-1 col-sm-2 col-md-2">
                                                                <div class="receipt-left">
                                                                    <h3></h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <table class="table table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Description</th>
                                                                    <th>Quantity</th>
                                                                    <th>Gst</th>
                                                                    <th>Amount</th>
                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {
                                                                    info.products?.map((info)=>{
                                                                        return(
                                                                            <tr>
                                                                                <td>{info.selecteproduct.name}</td>
                                                                                <td>{info.quantity}×</td>
                                                                                <td>{info.selecteproduct.gst}%</td>
                                                                                <td>{info.selecteproduct.price}/-</td>
                                                                            </tr>
                                                                        )
                                                                    })

                                                                }

                                                                <tr>
                                                                    <td class="text-right"><h2><strong>Total: </strong></h2></td><th></th><th></th>
                                                                    <td class="text-left text-danger"><h2><strong><i class="fa fa-inr"></i> {info.sub}/-</strong></h2></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div class="row">
                                                        <div class="receipt-header receipt-header-mid receipt-footer">
                                                            <div class="col-xs-8 col-sm-8 col-md-8 text-left">
                                                                <div class="receipt-right">
                                                                    <p>Date :<b>{info.date} </b></p>
                                                                    <h5 style={{ color: "rgb(140, 140, 140)" }}>Thanks for shopping.!</h5>
                                                                </div>
                                                            </div>
                                                            <div class="col-xs-4 col-sm-4 col-md-4">
                                                                <div class="receipt-left">
                                                                    <h1>Stamp</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={(e)=>handless(e)}>Print</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
