import { createContext, useContext, useEffect, useState } from 'react'

export const tamanhoContext = createContext()

export const WidthContext = ({ children }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 700)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 700)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <tamanhoContext.Provider value={{isMobile}}
        >
            {children}
        </tamanhoContext.Provider>
    )
}

export const useWidth = () => useContext(tamanhoContext)
