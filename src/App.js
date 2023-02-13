import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RegisterPage from './Pages/Register/RegisterPage';
import LoginPage from "./Pages/Login/LoginPage";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Profile from "./Pages/Profile/Profile";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";

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
          <Route path="/movie/:movieId" exact element = {<DetailPage />} />
          <Route path="/login" exact element = {<LoginPage />} />
          <Route path="/register" exact element = {<RegisterPage />} />
          <Route path="/dashboard" exact element = {<Dashboard />} />
          <Route path="/profile" exact element = {<Profile />} />
          <Route path="*" exact element = {<NotFoundPage />} />
        </Routes>    
      </Router>
    </>
  );
}

export default App;
