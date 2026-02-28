import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Builds from "@/components/Builds";
import Impact from "@/components/Impact";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <Impact />
        <Builds />
        <Skills />
      </div>

      <Footer />
    </main>
  );
}
