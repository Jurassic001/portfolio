import { useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Privacy from "./components/pages/Privacy";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

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
            <Projects />
            <Contact />
          </main>
        </>
      )}
      <Footer />
    </div>
  );
}
