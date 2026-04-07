import { useState } from "react"
import PopUp from "./PopUp";
import "./Pop.css"

const PopupText = () => {

    const [show, setShow] = useState(false);

    const PopupToggle = () => {
        setShow(!show);
    }
    return (
        <div>
            <h1 className="h1">Hello, I'm a PopUp!</h1>
            <button className="btn" onClick={PopupToggle}>Open PopUp</button>
            {
                show && <PopUp />
            }
        </div>
    )
}

export default PopupText
