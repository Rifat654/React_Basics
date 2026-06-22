import React, { useContext } from 'react'
import { GlobalContext } from '../../context/Context'

const Text = () => {

    const { theme } = useContext(GlobalContext);
    // console.log(getContextValue);

    return (
        <div style={{
            backgroundColor: theme === "light" ? "#fff" : "#14344e",
            color: theme === "light" ? "blue" : "yellow",
        }} className='w-1/2 h-50 flex items-center justify-center rounded-lg shadow-md shadow-violet-900' >
            <h1 >Hello, World!</h1>

        </div >
    )
}

export default Text
