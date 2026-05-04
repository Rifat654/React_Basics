import { useState } from 'react'

const UseState = () => {


    const [count, setCount] = useState(0);

    function Increase() {
        setCount(count + 1);
    }

    function Decrease() {
        setCount(count - 1)
    }

    function Reset() {
        setCount()
    }

    return (
        <div className='flex w-full h-screen justify-center items-center flex-col gap-5 '>
            <h1>Value of {count}</h1>

            <button onClick={Increase} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Click me
            </button>
            <button onClick={Decrease} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Click me
            </button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default UseState
