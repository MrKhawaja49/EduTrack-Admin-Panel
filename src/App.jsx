import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Profile from "./Pages/Profile/Profile";
import Navbar from "./Pages/NavBar/NavBar";
import { Header } from "antd/es/layout/layout";
import Subjects from "./Pages/Subjects/Subjects";
import Teachers from "./Pages/Teachers/Teachers";
import Lectures from "./Pages/Lectures/Lectures";
import Exams from "./Pages/Exams/Exams";
import Students from "./Pages/Students/Students";


function App() {
  const token = localStorage.getItem("user-token")  
  return (
   token
   ?
   <>
   <Header/>
    <Routes>
      <Route path="/" element={<Subjects />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/students" element={<Students />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/lectures" element={<Lectures />} />
      <Route path="/exams" element={<Exams />} />
    </Routes>
    </>
   :
   <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
   </Routes>

  );
}

export default App;
