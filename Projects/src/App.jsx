import React from 'react'


const App = () => {

  let BTN = () => {
    alert("Button Clicked")
  }
  return (
    <div>
      <h1>Hello, React!</h1>
      <button onClick={BTN}>Click me </button>
    </div>
  )
}

export default App
