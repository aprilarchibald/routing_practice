import './App.css';
import {Link, Routes, Route} from "react-router-dom"
import Home from './components/home';
import Result from './components/Result';



function App() {

 
  return (
    <div className="App">
        <Link to={"/home"}>Home</Link>

        <Routes>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/:input" element = {<Result/>}/>
          <Route path = "/:input/:text" element = {<Result/>}/>
          <Route path = "/:input/:text/:background" element = {<Result/>}/>
        </Routes>
    </div>
  );
}

export default App;
