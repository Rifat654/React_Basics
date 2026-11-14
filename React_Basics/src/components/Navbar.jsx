
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Open Sidebar
    const handleOpen = () => {
        setIsOpen(true);
    };

    // Close Sidebar
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <div className=" sticky top-0 z-50 ">

            <div className=" flex items-center ">
                {/* Menu Button */}
                <button
                    onClick={handleOpen}
                    className="m-5 text-3xl"
                >
                    <MdMenu />
                </button>
                <h1 className="text-center text-xl md:text-3xl text-green-600 absolute left-1/2 transform -translate-x-1/2">Frontend Features with React.js</h1>
            </div>


            {/* Sidebar */}
            <div
                className={`fixed left-0 top-0 h-screen w-64
        bg-slate-900 p-5 text-white
        transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="mb-10 text-3xl"
                >
                    <MdClose />
                </button>

                <h2 className="text-xl font-bold">
                    My Sidebar
                </h2>

                <ul className="mt-6 space-y-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
