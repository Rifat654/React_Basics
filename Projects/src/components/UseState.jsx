import { useState } from 'react'

const UseState = () => {

    const [num, setNum] = useState(0);

    const obj = {
        name: "Rifat Rahman",
        age: 23,
        profession: "Web Developer"
    }

    localStorage.setItem("user", JSON.stringify(obj));
    const data = JSON.parse(localStorage.getItem("user"));


    console.log(data.profession);
    console.log(data.age);



    return (
        <div className='flex w-full h-screen justify-center items-center flex-col gap-5 '>
            <h1>Value is {num}</h1>
            <button onClick={() => setNum(num + 1)}>Increase</button>
            <h1 className=''>Hello world</h1>
        </div>
    )
}

export default UseState;
