import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Navbar from "./Components/NavBar";
import Products from "./Components/Product";

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  // Define the scroll animation for each section
  const sections = {
    Home: useSpring({ opacity: 1, transform: "translateY(0%)", config: config.slow }),
    AboutUs: useSpring({
      opacity: activeSection === "AboutUs" ? 1 : 1,
      transform: `translateX(${activeSection === "AboutUs" || activeSection === "Services" || activeSection === "Contact" ? 0 : 10}%)`,
      
      
    }),
    Services: useSpring({
      opacity: activeSection === "Services" || activeSection === "Contact"? 1 : 0,
      transform: `scale(${activeSection === "Services" || activeSection === "Contact"? 1.1 : 1})`,
      transform: `translateX(${activeSection === "Services" || activeSection === "Contact" ? 0 : 10}%)`,
      
      
    }),
    Contact: useSpring({
      opacity: activeSection === "Contact" ? 1 : 0,
      // config: config.molasses,
    }),
  };
  
  

  // Scroll to the selected section
  const scrollToSection = (sectionName) => {
    setActiveSection(sectionName);
    window.scrollTo({
      top: document.getElementById(sectionName).offsetTop,
      behavior: "smooth",
    });
  };

  // Add a scroll listener to determine which section is active
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = {
        Home: 0,
        AboutUs: document.getElementById("AboutUs").offsetTop-300,
        Services: document.getElementById("Services").offsetTop-330,
        Contact: document.getElementById("Contact").offsetTop-430,
      };

      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (scrollPosition >= offset && scrollPosition < offset + 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Navbar activeSection={activeSection} scrollToSection={(val)=>scrollToSection(val)} />
      <div className="max-w-full bg-slate-50">
        <animated.div id="Home" style={sections.Home}>
          <Home />
        </animated.div>
        <animated.div id="AboutUs" style={sections.AboutUs}>
          <AboutUs />
        </animated.div>
        <animated.div id="Services" style={sections.Services}>
          <Services />
        </animated.div>
        <animated.div id="Product" style={sections.Services}>
          <Products />
        </animated.div>
        <animated.div id="Contact" style={sections.Contact}>
          <Contact />
        </animated.div>
      </div>
    </div>
  );
}

export default App;
