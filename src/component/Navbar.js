import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './navbar.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className="container-fluid nav_bg ">
                <div className="row">
                    <div className="col-lg-10 mx-auto ">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-2">
                            <div className="container-fluid  col-lg-8">
                                <NavLink className="active" to="/">&lt; PrepAvenger /&gt;	</NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>

                            <div className="collapse navbar-collapse ulcontainer " id="navbarSupportedContent">
                                <ul className="navbar-nav mx-5 mb-2 mb-lg-0">

                                    {
                                    localStorage.getItem("userName") ?
                                    <>
                                    <li className="nav-item mx-3">
                                        <NavLink to="/home" style={{"textDecoration":"none"}}>
                                        <h3  className="text-capitalize text-success">
                                            {localStorage.getItem("userName")}
                                        </h3>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                                <NavLink to="/logout">
                                                    <button type="button" className="btn btn-outline-primary">Logout</button>
                                                </NavLink>
                                            </li>

                                    </>:
                                        <>
                                        <li className="nav-item mx-2 ">
                                            <NavLink to="/login">
                                                <button type="button" className="btn btn-outline-primary">Login</button>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item mx-2">
                                                <NavLink to="/signup">
                                                    <button type="button" className="btn btn-outline-primary">Sign Up</button>
                                                </NavLink>
                                            </li>
                                            </>

                                        
                                    }
                                

                                    <li className="nav-item mx-2">
                                        <NavLink to="/openplayground" target="_blank" className="playground">
                                            PlayGround
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar