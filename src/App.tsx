import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Truly from "./components/Truly";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import SideNav from "./elements/SideNav";
import Works from "./components/Works";
import Footer from "./elements/Footer";
import Featured from "./components/Featured";
import Awards from "./components/Awards";
import Gallery from "./components/Gallery";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  return (
    <div>
      <SideNav />
      <Hero />
      <About />
      <Works />
      <Gallery />
      <Awards />
      <Experience />
      <Truly />
      <Biography />
      <Contact />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
