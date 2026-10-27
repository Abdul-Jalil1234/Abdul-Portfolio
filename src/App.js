import React from "react";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Certificates from "./components/certificates/Certificates";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <About />
        <Projects />
        <Resume />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <div className="max-w-screen-xl mx-auto">
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
