import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/Context'
const Btn = () => {
    const { setTheme, theme } = useContext(GlobalContext)
    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    console.log(handleClick);

    return (
        <div>
            <button onClick={handleClick} className='shadow-emerald-50 shadow-md rounded-xl text-shadow-violet-100 bg-violet-900 p-3 font-semibold cursor-pointer'>
                Change Theme
            </button>
        </div>
    )
}

export default Btn
