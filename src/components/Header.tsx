/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "features", label: t("nav.features") },
    { id: "portfolio", label: t("nav.portfolio") },
    { id: "resume", label: t("nav.resume") },
    // { id: "clients", label: t("nav.clients") },
    { id: "pricing", label: t("nav.pricing") },
    { id: "blog", label: t("nav.blog") },
    { id: "contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/95 backdrop-blur-md border-b border-white/5 shadow-2xl py-3.5"
            : "bg-dark-bg/85 backdrop-blur-md py-5 border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo replica from user image */}
          <button
            id="nav-logo-btn"
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-1 group text-left cursor-pointer"
          >
            <span className="text-sm sm:text-base font-sans font-black tracking-widest flex items-center gap-1">
              <span className="text-brand-green">DATA</span>
              <span className="text-brand-orange">AUTOMATION</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-4 xl:gap-6">
            <ul className="flex items-center gap-4 xl:gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    id={`nav-link-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-xs font-bold tracking-widest transition-colors duration-300 relative py-2 cursor-pointer ${
                      activeSection === item.id
                        ? "text-brand-orange"
                        : "text-text-gray hover:text-brand-orange"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Language Switcher Pill */}
            <div className="flex items-center bg-dark-sec border border-white/5 rounded-full p-0.5 ml-3 shadow-inner">
              <button
                id="lang-en-btn"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-[10px] font-black tracking-wider rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-text-gray hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                id="lang-kh-btn"
                onClick={() => setLanguage("kh")}
                className={`px-3 py-1 text-[10px] font-black tracking-wider rounded-full transition-all cursor-pointer ${
                  language === "kh"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-text-gray hover:text-white"
                }`}
              >
                KH
              </button>
            </div>

            {/* CTA Buy Now Button */}
            <button
              id="header-buy-btn"
              onClick={() => scrollToSection("contact")}
              className="ml-3 px-5 py-2.5 rounded-lg bg-dark-sec border border-brand-orange/20 text-[10px] font-bold tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange shadow-lg transition-all flex items-center gap-1.5 group cursor-pointer"
            >
              {t("nav.hire")}
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Language Selector */}
            <div className="flex items-center bg-dark-sec border border-white/5 rounded-full p-0.5 shadow-inner">
              <button
                id="mobile-lang-en"
                onClick={() => setLanguage("en")}
                className={`px-2 py-0.5 text-[9px] font-bold rounded-full transition-all cursor-pointer ${
                  language === "en" ? "bg-brand-orange text-white" : "text-text-gray"
                }`}
              >
                EN
              </button>
              <button
                id="mobile-lang-kh"
                onClick={() => setLanguage("kh")}
                className={`px-2 py-0.5 text-[9px] font-bold rounded-full transition-all cursor-pointer ${
                  language === "kh" ? "bg-brand-orange text-white" : "text-text-gray"
                }`}
              >
                KH
              </button>
            </div>

            <button
              id="header-mobile-buy-btn"
              onClick={() => scrollToSection("contact")}
              className="px-3.5 py-2 rounded-lg bg-dark-sec border border-brand-orange/10 text-[9px] font-bold tracking-widest text-brand-orange"
            >
              {t("nav.hire")}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-dark-sec text-brand-orange border border-white/5 shadow-md cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 z-40 lg:hidden"
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-dark-sec border-l border-white/5 z-50 p-6 shadow-2xl flex flex-col lg:hidden overflow-y-auto text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-6">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-sans font-black tracking-widest text-brand-orange">
                    KHUN NAT
                  </span>
                </div>
                <button
                  id="mobile-menu-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-dark-bg text-brand-orange border border-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Bio snippet */}
              <p className="text-xs text-text-gray mb-6 leading-relaxed">
                I construct high-performance digital architectures with a pristine attention to UI details and fluid animations.
              </p>

              {/* Navigation list */}
              <nav className="flex-1">
                <ul className="space-y-2.5">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        id={`mobile-nav-link-${item.id}`}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest transition-all ${
                          activeSection === item.id
                            ? "bg-brand-orange text-white shadow-lg"
                            : "text-text-gray hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Footer in Sidebar */}
              <div className="mt-6 border-t border-white/5 pt-5">
                <p className="text-[10px] uppercase tracking-widest text-text-gray mb-3 font-bold">
                  FIND WITH ME
                </p>
                <div className="flex items-center gap-3">
                  {["FB", "IG", "LN"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="w-10 h-10 rounded-lg bg-dark-bg border border-white/5 flex items-center justify-center text-xs font-bold text-text-gray hover:text-brand-orange hover:border-brand-orange/30 transition-all"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
