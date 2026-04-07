import Card from "./components/Card"
import State from "./components/State"
import "./index.css"
import { list } from "./data.js"
import PopUp from "./components/Pop_Up/PopUp.jsx"
import PopupText from "./components/Pop_Up/PopupText.jsx"


const App = () => {
  console.log(list);

  return (
    <div  >
      {/* <div className="main">
        {
          list.map((item) => (
            <Card key={item.id} name={item.name} age={item.age} />

          ))
        };

      </div> */}
      {/* Custom Model Component */}
      <PopupText />
    </div>
  )
}

export default App
