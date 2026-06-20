import { createContext } from 'react'
import { UserContext } from '../../context/Context'

const Text = () => {

    const getContext = createContext(UserContext);
    console.log(getContext)

    return (
        <div>
            <h1>This is a simple text component.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem nesciunt excepturi nemo, ratione, debitis quod ipsum sapiente voluptates dicta officia assumenda natus fuga quas omnis! Voluptate dicta sapiente placeat?</p>

        </div>
    )
}

export default Text
