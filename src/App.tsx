import { useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Privacy from "./components/pages/Privacy";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

/** Single static route besides the home page; served via the SPA fallback. */
function isPrivacyRoute() {
  return window.location.pathname.replace(/\/+$/, "") === "/privacy";
}

export default function App() {
  const [showPrivacy] = useState(isPrivacyRoute);

  return (
    <div className="flex min-h-screen flex-col">
      {showPrivacy ? (
        <Privacy />
      ) : (
        <>
          <Navbar />
          <main className="flex-1">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}
