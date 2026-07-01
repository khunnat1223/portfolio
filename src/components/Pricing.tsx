/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Check, Clock, RotateCcw, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRICING_DATA } from "../data";
import { useTranslation } from "../context/LanguageContext";

type PricingTab = "static" | "standard" | "premium";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<PricingTab>("standard");
  const { t, language } = useTranslation();

  // Localize and enrich data dynamically based on selected language
  const activeTier = {
    ...PRICING_DATA[activeTab],
    name: activeTab === "static" ? t("pricing.p1_title") : activeTab === "standard" ? t("pricing.p2_title") : t("pricing.p3_title"),
    description: activeTab === "static" ? t("pricing.p1_desc") : activeTab === "standard" ? t("pricing.p2_desc") : t("pricing.p3_desc"),
    features: language === "kh" ? (
      activeTab === "static" ? [
        "គេហទំព័រ ១ ទំព័រ ជាមួយរចនាសម្ព័ន្ធទំនើប",
        "ការរចនាប្លង់ឆ្លើយតបឥតខ្ចោះគ្រប់ឧបករណ៍",
        "ការជួយបញ្ចូលមាតិកា និងព័ត៌មាន",
        "ការភ្ជាប់បណ្តាញសង្គមផ្លូវការ",
        "ល្បឿនដំណើរការលឿននៅលើទូរស័ព្ទ",
        "កូដស្អាតស្របតាមស្តង់ដារ SEMANTIC HTML",
        "ពណ៌ម៉ាកយីហោផ្ទាល់ខ្លួន",
        "ការកែសម្រួល ១ ដងដោយឥតគិតថ្លៃ"
      ] : activeTab === "standard" ? [
        "គេហទំព័ររហូតដល់ ៣ ទំព័រ",
        "ការរចនាប្លង់ផ្ទាល់ខ្លួនក្នុង Figma",
        "សមាសភាគអន្តរកម្ម (tabs, sliders)",
        "ចលនារលូន និងទាក់ទាញភ្នែក",
        "ការរចនាកញ្ចប់តម្លៃសេវាកម្មតាមតម្រូវការ",
        "បញ្ជីស្នាដៃដែលអាចចម្រោះបាន",
        "ការភ្ជាប់កម្មវិធីជំនួយ/Extensions ២",
        "កែសម្រួលដោយមិនកំណត់ និងបញ្ចប់ក្នុង ៥ ថ្ងៃ"
      ] : [
        "ស្ថាបត្យកម្ម Full-stack Express/React ពេញលេញ",
        "កន្លែងធ្វើការដែលបានកែសម្រួលជាច្រើនទំព័រ",
        "រូបភាពវ៉ិចទ័រច្នៃប្រឌិតផ្ទាល់ខ្លួន",
        "ប្រព័ន្ធទិន្នន័យលើ Cloud ជាប់លាប់ (Firebase/Firestore)",
        "ការកំណត់ល្បឿននិងលទ្ធផល SEO កម្រិតខ្ពស់",
        "ការជូនដំណឹងតាមអ៊ីមែលដោយស្វ័យប្រវត្តិនូវរាល់សារដែលផ្ញើមក",
        "ការភ្ជាប់កម្មវិធីជំនួយ/Extensions ៨",
        "ការកែសម្រួលមិនកំណត់ និងការគាំទ្រពេញមួយជីវិត"
      ]
    ) : PRICING_DATA[activeTab].features,
    deliveryTime: language === "kh" ? (
      activeTab === "static" ? "រយៈពេល ៣ ថ្ងៃ" : activeTab === "standard" ? "រយៈពេល ៥ ថ្ងៃ" : "រយៈពេល ៧ ថ្ងៃ"
    ) : PRICING_DATA[activeTab].deliveryTime,
    revisions: language === "kh" ? (
      activeTab === "static" ? "កែសម្រួលបាន ១ ដង" : "កែសម្រួលមិនកំណត់"
    ) : PRICING_DATA[activeTab].revisions
  };

  return (
    <section id="pricing" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout with title on left and tab-pills on right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
              {t("pricing.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
              {t("pricing.title")}
            </h2>
          </div>

          {/* Pricing Tabs */}
          <div className="p-1.5 rounded-2xl bg-dark-sec border border-white/5 shadow-inner flex gap-1 self-start lg:self-auto w-full max-w-md">
            {(["static", "standard", "premium"] as PricingTab[]).map((tab) => (
              <button
                key={tab}
                id={`pricing-tab-btn-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 text-xs font-bold tracking-wider rounded-xl uppercase transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-dark-bg text-brand-orange border border-white/5 shadow-md"
                    : "text-text-gray hover:text-brand-orange"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Layout Container */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-dark-sec border border-white/5 shadow-2xl"
            >
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-2">
                    {activeTier.name}
                  </h3>
                  <span className="text-xs text-brand-green font-bold uppercase tracking-wider">
                    {language === "kh" ? "ការធានាគុណភាពឌីជីថលល្បឿនលឿន" : "Creative Digital Delivery"}
                  </span>
                </div>

                <div className="bg-dark-bg px-6 py-4 rounded-2xl shadow-inner border border-white/5 flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl font-sans font-extrabold text-brand-green">
                    ${activeTier.price.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Sub-description */}
              <p className="text-sm sm:text-base text-text-gray leading-relaxed mb-8">
                {activeTier.description}
              </p>

              {/* Bullet features grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {activeTier.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm text-text-gray font-semibold">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Delivery stats & Button CTA */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-text-gray">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4.5 h-4.5 text-brand-orange" />
                    <span>{activeTier.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RotateCcw className="w-4.5 h-4.5 text-brand-orange" />
                    <span>{activeTier.revisions}</span>
                  </div>
                </div>

                <button
                  id={`order-now-${activeTab}`}
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-8 py-4 rounded-xl bg-dark-bg border border-brand-orange/20 text-xs font-bold tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all flex items-center justify-center gap-2.5 group cursor-pointer shadow-lg"
                >
                  {t("pricing.order")}
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
