import { createContext, useState } from "react";

const authContext = createContext()

const AuthContext = ({ children }) => {

    const [user, setUser] = useState("")

    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    )
}

export default AuthContext