import { useState } from "react"
import { UserContext, } from "./Context.jsx"

export const UserProvider = ({ children }) => {
    const [theme, setTheme] = useState("light")
    return (
        <UserContext.Provider value={{ theme, setTheme }}>
            {children}
        </UserContext.Provider>
    )
}