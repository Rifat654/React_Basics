import { useState } from 'react'

const UseState = () => {

    const [num, setNum] = useState(0);

    return (
        <div className='flex w-full h-screen justify-center items-center flex-col gap-5 '>
            <h1>Value is {num}</h1>
            <button onClick={() => setNum(num + 1)}>Increase</button>
        </div>
    )
}

export default UseState
