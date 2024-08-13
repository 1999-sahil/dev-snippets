"use client";

import { Captions, Heart, LogOut, MoonStar, Sun, Trash } from "lucide-react";
import React, { createContext, useContext, useState } from "react";



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
});

export default function GlobalContextProvider({
    children
}: {
    children: React.ReactNode
}) {

    const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
        { id: 1, name: "All Snippets", isSelected: true, icons: <Captions size={20} /> },
        { id: 2, name: "Favorites", isSelected: false, icons: <Heart size={20} /> },
        { id: 3, name: "Trash", isSelected: false, icons: <Trash size={20} /> },
        { id: 4, name: "Logout", isSelected: false, icons: <LogOut size={20} /> },
    ]);

    const [darkMode, setDarkMode] = useState<DarkModeType[]>([
        { id: 1, icon: <Sun />, isSelected: true },
        { id: 2, icon: <MoonStar />, isSelected: false },
    ]);

    const [openSidebar, setOpenSidebar] = useState(false);

    const [openContentNote, setOpenContentNote] = useState(false);

    return (
        <ContextProvider.Provider
            value={{
                sideBarMenuObject: { sideBarMenu, setSideBarMenu } ,
                darkModeObject: { darkMode, setDarkMode },
                openSidebarObject: { openSidebar, setOpenSidebar },
                openContentNoteObject: { openContentNote, setOpenContentNote },
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