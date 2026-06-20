import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-8 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-blue-400">
                    React Basics
                </h1>

                {/* Navigation Links */}
                <div className="flex gap-6">
                    <Link className="hover:text-blue-400 transition">
                        Home
                    </Link>

                    <Link to="/use-reducer" className="hover:text-blue-400 transition">
                        useReducer
                    </Link>

                    <Link to="/use-context" className="hover:text-blue-400 transition">
                        useContext
                    </Link>

                    <Link to="/about" className="hover:text-blue-400 transition">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;