"use client";

import React, { createContext, useContext, useState } from "react";
import {
    BorderAll,
    DarkMode,
    DeleteOutlineOutlined,
    FavoriteBorder,
    LightMode,
    Logout
} from '@mui/icons-material'



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
});

export default function GlobalContextProvider({
    children
}: {
    children: React.ReactNode
}) {

    const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
        { id: 1, name: "All Snippets", isSelected: true, icons: <BorderAll sx={{ fontSize: 18 }} /> },
        { id: 2, name: "Favorites", isSelected: false, icons: <FavoriteBorder sx={{ fontSize: 18 }} /> },
        { id: 3, name: "Trash", isSelected: false, icons: <DeleteOutlineOutlined sx={{ fontSize: 18 }} /> },
        { id: 4, name: "Logout", isSelected: false, icons: <Logout sx={{ fontSize: 18 }} /> },
    ]);

    const [darkMode, setDarkMode] = useState<DarkModeType[]>([
        { id: 1, icon: <LightMode sx={{ fontSize: 18 }} />, isSelected: true },
        { id: 2, icon: <DarkMode sx={{ fontSize: 18 }} />, isSelected: false },
    ]);

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <ContextProvider.Provider
            value={{
                sideBarMenuObject: { sideBarMenu, setSideBarMenu } ,
                darkModeObject: { darkMode, setDarkMode },
                openSidebarObject: { openSidebar, setOpenSidebar },
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