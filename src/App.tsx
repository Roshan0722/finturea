import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Contact from "./screens/Contact";
import Footer from "./components/Footer";
import Applynow from "./screens/Applynow";
import ServiceDetail from "./components/Servicedetail";
 

function App() {

  const location = useLocation();

  // pages where navbar should be hidden
  const hideNavbar =
  location.pathname === "/signup" || location.pathname === "/apply";
  

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Applynow/>} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/service-detail" element={<ServiceDetail/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;