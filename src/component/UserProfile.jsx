import React, { useEffect } from 'react'
import Navbar from './Navbar';
import 'bootstrap/dist/css//bootstrap.min.css'
import { NavLink } from 'react-router-dom';


function UserProfile() {
  const user = localStorage.getItem("userName");
  console.log(user);
  console.log(localStorage);

  useEffect(() => {
    document.title = "Home || PrepAvenger";
  }, [])
  return (
    <>
      <Navbar />

      <div className="container text-light ">
        <div className="jumbotron">
          <h1 className="display-4">Hello,<strong className="text-primary text-capitalize"> {user}! </strong></h1>
          <p className="lead">What are you waiting for? To crack Coding Round Start practive with <strong className="text-primary">PrepAvenger</strong> and imporve your coding skills!</p>
          <hr className="my-4" />
          {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
          <p className="lead">
            <NavLink className="btn btn-outline-primary btn-lg" to="/problems" role="button">Let's Do it</NavLink>
          </p>
        </div>
      </div>
    </>
  )
}

export default UserProfile
