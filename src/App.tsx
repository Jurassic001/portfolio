import { useEffect, useRef, useState } from "react";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import ColorBends from './components/reactbits/ColorBends';
import Toast from "./components/ui/Toast";
import Privacy from "./components/pages/Privacy";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import { useTheme } from "./hooks/useTheme";

/** Single static route besides the home page; served via the SPA fallback. */
function isPrivacyRoute() {
  return window.location.pathname.replace(/\/+$/, "") === "/privacy";
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [showPrivacy] = useState(isPrivacyRoute);
  const [toastVisible, setToastVisible] = useState(false);
  const prevTheme = useRef(theme);

  useEffect(() => {
    if (prevTheme.current === "dark" && theme === "light") {
      setToastVisible(true);
    }
    prevTheme.current = theme;
  }, [theme]);

  // Dismiss the toast on its own timer, independent of further theme changes
  useEffect(() => {
    if (!toastVisible) return;
    const t = setTimeout(() => setToastVisible(false), 3000);
    return () => clearTimeout(t);
  }, [toastVisible]);

  return (
    <div className="flex min-h-screen flex-col">
      {theme === "dark" && (
        <div className="fixed inset-0 z-[-1] h-screen w-screen opacity-60">
          <ColorBends
            colors={["#6366f1", "#500000", "#22d3ee"]}
            rotation={0}
            speed={0.2}
            scale={1}
            frequency={1}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0}
            noise={0}
            transparent={true}
            autoRotate={3}
          />
        </div>
      )}
      <div className="pointer-events-none fixed inset-0 z-[-1] bg-overlay" />
      {showPrivacy ? (
        <Privacy theme={theme} toggleTheme={toggleTheme} />
      ) : (
        <>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
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
      <Toast message="Background FX hidden for accessibility" visible={toastVisible} />
    </div>
  );
}
