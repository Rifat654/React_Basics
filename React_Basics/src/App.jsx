import { Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {


  return (
    <div className="   w-full h-screen bg-blue-950 text-white" >

      {/* <nav className="w-full h-16 bg-slate-800 text-white items-center justify-between px-4" >
        <h1>Logo</h1>
        <ul className=" hidden lg:flex space-x-4 items-center" >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


      </Routes> */}

      {/* Context API  */}



    </div>
  )
}

export default App
