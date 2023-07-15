import {Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import PricingPage from "./Pages/PricingPage";
import NavBar from './components/Navbar/index.tsx';
import Footer from "./components/Footer/index.tsx";

function App() {
  
  return (
    <BrowserRouter>
    
      <NavBar/>
    
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/pricing" element={<PricingPage/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
     
     
     
  )
}

export default App
