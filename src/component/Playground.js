import React, { useEffect, useState } from 'react'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './playground.css'
import Navbar from './Navbar';
import axios from 'axios';
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';

function Playground() {
    const text = "public class Main{\n \tpublic static void main(String args[]){\n \t\tSystem.out.println(\"Hello World\");\n\t}\n}";

    const [code, setCode] = useState("");
    var prevtheme = "ace-monokai";
    const [inputdata, setinputdata] = useState("");
    const [loading, setloading] = useState(true);

    useEffect(() => {
        document.title = "Playground || PrepAvenger";
    }, []);

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
            prevtheme = "ace-monokai";
            document.getElementById("editor").classList.add("ace-monokai", "ace-dark");
        }
    }

    const setLanguage = () => {
        const ans = window.confirm("Are you Sure? If you change language your code will erased");
        if (ans === true) {
            if (document.getElementById("language").value === "java") {
                window.location = "/javacompiler";
            }
            else if (document.getElementById("language").value === "python") {
                window.location = "/pythoncompiler";

            }
            else if (document.getElementById("language").value === "javascript") {
                window.location = "/javascriptcompiler";
            }
            else if (document.getElementById("language").value === "cpp") {
                window.location = "/cppcompiler";
            }
            else {
                window.location = "/ccompiler";
            }
        }
    }
    const executeCode = () => {
        setloading(false);
        const codedata = JSON.stringify({
            "code": code,
            "language": "java", 
            "input": inputdata
        })
        axios.post("https://solutioncorsanywhere.herokuapp.com/https://codexweb.netlify.app/.netlify/functions/enforceCode", codedata).then(
            (success) => {
                console.log(success.data.output);
                document.getElementById("output").innerHTML = success.data.output;
                setloading(true);
            },
            (error) => {
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
            <Navbar />
            <div className="container-fluid d-flex flex-row">
                <div className="container " id="code">

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
                            <button type="button" className="btn btn-outline-primary mx-2 my-3" onClick={setLanguage}>Select Language</button>
                            <select name="language" id="language" style={{ "height": "35px" }}>
                                <option value="java" selected>Java</option>
                                <option value="python">Python</option>
                                <option value="javascript" >Javascript</option>
                                <option value="c">C</option>
                                <option value="cpp">C++</option>
                            </select>
                        </div>
                    </div>

                    <AceEditor
                        mode="java"
                        name="editor"
                        id="editor"
                        theme="monokai"
                        defaultValue={text}
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
                    <button type="button" className="btn btn-outline-success mt-4 w-100" onClick={executeCode}>Run</button>
                </div>
                <div className="container text-light">
                    <h1>Output</h1>
                    <div className="outputcontainer border" id="output" style={{ "height": "500px", "width": "700px" }}>
                    { loading?
                                <p style={{"display":"none"}}></p>
                           
                            :
                            <p className="text-center my-4" id="spinner">
                            <div class="spinner-grow text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                            </p>
                            }    
                    </div>
                    <h3 className="my-2">Input</h3>
                    <ToggleOffOutlinedIcon  sx={{ fontSize: 70 }} id="toggleleft" onClick={activeInput}/>
                    <ToggleOnOutlinedIcon color="primary" sx={{ fontSize: 70 }}  id="toggleright" style={{"display":"none"}} 
                    onClick={disableInput}/>
                    <div className="w-75 my-3" style={{"display":"none"}} id="input">
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Type input here" onChange={(e)=>{
                            setinputdata(e.target.value);
                        }}></textarea>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Playground
