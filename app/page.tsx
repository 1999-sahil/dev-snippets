"use client";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navigation/navbar";
import CtxSection from "@/components/homepage/ctx-section";
import HomePage from "@/components/homepage/home-page";
import Description from "@/components/homepage/app-description";

export default function Home() {

  return (
    <div className="dark:bg-[#121213] bg-white">
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
