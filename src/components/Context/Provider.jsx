import { Context } from "./Context"

export const Provider = ({ children }) => {


    return(
        <Context.Provider value ={{
            
        }}>
            {children}
        </Context.Provider>
    )
}