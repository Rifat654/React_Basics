import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen '>

            <h1 className='text-3xl font-bold mb-6'>
                React Form
            </h1>

            <form className='w-full max-w-sm h-100 bg-white shadow-xl rounded-2xl  flex flex-col justify-center items-center'>

                <div className='flex flex-col items-center justify-center gap-5  w-full h-full rounded-xl'>

                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className='w-[70%] border py-8'
                    />

                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className='w-[70%] border border-gray-300 rounded-lg p-12 outline-none focus:ring-2 focus:ring-blue-500'
                    />

                    <input
                        type="submit"
                        value="Submit"
                        className='w-[40%] bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg cursor-pointer transition-all duration-300'
                    />

                </div>
            </form>

        </div>
    )
}

export default Form