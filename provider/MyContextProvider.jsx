"use client";
import { createContext, useState, useContext, useEffect } from "react";

// Création du context
const MyContext = createContext();

// Création du hook personnalisé pour utiliser le context
export const useMyContext = () => {
    return useContext(MyContext);
};

// Création du provider
export default function MyContextProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme2") || "light";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.body.classList.remove("light", "dark");
        document.body.classList.add(theme);
        localStorage.setItem("theme2", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <MyContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </MyContext.Provider>
    );
}
