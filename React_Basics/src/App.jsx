import React from 'react'
import Use_Reduce from './components/UseReducer/Use_Reduce'
import Navbar from './components/Navbar'
import Form from './components/Form'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className=" bg-blue-900 text-white w-full h-screen ">
      <Navbar />
      <Routes>

        <Route path="/" element={<Use_Reduce />} />
        <Route path="/use-context" element={<Form />} />
      </Routes>

      <h1 className="text-2xl font-bold text-blue-400">Welcome to the React Basics App</h1>

      {/* <Use_Reduce /> */}
    </div>
  )
}

export default App
