import React, { useState } from 'react'
import './lLogout.css'
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
    let nevigate = useNavigate();
    const [user, setUser] = useState({
        uname: "admin",
        pass: "admin"
    });

    function handleChange(e) {
        setUser({ ...user, [e.target.id]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        
        if(user.uname=="admin"&&user.pass=="admin"){
          nevigate("/admin/dashboard")
          setUser({
            uname: "",
            pass: ""
        })
        }
    }

    return (
        <div>
            <div className="">
                <section className="background-radial-gradient overflow-hidden" >
                    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
                        <div className="row gx-lg-5 align-items-center mb-5">
                            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: "10;" }}>
                                <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "white" }}>The best offer <br />
                                    <span style={{ color: "blue" }}>for your business</span>
                                </h1>
                                <p className="mb-4 opacity-70" style={{ color: "Black" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus, expedita iusto veniam atque, magni tempora mollitia dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab ipsum nisi dolorem modi. Quos?</p>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
                                <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong">
                                </div>
                                <div id="radius-shape-2" className="position-absolute shadow-5-strong">
                                </div>
                                <div className="card bg-glass"><div className="card-body px-4 py-5 px-md-5">
                                    <form>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3">User name</label>
                                            <input value={user.uname} onChange={(e) => { handleChange(e) }} id="uname" type="text" className="form-control" />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4">Password</label>
                                            <input value={user.pass} onChange={(e) => { handleChange(e) }} id="pass" type="password" className="form-control" />
                                        </div>
                                        <button onClick={(e)=>handleSubmit(e)} type="submit" className="btn btn-primary btn-block mb-4">Sign In</button>
                                        <div className="text-center"><p>or sign up with:</p><button type="button" className="btn btn-link btn-floating mx-1">
                                            <i className="fab fa-facebook-f"></i>
                                        </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1">
                                                <i className="fab fa-google"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-twitter"></i>
                                            </button>
                                            <button type="button" className="btn btn-link btn-floating mx-1"><i className="fab fa-github"></i></button>
                                        </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
