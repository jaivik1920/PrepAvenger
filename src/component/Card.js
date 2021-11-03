import React from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import './card.css'
import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
                <div className={props.class} style={{ 'width': '25rem', 'height': '12rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to={props.url} className={props.bclass}>Solve Challenges</NavLink>
                    </div>
                </div>
        </>
    )
}
export default Card
    