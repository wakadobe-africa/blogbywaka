import { createContext } from "react";



//stege one create a context

export const AppNameContext = createContext();


//stage two: create a provider a provider is a super component that can provide any componenet that are its children with whatever it has
export const AppNameProvider = ({children})=>{
    const appName = "Invento Application"
    return (
            <AppNameContext.Provider value={{appName:appName}}>
                {children}
            </AppNameContext.Provider>
            )
}