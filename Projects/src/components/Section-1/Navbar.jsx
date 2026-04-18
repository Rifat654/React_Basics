
const Navbar = () => {
    return (
        <div className='flex items-center justify-between px-5'>
            <h1 className='H'>NAVBAR</h1>
            <div>
                <ul className='flex gap-5'>

                    <li className='text-blue-500 font-bold'>Home</li>
                    <li className='text-blue-500 font-bold'>About</li>
                    <li className='text-blue-500 font-bold'>Contact</li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar
