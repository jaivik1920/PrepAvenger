import './App.css';
import {
  Switch,Route,Redirect} from "react-router-dom"
import Home from './component/Home'
import Problems from './component/Problems';
import Signup from './component/Signup';
import Login from './component/Login';
import Playground from './component/Playground';
import ArrayProblem from './component/ArrayProblem';
import StringProblem from './component/StringProblem';
import GraphProblem from './component/GraphProblem';
import DpProblem from './component/DpProblem';
import StackQProblem from './component/StackQProblem';
import GreedyProblem from './component/GreedyProblem';
import JavascriptCompiler from './component/JavascriptCompiler';
import CCompiler from './component/CCompiler';
import PythonCompiler from './component/PythonCompiler';
import JavaCompiler from './component/JavaCompiler';
import CppCompiler from './component/CppCompiler';
import Editor from './component/Editor';
import PythonEditor from './component/PythonEditor';
import CEditor from './component/CEditor';
import JavascriptEditor from './component/JavascriptEditor';
import CppEditor from './component/CppEditor';
import AdminHome from './component/AdminHome';
import AddProblems from './component/AddProblems';
import UserProfile from './component/UserProfile';
import Logout from './component/Logout';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';

function App() {
  return (
   <>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/problems" exact component={Problems}></Route>
      <Route path="/signup" exact component={Signup}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/openplayground" exact component={Playground}></Route>
      <Route path="/arrayproblems" exact component={ArrayProblem}></Route>
      <Route path="/stringproblems" exact component={StringProblem}></Route>
      <Route path="/graphproblems" exact component={GraphProblem}></Route>
      <Route path="/dpproblems" exact component={DpProblem}></Route>
      <Route path="/stackqueproblems" exact component={StackQProblem}></Route>
      <Route path="/greedyproblems" exact component={GreedyProblem}></Route>
      <Route path="/javacompiler" exact component={JavaCompiler}></Route>
      <Route path="/pythoncompiler" exact component={PythonCompiler}></Route>
      <Route path="/ccompiler" exact component={CCompiler}></Route>
      <Route path="/javascriptcompiler" exact component={JavascriptCompiler}></Route>
      <Route path="/cppcompiler" exact component={CppCompiler}></Route>
      <Route path="/editor/:problem/:id" exact component={Editor}></Route>
      <Route path="/pythoneditor/:problem/:id" exact component={PythonEditor}></Route>
      <Route path="/ceditor/:problem/:id" exact component={CEditor}></Route>
      <Route path="/javascripteditor/:problem/:id" exact component={JavascriptEditor}></Route>
      <Route path="/cppeditor/:problem/:id" exact component={CppEditor}></Route>
      <Route path="/home" exact component={UserProfile}></Route>
      <Route path="/admin" exact component={AdminHome}></Route>
      <Route path="/addproblems" exact component={AddProblems}></Route>
      <Route path="/logout" exact component={Logout}></Route>
      <Route path="/forgotpassowrd" exact component={ForgotPassword}></Route>
      <Route path="/passwordreset" exact component={ResetPassword}></Route>
      <Redirect to="/" ></Redirect>
    </Switch>
    {/* <Footer/> */}
   </> 
  );
}

export default App;
