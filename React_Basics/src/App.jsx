import Card from "./components/Card"
import "./index.css"


const App = () => {

  return (
    <div className="app">
      <Card name="Rifat " age={25} />
      <Card name="John Doe" age={30} />
    </div>
  )
}

export default App
