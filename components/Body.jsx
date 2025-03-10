"use client";
import Header from "./Header";
import Footer from "./Footer";
import { useMyContext } from "@/provider/MyContextProvider";

export default function Body({ children }) {
    const { theme } = useMyContext();

    return (
        <div
            className={`flex flex-col min-h-screen ${
                theme === "light" ? "bg-white" : "bg-black"
            } ${theme === "light" ? "text-black" : "text-white"}`}
        >
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    );
}
