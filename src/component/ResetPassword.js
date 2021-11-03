import React,{useEffect, useState} from 'react'
import CodeIcon from '@mui/icons-material/Code';
import {NavLink,useHistory} from 'react-router-dom'
import axios from 'axios';

function ResetPassword() {

    useEffect(() => { 
        document.title="Reset Password || PrepAvenger"
        setdata({...data,userEmail:localStorage.getItem("email")});
        localStorage.removeItem("email");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [data, setdata] = useState({
        userEmail:"",
        userPassword:""
    })

    const history=useHistory();

    const [loading, setloading] = useState(true);


    const resetpassword=(e)=>{
        console.log(data);
        if(document.getElementById("cpassword").value==data.userPassword){
           
            setloading(false);
        axios.post(`/resetpass`,data).then(
            (success)=>{            
                console.log(success);
                history.push("/login");
                setloading(true);
            },
            (error)=>{  
                
                document.getElementById("signupalert").style.display = "block"; 
                document.getElementById("signupalert").classList.add("alert-danger"); 
                document.getElementById("errsuc").innerHTML="Error!!!";
                document.getElementById("desc").innerHTML="Oops something went wrong! Please try after sometime!";
                console.log(error);
                setloading(true);
            }
        );
            // setloading(true);

            console.log("hi");
        }
        else{
            document.getElementById("signupalert").style.display = "block"; 
            document.getElementById("signupalert").classList.add("alert-danger"); 
            document.getElementById("errsuc").innerHTML="Error!!!";
            document.getElementById("desc").innerHTML="Oops something went wrong! Password doesn't match!";
        }

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
                {
                    loading ?
                        <p style={{ "display": "none" }}></p>
                        :
                        <p className="text-center my-4" id="spinner">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </p>
                }
             <div className="formcontainer d-flex justify-content-center align-items-center h-100">
                    <div className="mt-5">
                    <form>
                        <h1 className="text-light text-center mb-4" >Reset Password</h1>
                        <div className="mb-3">
                            <input type="password" className="form-control bg-dark" aria-describedby="emailHelp" placeholder="Password" id="password"
                            onChange={(e)=>{
                                setdata({...data,userPassword:e.target.value});
                            }}
                                />
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control bg-dark" aria-describedby="emailHelp" placeholder="Confirm Password" id="cpassword" 
                            />
                        </div>
                        <p className="text-center">
                            <button type="submit" className="btn btn-outline-primary text-center my-4 w-100" id="verifyotp" onClick={resetpassword}>Reset Password</button>
                        </p>
                    </form>
                    </div>
                    </div>
                    </div>

        </>
    )
}

export default ResetPassword
