import React, { useState } from 'react'

export default function Dashbord() {

    return (
        <div >
            <div className='row '>
                <div className='col-lg-2'></div>
                <div className='col-lg-10 ' style={{ marginTop: "68px" }}>
                    <div className='container '>
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card m-4" style={{ width: "18" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Products <span>| </span></h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h3 style={{ color: "blue" }}>6</h3>
                                                        <span className="text-success small pt-1 fw-bold">12%</span>
                                                        <span className="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card m-4" style={{ width: "-28rem;" }}>
                                            <div className="card-body">
                                                <h5 className="card-title">Sales <span>| Today</span></h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}></i>
                                                    </div>
                                                    <div className="ps-3">
                                                        <h3 style={{ color: "blue" }}>5</h3>
                                                        <span className="text-success small pt-1 fw-bold">12%</span>
                                                        <span className="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="card m-4" style={{ width: "18rem;" }}>
                                            <div className="card-body"><h5 className="card-title">Sales <span>| Today</span></h5>
                                                <div className="d-flex align-items-center">
                                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "blue" }}></i>
                                                    </div>
                                                    <div className="ps-3"><h3 style={{ color: "blue" }}>6</h3>
                                                        <span className="text-success small pt-1 fw-bold">12%</span>
                                                        <span className="text-muted small pt-2 ps-1">increase</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-1">


                            <div className="card-body">
                                <h1>Chart</h1>

                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
