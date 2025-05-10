import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar";

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}
