import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Runninghead from "./components/runninghead";
import About from "./components/About";
import Services from "./components/Services";
import Whychosse from "./components/whychosse";
import Agency from "./components/Agency";
import Features from "./components/Features";
function App() {
  return (
    <>
    <div class="bg-[url(./src/assets/images/hero-bg.png)] bg-cover"> 
    <Navbar />
     <Hero /></div>
    <Runninghead />
    <About />
    <Services />
    <Whychosse />
    < Agency/>
    <Features />
    </>
  );
}

export default App;
