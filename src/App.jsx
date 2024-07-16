import "./App.css";
import Navbar from "./components/All components/Navbar";
import Hero from "./components/All components/Hero";
import Parallax from "./components/All components/parallax/Parallax";
import Services from "./components/All components/services/Services";
function App() {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="Service"><Parallax type="services"></Parallax></section>
        <section><Services></Services></section>
        <section id="Portfolio"><Parallax type="portfolio"></Parallax></section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
