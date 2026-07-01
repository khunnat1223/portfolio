/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Footer() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const { language } = useTranslation();

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer id="app-footer" className="bg-dark-sec py-16 border-t border-white/5 text-center relative text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        
        {/* Text-only Brand name */}
        <div className="flex items-center gap-1">
          <span className="text-xl font-sans font-extrabold tracking-widest text-brand-orange">
            Data Automation
          </span>
        </div>

        {/* Copy lines */}
        <p className="text-sm text-text-gray font-semibold">
          {language === "kh"
            ? `© ${new Date().getFullYear()}។ រក្សាសិទ្ធិគ្រប់យ៉ាងដោយ ឃុន ណាត់។ រចនាឡើងដោយក្តីស្រឡាញ់។`
            : `© ${new Date().getFullYear()}. All rights reserved by Khun Nat. Designed with premium craft.`
          }
        </p>

      </div>

      {/* Floating Scroll To Top button */}
      <AnimatePresence>
        {showScrollBtn && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-xl bg-dark-sec text-brand-orange border border-white/5 shadow-2xl flex items-center justify-center hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
