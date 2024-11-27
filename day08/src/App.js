//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul type="none">
            <li><Link to="/">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={ <Login/> }/>
          <Route path='/dashboard' element={ <Dashboard/> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
