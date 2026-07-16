import Navbar from "../components/Layout/Navbar";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Footer from "../components/Footer/Footer";


function Home() {

  return (

    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Experience />

        <Projects />
    
      </main>

      <Footer />

    </>

  );

}


export default Home;