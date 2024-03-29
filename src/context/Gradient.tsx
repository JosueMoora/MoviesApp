
import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string
    secundary: string
    third: string
}

interface ContextProps {
    colors: ImageColors
    prevColors: ImageColors
    setMainColors: (colors: ImageColors) => void
    setPrevMainColors: (colors: ImageColors) => void
}
export const GradientContext = createContext({} as ContextProps)

export const GradientProvider = ({children}: any) => {
    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent',
        third: 'transparent',
    })
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent',
        third: 'transparent',
    })
    const setMainColors = (color: ImageColors) => {
        setColors(color)
    }
    const setPrevMainColors = (color: ImageColors) => {
        setPrevColors(color)
    }
    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }} >
            {children}
        </GradientContext.Provider>
    )
}
