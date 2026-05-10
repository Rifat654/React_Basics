import Card from "./components/Card"
import State from "./components/State"
import "./index.css"
// import { list } from "./data.js"
import PopUp from "./components/Pop_Up/PopUp.jsx"
import PopupText from "./components/Pop_Up/PopupText.jsx"
import Img_Slider from "./components/Img_Slider.jsx"
import Form from "./components/Form.jsx"


const App = () => {


  return (
    <div className="   w-full h-screen" >
      <h1 className="text-center">Basic React.js Concepts</h1>
      {/* <div className="main">
        {
          list.map((item) => (
            <Card key={item.id} name={item.name} age={item.age} />

          ))
        };

      </div> */}
      {/* Custom Model Component */}
      {/* <PopupText /> */}
      {/* <State /> */}
      <Form />

    </div>
  )
}

export default App
