/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Handshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLIENT_LOGOS } from "../data";
import { useTranslation } from "../context/LanguageContext";

export default function Clients() {
  const { t } = useTranslation();

  const categories = [
    "JavaScript",
    "Product Design",
    "Wordpress",
    "HTML to React",
    "React to Laravel",
    "Python",
  ];

  const [activeCategory, setActiveCategory] = useState("JavaScript");

  const filteredLogos = CLIENT_LOGOS.filter((logo) => logo.category === activeCategory);

  return (
    <section className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("clients.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("clients.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Category List (Sidebar Tabs) */}
          <div className="lg:col-span-4 w-full">
            <div className="p-3 rounded-2xl bg-dark-sec border border-white/5 shadow-inner flex flex-col gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`client-category-btn-${cat.replace(/\s+/g, "-")}`}
                  onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left py-3.5 px-6 text-xs sm:text-sm font-bold tracking-wider rounded-xl transition-all relative cursor-pointer ${
                    activeCategory === cat
                      ? "bg-dark-bg text-brand-orange border border-white/5 shadow-md"
                      : "text-text-gray hover:text-brand-orange"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Right Brand Logos Grid */}
          <div className="lg:col-span-8 w-full min-h-[350px]">
            <motion.div
              layout
              className="grid grid-cols-2 sm:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredLogos.map((logo) => (
                  <motion.div
                    key={logo.id}
                    id={`client-brand-card-${logo.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 h-28 sm:h-32 rounded-2xl bg-dark-sec border border-white/5 hover:border-brand-orange/30 shadow-2xl flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-pointer hover:-translate-y-0.5"
                  >
                    {/* Abstract Stylized Vector Logo Icon in the center */}
                    <div className="w-10 h-10 rounded-full bg-dark-bg border border-white/5 flex items-center justify-center text-text-gray group-hover:text-brand-orange group-hover:shadow-md transition-all mb-2.5">
                      <Handshake className="w-5 h-5 stroke-[1.2]" />
                    </div>
                    
                    <span className="text-xs sm:text-sm font-bold text-text-gray group-hover:text-brand-orange transition-colors tracking-wide">
                      {logo.name}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
