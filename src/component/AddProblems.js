import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css//bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './addproblems.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

function AddProblems() {

    useEffect(() => {
       document.title="Add-Problem || PrepAvenger";
    }, [])

    const [probdata, setprobdata] = useState({
        title:"",
        problemDescription:"",
        example:"",
        difficulty:"",
        input:"",
        output:"",
        inputnote:""
    })

    const [loading, setloading] = useState(true);
    const submitEvent=(e)=>{
        
        const probtype=document.getElementById("probtype").value;
        // console.log(probdata);
        setloading(false);
        if(probtype==="array"){ 
            
            axios.post(`/addarrayproblems`, probdata).then(
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);
                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);

                }
                );

        }
        else if(probtype==="string"){
            setloading(false);

            axios.post(`/addstringproblems`, probdata).then(
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);

                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);

                }
                );

        }
        else if(probtype==="stackq"){
            setloading(false);

            axios.post(`/addstackqueueproblems`, probdata).then(
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);

                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);

                }
                );
            
        }
        else if(probtype==="greedy"){
            setloading(false);

            axios.post(`/addgreedyproblems`, probdata).then(
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);

                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);

                    
                }
                );

        }
        else if(probtype==="graph"){
            setloading(false);


            axios.post(`/addgraphproblems`, probdata).then(
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);

                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);

                }
                );
        }
        else{
            setloading(false);

            axios.post(`/adddpproblems`, probdata).then(
                
                (success) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-success"); 
                    document.getElementById("errsuc").innerHTML="Success!!!";
                    document.getElementById("desc").innerHTML="Problem Added Successfully!!!";
                    console.log(success);
                    setloading(true);

                }, (error) => {
                    document.getElementById("signupalert").style.display = "block"; 
                    document.getElementById("signupalert").classList.add("alert-danger"); 
                    document.getElementById("errsuc").innerHTML="Error!!!";
                    document.getElementById("desc").innerHTML="Oops something went wrong! Please try with different username!";
                    console.log(error);
                    setloading(true);
                    
                }
                );
        }

        setprobdata({
            title:"",
            problemDescription:"",
            example:"",
            difficulty:"",
            input:"",
            output:"",
            inputnote:""
        })
        e.preventDefault();
    }
    return (
        <>

            <NavLink to="/">
            <h1 className="text-primary text-center my-4">&lt;PrepAvenger&gt;</h1>
            </NavLink>
            <div className="probcontainer">
                <div className="container cont">
                <div className="alert alert-dismissible fade show w-40" id="signupalert" role="alert">
                    <strong id="errsuc"></strong> <span id="desc">  </span>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
                {
                        loading?
                        <div style={{"display":"none"}}></div>
                        :
                        <div class="spinner-grow text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                }
                    <form className="form" onSubmit={submitEvent}>
                        <h1 className="text-center text-light my-3">Add Problem</h1>
                        <select className="form-select bg-dark text-light mb-3" aria-label="Default select example" id="probtype">
                            <option >Select Problem Type</option>
                            <option value="array">Array</option>
                            <option value="string">String</option>
                            <option value="stackq">Stack and Queue</option>
                            <option value="greedy">Greedy Algorithm</option>
                            <option value="graph">Graph</option>
                            <option value="dp">Dp</option>
                        </select>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-dark w-100" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Problem Title"
                            onChange={(e) => {
                                setprobdata({ ...probdata, title: e.target.value })
                            }}
                                value={probdata.title}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea1" placeholder="Problem Description" rows="3"
                            onChange={(e)=>{
                                setprobdata({...probdata,problemDescription:e.target.value})
                            }}
                            value={probdata.problemDescription}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control bg-dark text-light"  placeholder="Example" rows="3"
                            onChange={(e)=>{
                                setprobdata({...probdata,example:e.target.value})
                            }}
                            value={probdata.example}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea2" placeholder="Input" rows="2"
                            onChange={(e)=>{
                                setprobdata({...probdata,input:e.target.value})
                            }}
                            value={probdata.input}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea3" placeholder="Output" rows="2"
                            onChange={(e)=>{
                                setprobdata({...probdata,output:e.target.value})
                            }}
                            value={probdata.output}
                            ></textarea>
                        </div>
                        <div className="form-group mb-3">
                            <textarea className="form-control bg-dark text-light" id="exampleFormControlTextarea4" placeholder="Input Note" rows="2"
                            onChange={(e)=>{
                                setprobdata({...probdata,inputnote:e.target.value})
                            }}
                            value={probdata.inputnote}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control bg-dark w-100" id="exampleInputEmail1" placeholder="Difficulty"
                            onChange={(e)=>{
                                setprobdata({...probdata,difficulty:e.target.value})
                            }}
                            value={probdata.difficulty}
                            />
                        </div>
                        <p className="text-center">
                            <button type="submit" className="btn btn-outline-primary text-center my-4 w-100">Add Problem</button>
                        </p>
                    </form>
                </div>
            </div>

        </>
    )
}   

export default AddProblems
