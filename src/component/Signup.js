import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './loginsignup.css'
import axios from 'axios';
import CodeIcon from '@mui/icons-material/Code';
import { NavLink } from 'react-router-dom'
function Signup() {
    // var otp="";
    useEffect(() => {
        document.title = "Sign Up || PrepAvenger";
    }, [])

    const [userdata, setuserdata] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    })
    const [fieldotp, setotp] = useState("");
    const [backendotp, setbackendotp] = useState("");
    const SubmitEvent = (e) => {
        console.log(userdata);
        axios.post(`https://prepavenger-backend.herokuapp.com/verifyuser`, userdata).then(
            (success) => {
                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-success"); 
                document.getElementById("errsuc").innerHTML="Success!!!";
                document.getElementById("desc").innerHTML="Otp send successfully to your email id!";
                console.log(success.data);
                setbackendotp(success.data);
                console.log(success);
                document.getElementById("otpfield").style.display="block";
        document.getElementById("submit").style.display="none";
        document.getElementById("otpsubmit").style.display="block";
            }, (error) => {
                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-danger"); 
                document.getElementById("errsuc").innerHTML="Error!!!";
                document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                console.log(error);
                
            }
        );
        
        e.preventDefault();
    }

    const otpSubmitEvent=(e)=>{
        console.log(backendotp);
        console.log(fieldotp);
        if(backendotp==fieldotp){
            console.log("ok");
        axios.post(`https://prepavenger-backend.herokuapp.com/adduser`, userdata).then(
            (success) => {
                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-success"); 
                document.getElementById("errsuc").innerHTML="Success!!!";
                document.getElementById("desc").innerHTML="Thank you for registering!!!";
                console.log(success);
            }, (error) => {
                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-danger"); 
                document.getElementById("errsuc").innerHTML="Error!!!";
                document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                console.log(error);
                
            }
            );
        }
        else{
            console.log("not ok");
            document.getElementById("signupalert").style.display = "block"; 
            document.getElementById("signupalert").classList.add("alert-danger"); 
            document.getElementById("errsuc").innerHTML="Error!!!";
            document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
        }
        setuserdata({
            userName: "",
            userEmail: "",
            userPassword: "",
        });
        setotp("");
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
                <NavLink to="/" style={{ 'textDecoration': 'none' }}>
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
                        <NavLink style={{ 'width': '100vw', 'textDecoration': 'none' }} to="/signup">
                            <h1 className=" text-light w-100 text-center mb-4 h-100">Sign Up</h1>
                        </NavLink>
                        <NavLink to="/login" style={{ 'width': '100vw', 'textDecoration': 'none' }}>
                            <h1 className="  text-light w-100 text-center mb-4 h-100 bg-dark">Login </h1>
                        </NavLink>
                    </div>
                    <div className="mt-5">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control bg-dark" placeholder="User name" onChange={(e) => {
                                    setuserdata({ ...userdata, userName: e.target.value })
                                }}
                                    value={userdata.userName} />

                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control bg-dark" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"
                                    onChange={(e) => {
                                        setuserdata({ ...userdata, userEmail: e.target.value })
                                    }}
                                    value={userdata.userEmail} />
                                <div id="emailHelp" className="form-text text-light my-2">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control bg-dark" id="exampleInputPassword1" placeholder="Password" onChange={(e) => {
                                    setuserdata({ ...userdata, userPassword: e.target.value })
                                }}
                                    value={userdata.userPassword} />
                            </div>
                            <div className="mb-3" id="otpfield">
                                <input type="text" className="form-control bg-dark" id="exampleInputPassword1" placeholder="Otp"
                                onChange={(e) => {
                                    setotp(e.target.value)
                                }}
                                value={fieldotp}
                                />
                            </div>

                            <p className="text-center">
                                <button type="submit" className="btn btn-outline-primary text-center my-4 w-100" id="submit" onClick={SubmitEvent}>Create Account</button>
                            </p>
                            <p className="text-center">
                                <button type="submit" className="btn btn-outline-primary text-center my-4 w-100" id="otpsubmit" onClick={otpSubmitEvent}>Create Account</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
