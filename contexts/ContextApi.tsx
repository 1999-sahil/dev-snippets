"use client";

import React, { createContext, useContext, useState } from "react";
import { BorderAll, DeleteOutlineOutlined, FavoriteBorder, Logout } from '@mui/icons-material'

interface GlobalContextType {
    sideBarMenuObject: {
        sideBarMenu: SideBarMenu[];
        setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
    };
};

interface SideBarMenu {
    id: number;
    name: string;
    isSelected: boolean;
    icons: React.ReactNode;
};

const ContextProvider = createContext<GlobalContextType>({
    sideBarMenuObject: {
        sideBarMenu: [],
        setSideBarMenu: () => {},
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

    return (
        <ContextProvider.Provider
            value={{ sideBarMenuObject: { sideBarMenu, setSideBarMenu } }}
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