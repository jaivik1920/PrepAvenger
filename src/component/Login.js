import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import './loginsignup.css'
import CodeIcon from '@mui/icons-material/Code';
import {NavLink,useHistory} from 'react-router-dom'
import axios from 'axios';
function Login() {

    const history = useHistory();

    const [userdata, setuserdata] = useState({
        userEmail:"",
        userPassword:""
    })
    useEffect(() => {
        document.title = "Login || PrepAvenger";
    }, []);

    const submitEvent=(e)=>{
        console.log(userdata);
        if(userdata.userEmail==="admin@gmail.com" && userdata.userPassword==="admin"){
            localStorage.setItem("userName","Admin");
            history.push("/admin");
        }
        else{
        axios.post(`https://prepavenger-backend.herokuapp.com/loginuser`,userdata).then(
            (success)=>{
                localStorage.setItem("userName",success.data.userName);
                console.log(success.data);
                history.push("/home");
            },
            (error)=>{  

                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-danger"); 
                document.getElementById("errsuc").innerHTML="Error!!!";
                document.getElementById("desc").innerHTML="Oops something went wrong! Please enter your correct password!";
            }
        );
        }   
        setuserdata({
            userEmail:"",
            userPassword:""
        })
        e.preventDefault();

    }
    return (
        <>
            <div className="container">
                <NavLink to="/" style={{'textDecoration':'none'}}>
                <h1 className="text-primary text-bold text-center mb-4"> &lt; PrepAvenger /&gt; </h1>
                </NavLink>
                <h2 className="text-primary text-center">For Coders</h2>

                <p className="text-light text-center"> <CodeIcon />Practice coding, prepare for interviews, and get hired!!!</p>
                <div className="alert alert-dismissible fade show w-40" id="signupalert" role="alert">
                    <strong id="errsuc"></strong> <span id="desc">  </span>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                <div className="formcontainer">
                    <div className="d-flex justify-content-around w-100 ">
                        <NavLink style={{'width':'100vw' ,'textDecoration':'none'}} to="/signup">
                        <h1 className=" text-light w-100 text-center mb-4 h-100 bg-dark">Sign Up</h1>
                        </NavLink>
                        <NavLink to="/login" style={{'width':'100vw','textDecoration':'none'}}>
                        <h1 className=" text-light w-100 text-center mb-4 h-100 ">Login </h1> 
                        </NavLink>
                    </div>
                    <div className="mt-5">
                    <form onSubmit={submitEvent}>
                        <div className="mb-3">
                            <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"
                            onChange={(e) => {
                                setuserdata({ ...userdata, userEmail: e.target.value })
                            }}
                                value={userdata.userEmail}
                                />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control bg-dark" id="exampleInputPassword1" placeholder="Password"
                            onChange={(e) => {
                                setuserdata({ ...userdata, userPassword: e.target.value })
                            }}
                                value={userdata.userPassword}
                            />
                        </div>
                        <NavLink to="/forgotpassowrd" className="forgotpassword">
                            <p>Forgot your Password?</p>
                        </NavLink>
                        <p className="text-center">
                            <button type="submit" className="btn btn-outline-primary text-center my-4 w-100">Login</button>
                        </p>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
