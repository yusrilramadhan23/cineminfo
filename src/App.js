import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterPage from './Pages/Register/RegisterPage';
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
function App() {
  return (
    <>      
      <ToastContainer
        position = "top-center"
        autoClose= {2000}
        closeOnClick
        pauseOnHover
        
      />
      <Router>
        <Routes>
          <Route path="/" exact element = {<RegisterPage />} />
          <Route path="/login" exact element = {<LoginPage />} />
          <Route path="/register" exact element = {<RegisterPage />} />
          <Route path="/dashboard" exact element = {<Dashboard />} />
        </Routes>    
      </Router>
    </>
  );
}

export default App;
