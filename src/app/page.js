import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import ImageShow from "@/components/ImageShow";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import AboutDesktop from "@/components/AboutDesktop";
import Mapbox from "@/components/Mapbox";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <Intro />
      <About />
      <AboutDesktop />
      <ImageShow src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/Salama/v5tofb0oz21djnpcndnp" />
      <Menu />
      <Mapbox />
      <Footer />
    </div>
  );
}
