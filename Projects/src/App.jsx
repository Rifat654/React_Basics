import React, { useState, } from 'react'

import axios from 'axios';

const App = () => {

  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    const res = await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes");
    console.log(res.data);
    setQuote(res.data[0]);
  }



  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-100 h-80 bg-gray-700 text-slate-100 rounded-md p-4 flex flex-col items-center gap-4">
        <h1 className="text-center text-2xl">Random quote generator </h1>
        <button

          onClick={fetchQuote}
          className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          children="Click"
        />
        <p className="text-center italic">{quote}</p>
      </div>
    </div>
  )
}

export default App
