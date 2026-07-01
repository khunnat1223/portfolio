/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "features", "portfolio", "resume", "clients", "pricing", "blog", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // triggers when section is in active center view
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <LanguageProvider>
      <div id="portfolio-app-root" className="min-h-screen bg-dark-bg font-sans text-white antialiased selection:bg-brand-orange selection:text-white">
        {/* Premium Header/Navigation bar */}
        <Header activeSection={activeSection} />

        {/* Main content layouts */}
        <main id="main-content">
          <Hero />
          <Services />
          <Portfolio />
          <Resume />
          {/* <Testimonials /> */}
          {/* <Clients /> */}
          <Pricing />
          <Blog />
          <Contact />
        </main>

        {/* Brand copyright footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
