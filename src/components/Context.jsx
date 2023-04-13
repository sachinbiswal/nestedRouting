import { createContext, useState } from "react";

export const mycontext = createContext();

function CustomProvider({children}){
    const [loggedIn, setLoggedIn] = useState(false)
    return(
        <mycontext.Provider value={{loggedIn, setLoggedIn}}>
             {children}
        </mycontext.Provider>
    )
}

export default CustomProvider;