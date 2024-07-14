import "./App.css";
import Navbar from "./components/All components/Navbar";
import Hero from "./components/All components/Hero";
function App() {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar></Navbar>
          <Hero></Hero>
        </section>
        <section id="Service">Parallax</section>
        <section>Services</section>
        <section id="Portfolio">Parallax</section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id="Contact">Contact</section>
      </div>
    </>
  );
}

export default App;
