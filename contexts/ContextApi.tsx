"use client";

import {
  Captions,
  Heart,
  Home,
  LogOut,
  MoonStar,
  Sun,
  Trash,
} from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SideBarMenu {
  id: number;
  name: string;
  isSelected: boolean;
  icons: React.ReactNode;
}

interface DarkModeType {
  id: number;
  icon: React.ReactNode;
  isSelected: boolean;
}

export interface SingleSnippetType {
  id: string;
  title: string;
  isFavorite: boolean;
  tags: string[];
  description: string;
  code: string;
  language: string;
  creationDate: string;
}

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
  allSnippetsObject: {
    allSnippets: SingleSnippetType[];
    setAllSnippets: React.Dispatch<React.SetStateAction<SingleSnippetType[]>>;
  };
  selectedSnippetObject:  {
    selectedSnippet: SingleSnippetType | null;
    setSelectedSnippet: React.Dispatch<React.SetStateAction<SingleSnippetType | null>>;
  };
}

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
  },
  allSnippetsObject: {
    allSnippets: [],
    setAllSnippets: () => {},
  },
  selectedSnippetObject: {
    selectedSnippet: null,
    setSelectedSnippet: () => {},
  },
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sideBarMenu, setSideBarMenu] = useState<SideBarMenu[]>([
    { id: 2, name: "Home", isSelected: true, icons: <Home size={20} /> },
    {
      id: 2,
      name: "Snippets",
      isSelected: false,
      icons: <Captions size={20} />,
    },
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
  const [allSnippets, setAllSnippets] = useState<SingleSnippetType[]>([]);
  const [selectedSnippet, setSelectedSnippet] = useState<SingleSnippetType | null>(null);
  
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

  useEffect(() => {
    function updateAllSnippets() {
      const allSnippets = [
        {
          id: "1",
          title:
            "This is a Reactjs project along with Nextjs. Fast Refresh had to perform a full reload.",
          isFavorite: false,
          tags: ["react", "next", "js"],
          description: "Technologies used in building full stack application",
          code: `
                        import React from 'react';

                        function helloWorld() {
                            return (
                                <div>Hello World!</div>
                            )
                        }
                        
                        export default helloWorld;
                    `,
          language: "javascript",
          creationDate: "2024-08-14",
        },
        {
          id: "2",
          title:
            "Fast Refresh had to perform a full reload. Technologies used in building full stack app",
          isFavorite: true,
          tags: ["react", "vercel", "js"],
          description: "Compiled in 11.9s (2550 modules)",
          code: `
                        > devsnippets@0.1.0 dev
                        > next dev

                        ▲ Next.js 14.2.5
                        - Local:        http://localhost:3000
                        - Environments: .env
                    `,
          language: "typescript",
          creationDate: "2023-08-12",
        },
        {
          id: "3",
          title: "Fast Refresh had to perform a full reload.",
          isFavorite: true,
          tags: ["react", "vercel", "js"],
          description: "Compiled in 11.9s (2550 modules)",
          code: `
                        > devsnippets@0.1.0 dev
                        > next dev

                        ▲ Next.js 14.2.5
                        - Local:        http://localhost:3000
                        - Environments: .env
                    `,
          language: "typescript",
          creationDate: "2023-08-12",
        },
        {
          id: "4",
          title: "Fast Refresh had to perform a full reload.",
          isFavorite: true,
          tags: ["react", "vercel", "js"],
          description: "Compiled in 11.9s (2550 modules)",
          code: `
                        > devsnippets@0.1.0 dev
                        > next dev

                        ▲ Next.js 14.2.5
                        - Local:        http://localhost:3000
                        - Environments: .env
                    `,
          language: "typescript",
          creationDate: "2023-08-12",
        },
        {
          id: "5",
          title: "Fast Refresh had to perform a full reload.",
          isFavorite: true,
          tags: ["react", "vercel", "js"],
          description: "Compiled in 11.9s (2550 modules)",
          code: `
                        > devsnippets@0.1.0 dev
                        > next dev

                        ▲ Next.js 14.2.5
                        - Local:        http://localhost:3000
                        - Environments: .env
                    `,
          language: "typescript",
          creationDate: "2023-08-12",
        },
      ];

      setTimeout(() => {
        setAllSnippets(allSnippets);
      }, 1200);
    }
    updateAllSnippets();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        sideBarMenuObject: { sideBarMenu, setSideBarMenu },
        darkModeObject: { darkMode, setDarkMode },
        openSidebarObject: { openSidebar, setOpenSidebar },
        openContentNoteObject: { openContentNote, setOpenContentNote },
        isEditSnippetMobileObject: { isEditSnippetMobile, setIsEditSnippetMobile },
        allSnippetsObject: { allSnippets, setAllSnippets },
        selectedSnippetObject: { selectedSnippet, setSelectedSnippet },
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
