import type React from "react"
import { createContext, useContext } from "react"

interface Prop {
    children: React.ReactNode
}

const ThemeContext = createContext({});
function ThemeProvider({ children }: Prop) {
    return (
        <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider