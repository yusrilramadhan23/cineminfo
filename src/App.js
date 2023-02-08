import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import RegisterPage from './Pages/Register/RegisterPage';
function App() {
  return (
    <>
      <ToastContainer
        position = "top-center"
        autoClose= {2000}
        closeOnClick
        pauseOnHover
        
      />

      <RegisterPage />
    </>
  );
}

export default App;
