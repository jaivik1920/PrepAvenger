import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

function AdminHome() {
    return (
        <>
            <Navbar />
            <div className="container text-light">
            <div className="jumbotron">
                <h1 className="display-4">Hello, Admin!</h1>
                <p className="lead">Welcome, we hope you are doing well.We glad to see you again!</p>
                <hr className="my-4"/>
                    <p>To add problems please click below button. Thank you!</p>
                <p class ="lead">
                <NavLink class ="btn btn-outline-primary btn-lg" to="/addproblems" role="button">Add Problem</NavLink>
                </p>
            </div>
            </div>
        </>
    )
}

export default AdminHome
