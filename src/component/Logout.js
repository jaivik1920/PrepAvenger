import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom';


function Logout() {

    localStorage.clear();

    return (
        <>

        <div className="container">

            <div className="jumbotron text-light">
                <h1 className="display-4">Logout Successfully!!</h1>
                <p className="lead"></p>
                <hr className="my-4"/>
                <p>Click below button to login again. Thank you!!!</p>
                <p class ="lead">
                <NavLink class ="btn btn-outline-primary btn-lg" to="/login" role="button">Login</NavLink>
                </p>
            </div>
            </div>
        </>
    )
}

export default Logout
