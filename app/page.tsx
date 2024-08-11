import Footer from "@/components/footer/footer";
import Navbar from "@/components/navigation/navbar";
import CtxSection from "@/components/homepage/ctx-section";
import HomePage from "@/components/homepage/home-page";
import Description from "@/components/homepage/app-description";
import { useGlobalContext } from "@/contexts/ContextApi";
import { useState, useEffect } from 'react'

export default function Home() {
  const {
    darkModeObject: { darkMode },
  } = useGlobalContext();

  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className={`${darkMode[1].isSelected ? "bg-[#121213]" : "bg-white"}`}>
      <Navbar />
      <div className="flex flex-col items-center justify-center my-8 py-12">
        <CtxSection />
        <HomePage />
      </div>
      <Description />
      <Footer />
    </div>
  );
}
