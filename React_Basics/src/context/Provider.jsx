import { useState } from 'react';
import { GlobalContext } from './Context.jsx';

const UserProvider = ({ children }) => {

    // Theme state and function to toggle theme
    const [theme, setTheme] = useState("light")

    return <GlobalContext.Provider value={{
        theme, setTheme
    }}>
        {children}
    </GlobalContext.Provider>
}

export default UserProvider;