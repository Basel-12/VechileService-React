import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Signup from "./pages/auth/Signup"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Service"
import BookService from "./pages/BookService"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<BookService />} />
        </Routes>
      </Router>
    </>
      
  )
}

export default App
