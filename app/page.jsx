import Hero from "../components/Hero";
import About from "../components/About";
import Product from "../components/Product";
import Testimoniels from "../components/Testimoniels";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="w-full h-full ">
      <Hero />
      <About />
      <Product />
      <Testimoniels />
      <Contact />
    </div>
  );
}
