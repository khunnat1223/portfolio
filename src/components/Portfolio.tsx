/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Heart, X, ArrowUpRight, Calendar, User, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PORTFOLIO_DATA } from "../data";
import { PortfolioItem } from "../types";
import { useTranslation } from "../context/LanguageContext";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const { t } = useTranslation();

  const toggleLike = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Map database elements to use localized content from context dictionary
  const localizedPortfolio = PORTFOLIO_DATA.map((item) => {
    if (item.id === "p1") {
      return {
        ...item,
        title: t("portfolio.proj1_title"),
        description: t("portfolio.proj1_desc"),
        category: t("portfolio.cat_auto")
      };
    }
    if (item.id === "p2") {
      return {
        ...item,
        title: t("portfolio.proj2_title"),
        description: t("portfolio.proj2_desc"),
        category: t("portfolio.cat_design")
      };
    }
    if (item.id === "p3") {
      return {
        ...item,
        title: t("portfolio.proj3_title"),
        description: t("portfolio.proj3_desc"),
        category: t("portfolio.cat_dev")
      };
    }
    // Fallback translation mappings
    let translatedCat = item.category;
    if (item.category === "DEVELOPMENT" || item.category === "WEB DESIGN") {
      translatedCat = t("portfolio.cat_dev");
    } else if (item.category === "APPLICATION" || item.category === "FIGMA" || item.category === "PHOTOSHOP") {
      translatedCat = t("portfolio.cat_design");
    }
    return {
      ...item,
      category: translatedCat
    };
  });

  return (
    <section id="portfolio" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center lg:text-left">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("portfolio.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("portfolio.title")}
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedPortfolio.map((item, idx) => {
            const isLiked = likedItems[item.id];
            return (
              <motion.div
                key={item.id}
                id={`portfolio-item-${item.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className="group p-6 rounded-2xl bg-dark-sec border border-white/5 hover:border-brand-orange/30 shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Thumbnail image wrapper */}
                <div className="w-full h-48 aspect-[4/3] rounded-xl overflow-hidden mb-6 relative shadow-inner border border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  {/* Visual gradient overlay on hover */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Tag & Views Info */}
                <div className="flex items-center justify-between text-xs font-black tracking-widest text-brand-orange mb-4">
                  <span className="uppercase">{item.category}</span>
                  <button
                    id={`portfolio-like-btn-${item.id}`}
                    onClick={(e) => toggleLike(item.id, e)}
                    className="flex items-center gap-1.5 py-1 px-2.5 rounded-full hover:bg-brand-orange/10 transition-colors cursor-pointer"
                  >
                    <Heart className={`w-3.5 h-3.5 transition-colors ${isLiked ? "fill-brand-orange text-brand-orange" : "text-text-gray"}`} />
                    <span className="text-text-gray font-mono text-xs font-bold">
                      {item.views + (isLiked ? 1 : 0)}
                    </span>
                  </button>
                </div>

                {/* Title and arrow on hover */}
                <div>
                  <h3 className="text-lg font-sans font-bold text-white group-hover:text-brand-orange leading-snug transition-colors flex items-start justify-between gap-3 mb-2">
                    <span className="line-clamp-2">{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-brand-orange opacity-0 group-hover:opacity-100 transform translate-x-1 -translate-y-1 transition-all duration-300" />
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              id="portfolio-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10 pointer-events-none">
              <motion.div
                id="portfolio-modal-dialog"
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-dark-sec rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden border border-white/5 pointer-events-auto max-h-[90vh] flex flex-col relative text-white"
              >
                {/* Floating Close Button */}
                <button
                  id="portfolio-modal-close"
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-dark-bg text-text-gray hover:text-brand-orange hover:scale-105 border border-white/5 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto p-6 sm:p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    
                    {/* Visual Media Showcase */}
                    <div className="lg:col-span-6 flex flex-col gap-6">
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner relative border border-white/5 bg-dark-bg">
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Interactive Actions */}
                      <div className="flex items-center gap-4">
                        <button
                          id="modal-like-action"
                          onClick={() => toggleLike(selectedItem.id)}
                          className="flex-1 py-4 px-6 rounded-xl bg-dark-bg text-sm font-bold tracking-widest text-brand-orange border border-white/5 hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                        >
                          <Heart className={`w-4 h-4 ${likedItems[selectedItem.id] ? "fill-brand-orange text-brand-orange" : ""}`} />
                          {likedItems[selectedItem.id] ? t("portfolio.liked") : t("portfolio.like")}
                        </button>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="lg:col-span-6 flex flex-col pt-2">
                      <span className="text-xs font-black tracking-[0.2em] text-brand-green uppercase block mb-3">
                        {selectedItem.category}
                      </span>
                      
                      <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight leading-tight mb-5">
                        {selectedItem.title}
                      </h3>

                      <p className="text-sm text-text-gray leading-relaxed mb-6">
                        {selectedItem.description}
                      </p>

                      {/* Project Meta Information */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6 border-t border-b border-white/5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-dark-bg border border-white/5 flex items-center justify-center text-brand-orange shadow-md">
                            <User className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase tracking-widest text-text-gray font-bold">{t("portfolio.client")}</span>
                            <span className="block text-xs font-bold text-white">{selectedItem.client}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-dark-bg border border-white/5 flex items-center justify-center text-brand-orange shadow-md">
                            <Calendar className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <span className="block text-[9px] uppercase tracking-widest text-text-gray font-bold">{t("portfolio.date")}</span>
                            <span className="block text-xs font-bold text-white">{selectedItem.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Technologies Badges */}
                      <div className="mb-6">
                        <span className="block text-xs uppercase tracking-widest text-text-gray font-bold mb-3 flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-brand-orange" /> {t("portfolio.techStack")}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg bg-dark-bg border border-white/5 text-[11px] font-bold text-text-gray"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Launch Project CTA */}
                      <a
                        id="modal-launch-btn"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Launching live preview for: ${selectedItem.title}`);
                        }}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-tr from-brand-orange to-[#ff7d1a] text-xs font-bold tracking-widest text-white shadow-lg hover:brightness-105 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {t("portfolio.viewLive")}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>

                    </div>

                  </div>
                </div>

              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
