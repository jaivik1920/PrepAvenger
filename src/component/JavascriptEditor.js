import React, { useEffect, useState } from 'react'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { useHistory } from 'react-router-dom';

function JavascriptEditor(props) {
    const [code, setCode] = useState("");
    const id=props.match.params.id;
    const problemtype=props.match.params.problem;

    // const [problem, setproblem] = useState("");
    const history=useHistory();

    var prevtheme = "ace-monokai";

    const [inputdata, setinputdata] = useState("");
    const [title, settitle] = useState("");
    const [probdesc, setprobdesc] = useState("");
    const [example, setexample] = useState("");
    const [inputnote, setinputnote] = useState("");

    const [loading, setloading] = useState(true);
    const [output, setoutput] = useState("");
    const [backendoutput, setbackendoutput] = useState({
        "outputString": "",
        "actualoutputString": ""
    })

    useEffect(() => {
        document.title = "Editor || PrepAvenger"
        getProblemsById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    const getProblemsById=()=>{
        console.log(problemtype+"/"+id)
        axios.get(`/${problemtype}/${id}`).then(
            (success) => {
                console.log(success.data);
                // document.getElementById("problemtitle").innerHTML=success.data.title;
                // document.getElementById("problemdesc").innerHTML=success.data.problemDescription;
                // document.getElementById("problemexample").innerHTML=success.data.example;
                settitle(success.data.title);
                setprobdesc(success.data.problemDescription);
                setexample(success.data.example);
                setinputnote(success.data.inputnote);
                setbackendoutput({
                    ...backendoutput,
                    "actualoutputString":success.data.output
                })
            }, (error) => {
                console.log(error);
            }
        );
    } 

    const onChange = (newValue) => {
        setCode(newValue)
    }

    const setTheme = () => {
        console.log("cleid");
        document.getElementById("editor").classList.remove(prevtheme);
        if (document.getElementById("theme").value === "ace-github") {
            prevtheme = "ace-github";
            document.getElementById("editor").classList.remove("ace-dark");
            document.getElementById("editor").classList.add("ace-github", "ace-dark");
        }
        else if (document.getElementById("theme").value === "ace-solarized-dark") {
            prevtheme = "ace-solarized-dark";
            document.getElementById("editor").classList.add("ace-solarized-dark", "ace-dark");
        }
        else if (document.getElementById("theme").value === "ace-twilight") {
            prevtheme = "ace-twilight";
            document.getElementById("editor").classList.add("ace-twilight", "ace-dark");

        }
        else {
            prevtheme="ace-monokai";
            document.getElementById("editor").classList.add("ace-monokai", "ace-dark");
        }
    }

    const setLanguage = () => {
        const ans = window.confirm("Are you Sure? If you change language your code will erased");
        if (ans === true) {
           
            if (document.getElementById("language").value === "python") {
                // window.location = `/pythoneditor/${problemtype}/${id}`;
                history.push(`/pythoneditor/${problemtype}/${id}`);

            }
            else if (document.getElementById("language").value === "cpp") {
                // window.location = `/cppeditor/${problemtype}/${id}`;
                history.push(`/cppeditor/${problemtype}/${id}`);
            }
            else if (document.getElementById("language").value === "c") {
                // window.location = `/ceditor/${problemtype}/${id}`;
                history.push(`/ceditor/${problemtype}/${id}`);
            }
            else if (document.getElementById("language").value === "java") {
                // window.location = `/editor/${problemtype}/${id}`;
                history.push(`/editor/${problemtype}/${id}`);
            }
        }
    }
    const executeCode = () => {
        document.getElementById("testcaseright").style.display="none";
        document.getElementById("testcasewrong").style.display="none";
        setloading(false);
        const codedata = JSON.stringify({
            "code": code,
            "language": "js",
            "input": inputdata
        })
        console.log(codedata);
        axios.post("/enforceCode", codedata).then(
            (success) => {
                console.log(success.data.output);
                // document.getElementById("output").innerHTML = success.data.output;
                setloading(true);
                setoutput(success.data.output);
                setbackendoutput({
                    ...backendoutput,
                    "outputString":success.data.output
                });
            },
            (error) => {
                console.log(error);
                setloading(true);
            }
        );
    }
    const submitCode=()=>{
        setloading(false);
        document.getElementById("testcaseright").style.display="none";
        document.getElementById("testcasewrong").style.display="none";
        axios.post("/testcasecheck",backendoutput).then(
            (success)=>{
                if(success.data==0){
                document.getElementById("testcaseright").style.display="block";
                }
                else{
                    document.getElementById("testcasewrong").style.display="block";
                }
                setloading(true);
            },
            (error)=>{
                console.log(error);
                setloading(true);
            }
        );
    }

    const activeInput=()=>{
        console.log("clicked");
        document.getElementById("toggleright").style.display="block";
        document.getElementById("toggleleft").style.display="none";
        document.getElementById("input").style.display="block";
        console.log(document.getElementById("input"));

    }
    const disableInput=()=>{
        document.getElementById("toggleright").style.display="none";
        document.getElementById("toggleleft").style.display="block";
        document.getElementById("input").style.display="none";
    }
   
    return (
        <>

        <h1 className="text-center text-primary my-4">
        Problem Title 
        </h1>

         <div className="container-fluid d-flex flex-row justify-content-center">
            <div className="container text-light ">
                    <h1  id="problemtitle">{title}</h1>
                    <h4 id="problemdesc">{probdesc}</h4>
                    <p style={{"fontSize":"20px"}} id="problemexample">{example}</p>
                    <h4>Please take care of below things:</h4>
                    <p style={{"fontSize":"20px"}} id="inputnote">{inputnote}</p>
                </div>

            <div className="container">
            
            <div className="text-light">
                        <div className="d-inline-block mx-4">
                            <button type="button" className="btn btn-outline-primary mx-2 my-3" onClick={setTheme}>Themes</button>
                            <select name="theme" id="theme" style={{ "height": "35px" }}>
                                <option value="ace-monokai" >monokai</option>
                                <option value="ace-github">github</option>
                                <option value="ace-solarized-dark">solarized dark</option>
                                <option value="ace-twilight">twilight</option>
                            </select>
                        </div>
                        <div className="d-inline-block mx-4">
                            <button type="button" className="btn btn-outline-primary mx-2 my-3"onClick={setLanguage} >Select Language</button>
                            <select name="language" id="language" style={{ "height": "35px" }}>
                                <option value="java" >Java</option>
                                <option value="python">Python</option>
                                <option value="javascript" selected>Javascript</option>
                                <option value="c" >C</option>
                                <option value="cpp" >C++</option>
                            </select>
                        </div>
                    </div>
                    <AceEditor
                        mode="javascript"
                        name="editor"
                        id="editor"
                        theme="monokai"
                        // defaultValue={text}
                        fontSize="18px"
                        height="500px"
                        width="900px"
                        editorProps={{ $blockScrolling: true }}
                        setOptions={{
                            enableBasicAutocompletion: true,
                            enableLiveAutocompletion: true,
                            enableSnippets: true
                        }}
                        onChange={onChange}
                    />
                   <div className="w-100 d-flex justify-content-center">
                        <button type="button" className="btn btn-outline-success mt-4 w-25 mx-2" onClick={executeCode}>Run</button>
                        <button type="button" className="btn btn-outline-primary mt-4 w-25 mx-2 " onClick={submitCode}>Submit</button>
                    </div>
                    <h3 className="my-2 text-light">Input</h3>
                    <ToggleOffOutlinedIcon  sx={{ fontSize: 70 }} id="toggleleft" onClick={activeInput}/>
                    <ToggleOnOutlinedIcon color="primary" sx={{ fontSize: 70 }}  id="toggleright" style={{"display":"none"}} 
                    onClick={disableInput}/>
                    <div className="w-75 my-3" style={{"display":"none"}} id="input">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type input here" onChange={(e)=>{
                            setinputdata(e.target.value);
                        }}></textarea>
                        </div>
                    <div className="text-light my-4">
                        <h1>Output:-</h1>
                        {
                            loading ?
                                <div id="output">
                                    {output}
                                </div>
                                :
                                <div class="spinner-grow text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                        }
                                            </div>

                         <div className="alert alert-success w-100" id="testcaseright" style={{ "display": "none" }}>
                            Test Case 1
                            <DoneOutlineOutlinedIcon style={{ "display": "float", "float": "right" }} />
                        </div>
                        <div className="alert alert-danger w-100" id="testcasewrong" style={{ "display": "none" }}>
                            Test Case 1
                            <CloseTwoToneIcon style={{ "color": "red", "display": "float", "float": "right" }} />
                        </div>
            </div>
             </div>
        </>
    )
}

export default JavascriptEditor
