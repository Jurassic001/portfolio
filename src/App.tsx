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
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-md focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main" className="flex-1">
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
