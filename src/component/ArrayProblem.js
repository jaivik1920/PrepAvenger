import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './arrayproblem.css'
import axios from 'axios';
import Navbar from './Navbar'
import ProblemComponent from './ProblemComponent'
import { useHistory } from 'react-router-dom';


function ArrayProblem() {
    const [obj, setobj] = useState([])
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false);
    useEffect(() => {
        document.title = "Arrays || PrepAvenger"
        getArrayProblems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const history = useHistory();

    const getArrayProblems = () => {
        if (localStorage.getItem("userName")) {
            axios.get(`https://prepavenger-backend.herokuapp.com/getarrayproblems`).then(
                (success) => {
                    setobj(success.data);
                    setloading(true);
                }, (error) => {

                    console.log(error);
                    seterror("Oops Something went wrong!!! Sorry we regret about it. Please try after sometimes!");
                    setloading(true);
                }
            );
        }
        else {
            history.push("/login");
        }
    }

    return (
        <>
            <Navbar />
            <div className="problemcontainer text-light my-5">
                <h1>The PrepAvenger's Array Problems</h1>

                {loading ?
                    
                        obj.map((value) => {
                            return (
                                <ProblemComponent
                                    key={value.id}
                                    id={value.id}
                                    title={value.title}
                                    url="/getarrayproblems"
                                />);
                        })
                    :
                    <div class="spinner-grow text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <h2 className="text-danger my-4"> {error} </h2>
            </div>
        </>
    )
}

export default ArrayProblem
