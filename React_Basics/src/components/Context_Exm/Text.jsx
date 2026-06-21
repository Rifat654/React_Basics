import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Context'

const Text = () => {

    const { theme } = useContext(GlobalContext);
    // console.log(getContextValue);

    return (
        <div >
            <h1 style={{
                backgroundColor: theme === "light" ? "#orange" : "#000",
                color: theme === "light" ? "blue" : "yellow",
            }} >Hello, World!</h1>

        </div >
    )
}

export default Text
