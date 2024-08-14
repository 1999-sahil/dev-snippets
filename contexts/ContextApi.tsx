"use client";

import { Captions, Heart, Home, LogOut, MoonStar, Sun, Trash } from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";



interface SideBarMenu {
    id: number;
    name: string;
    isSelected: boolean;
    icons: React.ReactNode;
};

interface DarkModeType {
    id: number;
    icon: React.ReactNode;
    isSelected: boolean;
};

interface GlobalContextType {
    sideBarMenuObject: {
        sideBarMenu: SideBarMenu[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
    };
    darkModeObject: {
        darkMode: DarkModeType[];
        setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
    };
    openSidebarObject: {
        openSidebar: boolean;
        setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    };
    openContentNoteObject: {
        openContentNote: boolean;
        setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
    };
    isEditSnippetMobileObject: {
        isEditSnippetMobile: boolean;
        setIsEditSnippetMobile: React.Dispatch<React.SetStateAction<boolean>>;
    };
};

const ContextProvider = createContext<GlobalContextType>({
    sideBarMenuObject: {
        sideBarMenu: [],
        setSideBarMenu: () => {},
    },
    darkModeObject: {
        darkMode: [],
        setDarkMode: () => {},
    },
    openSidebarObject: {
        openSidebar: false,
        setOpenSidebar: () => {},
    },
    openContentNoteObject: {
        openContentNote: false,
        setOpenContentNote: () => {},
    },
    isEditSnippetMobileObject: {
        isEditSnippetMobile: false,
        setIsEditSnippetMobile: () => {},
    }
});

export default function GlobalContextProvider({
    children
}: {
    children: React.ReactNode
}) {

    const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
        { id: 2, name: "Home", isSelected: true, icons: <Home size={20} /> },
        { id: 2, name: "Snippets", isSelected: false, icons: <Captions size={20} /> },
        { id: 3, name: "Favorites", isSelected: false, icons: <Heart size={20} /> },
        { id: 4, name: "Trash", isSelected: false, icons: <Trash size={20} /> },
        { id: 5, name: "Logout", isSelected: false, icons: <LogOut size={20} /> },
    ]);

    const [darkMode, setDarkMode] = useState<DarkModeType[]>([
        { id: 1, icon: <Sun />, isSelected: true },
        { id: 2, icon: <MoonStar />, isSelected: false },
    ]);

    const [openSidebar, setOpenSidebar] = useState(false);

    const [openContentNote, setOpenContentNote] = useState(false);

    const [isEditSnippetMobile, setIsEditSnippetMobile] = useState(false);

    const handleResize = () => {
        setIsEditSnippetMobile(window.innerWidth <= 640);
    };

    useEffect(() => {
        // check window size on initial render
        handleResize();

        // add event listener for window resize
        window.addEventListener("resize", handleResize);

        // cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <ContextProvider.Provider
            value={{
                sideBarMenuObject: { sideBarMenu, setSideBarMenu } ,
                darkModeObject: { darkMode, setDarkMode },
                openSidebarObject: { openSidebar, setOpenSidebar },
                openContentNoteObject: { openContentNote, setOpenContentNote },
                isEditSnippetMobileObject: { isEditSnippetMobile, setIsEditSnippetMobile },
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
}

export const useGlobalContext = () => {
    const context = useContext(ContextProvider);

    if (!context) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }

    return context;
};