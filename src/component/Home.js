import React, {useEffect} from 'react'
import Navbar from './Navbar'
import 'bootstrap/dist/css//bootstrap.min.css'
import './home.css'
import {Link} from 'react-router-dom'
import Footer from './Footer'
function Home() {
    useEffect(() => {
       document.title="Home || PrepAvenger";
    }, []);
return (
<>
    <Navbar />
    <div className="homecontainer">
        <div className="jumbotron">
            <h1 className="display-4 text-light text-center mb-4">while <span className="text-primary">(</span>!
            <span className="text-warning">(</span>succeed=try <span className="text-success">()</span><span className="text-warning">)</span><span className="text-primary">)</span></h1>
            <p className="lead text-center text-light">PrepAvenger is your Friend to crack the Placement Coding Round.
            So what are you waiting for? Start Hardworking for Your better Future
            </p>
            <p className="lead text-center">
                <Link className="btn btn-outline-primary btn-lg w-50 my-4" to="/problems" role="button">Get Started</Link>
            </p>
        </div>
    </div>
    <Footer/>
</>
)
}

export default Home