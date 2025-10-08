import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Runninghead from "./components/runninghead";
import About from "./components/About";

function App() {
  return (
    <>
    <div class="bg-[url(./src/assets/images/hero-bg.png)] bg-cover"> 
    <Navbar />
     <Hero /></div>
    <Runninghead />
    <About />
    </>
  );
}

export default App;
