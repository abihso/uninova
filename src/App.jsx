import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./modules/login";
import Register from "./modules/register";
import Dashbaoard from "./modules/student/dashbaoard";
const App = () => {
        
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashbaoard />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<div className="flex h-screen justify-center items-center" >404 PAGE NOT FOUND</div>} />
        </Routes>
      </Router>
    );

}

export default App