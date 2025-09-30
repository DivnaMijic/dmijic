import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Leadership from "./components/Leadership";
import Education from "./components/Education";
import Truly from "./components/Truly";
import Biography from "./components/Biography";
import Contact from "./components/Contact";
import SideNav from "./elements/SideNav";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <SideNav />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Leadership />
      <Works />
      <Truly />
      <Biography />
      <Contact />
    </div>
  );
}

export default App;
