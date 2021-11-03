import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import { NavLink } from 'react-router-dom'

function ProblemComponent(props) {
    console.log(props.id);
    const url="/editor"+props.url+"/"+props.id;
    return (
        <>
            <div className="card border border-primary text-light" style={{"width": "38rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    Solve problem and make concept more Stronger.
                    <p className="text-end my-2">
                    <NavLink to={url} className="btn btn-outline-primary" style={{"fontSize":"17px"}} >Solve Problem</NavLink></p>
                </div>
            </div>
        </>
    )
}

export default ProblemComponent
