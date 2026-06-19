
import { createContext } from "react"

// creating context
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

// creating provider component


const UserProvider = ({ children }) => {
    return <UserContext.Provider >
        {children}
    </UserContext.Provider>
}

export default UserProvider;