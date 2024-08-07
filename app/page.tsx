import Footer from "@/components/footer/footer";
import CtxSection from "@/components/homepage/CtxSection";
import HomePage from "@/components/homepage/HomePage";
import Navbar from "@/components/navigation/navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-8">
        <CtxSection />
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
