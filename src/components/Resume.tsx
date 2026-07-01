/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Briefcase, Star, Settings, Award, Layers } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "../data";
import { TimelineItem } from "../types";
import { useTranslation } from "../context/LanguageContext";

type TabType = "education" | "skills" | "experience" | "interview";

export default function Resume() {
  const [activeTab, setActiveTab] = useState<TabType>("education");
  const { t, language } = useTranslation();

  const tabs = [
    { id: "education" as TabType, label: t("resume.tab_education") },
    { id: "skills" as TabType, label: t("resume.tab_skills") },
    { id: "experience" as TabType, label: t("resume.tab_experience") },
    { id: "interview" as TabType, label: t("resume.partner_title") },
  ];

  // Helper component to render timeline cards
  const TimelineCard = ({ item }: { item: TimelineItem }) => {
    // Localize simple static descriptions for peak craft
    let title = item.title;
    let desc = item.description;
    let subtitle = item.subtitle;

    if (language === "kh") {
      if (item.id === "e1") {
        title = "ជំនាញព័តមានវិទ្យា";
        subtitle = "សាកលវិទ្យាល័យជាតិបាត់ដំបង (២០២០ - ២០២៤)";
        desc = "ការបណ្តុះបណ្តាលស៊ីជម្រៅលើជំនាញព័តមានវិទ្យា ស្ថាបត្យកម្មគេហទំព័រ សមាសភាគអន្តរកម្ម និងរចនាសម្ព័ន្ធវិទ្យាសាស្ត្រកុំព្យូទ័រជាមូលដ្ឋាន។";
      } else if (item.id === "e2") {
        title = "ជំនាញកុំព្យូទ័រសម្រាប់បំពេញការងារ";
        subtitle = "សាលាម៉ាស្ទ័រអាយធី (២០២១ - ២០២២)";
        desc = "ការសិក្សាស្វែងយល់អំពីកម្មវិធីកុំព្យូទ័រការរិយាល័យ។";
      } else if (item.id === "e3") {
        title = "ថ្នាក់បំប៉នឯកទេសផ្នែក UX/UI";
        subtitle = "LinkIn Website (២០២២ - ២០២៣)";
        desc = "សិក្សាអំពីជំនាញ UX/ UI Design។";
      } else if (item.id === "x1") {
        title = "អភិវឌ្ឍគេហទំព័រ";
        subtitle = "បង្កើតគេហទំព័រផ្សព្វផ្សាយ (២០២៤ - ២០២៥)";
        desc = "គេហទំព័រផ្សព្វផ្សាយការហាងលក់ទំនិញ។";
      } else if (item.id === "x2") {
        title = "អ្នកអភិវឌ្ឍន៍ UI/UX";
        subtitle = "Freelancer (២០២៤ - ២០២៥)";
        desc = "ទទួលរចនា UX/ UI។";
      } else if (item.id === "x3") {
        title = "E-Commerce Website";
        subtitle = "Freelancer (២០២៥ - ២០២៦)";
        desc = "បង្កើត Website លក់ទំនិញអនឡាញ";
      }
    }

    return (
      <div
        id={`timeline-card-${item.id}`}
        className="relative pl-8 sm:pl-10 pb-12 group last:pb-2"
      >
        {/* Timeline bullet / connector */}
        <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-dark-bg border-4 border-white/10 group-hover:border-brand-orange transition-all duration-300 shadow-md z-10 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-brand-orange transition-colors" />
        </div>

        {/* Connection vertical line */}
        <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-white/10 group-last:hidden" />

        {/* Content card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-sec border border-white/5 hover:border-brand-orange/30 shadow-2xl transition-all duration-300 relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <h4 className="text-lg font-sans font-bold text-white group-hover:text-brand-orange transition-colors">
                {title}
              </h4>
              <span className="text-xs text-text-gray font-semibold tracking-wider uppercase block mt-1">
                {subtitle}
              </span>
            </div>
            
            <div className="flex flex-col sm:items-end gap-1.5">
              <span className="px-3 py-1 rounded-lg bg-dark-bg border border-white/5 text-[10px] font-black text-brand-orange tracking-widest uppercase shadow-inner">
                {item.date}
              </span>
              <div className="flex items-center gap-1 text-brand-orange bg-brand-orange/10 px-2 py-0.5 rounded text-xs font-mono font-bold self-start sm:self-auto">
                <Star className="w-3 h-3 fill-brand-orange" />
                {item.rating}
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-text-gray leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="resume" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("resume.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("resume.title")}
          </h2>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-16">
          <div className="w-full max-w-4xl p-1.5 rounded-2xl bg-dark-sec border border-white/5 shadow-inner grid grid-cols-2 md:grid-cols-4 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={`resume-tab-btn-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-3 text-xs sm:text-sm font-bold tracking-wider rounded-xl transition-all relative cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-dark-bg text-brand-orange border border-white/5 shadow-md"
                    : "text-text-gray hover:text-brand-orange"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents with Framer Motion Layout Animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            {/* EDUCATION TAB */}
            {activeTab === "education" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3.5 mb-8 pl-2">
                    <GraduationCap className="w-8 h-8 text-brand-orange stroke-[1.5]" />
                    <h3 className="text-2xl font-sans font-extrabold text-white">
                      {t("resume.education_title")}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {EDUCATION_DATA.map((item) => (
                      <div key={item.id}>
                        <TimelineCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-8 pl-2">
                    <Briefcase className="w-8 h-8 text-brand-orange stroke-[1.5]" />
                    <h3 className="text-2xl font-sans font-extrabold text-white">
                      {t("resume.job_title")}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {EXPERIENCE_DATA.map((item) => (
                      <div key={item.id}>
                        <TimelineCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* PROFESSIONAL SKILLS TAB */}
            {activeTab === "skills" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Design Skills */}
                <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <Award className="w-6 h-6 text-brand-orange" />
                    <h3 className="text-xl font-sans font-extrabold text-white">
                      {t("resume.design_cap")}
                    </h3>
                  </div>
                  
                  <div className="space-y-8">
                    {[
                      { name: "Figma Prototyping", percentage: 90 },
                      { name: "UI/UX & Design Systems", percentage: 95 },
                      { name: "Adobe Photoshop & Illustrator", percentage: 80 },
                      { name: "Responsive Layout Architecture", percentage: 85 },
                    ].map((skill, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-brand-orange">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-dark-bg border border-white/5 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Development Skills */}
                <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-8">
                    <Settings className="w-6 h-6 text-brand-orange" />
                    <h3 className="text-xl font-sans font-extrabold text-white">
                      {t("resume.tech_cap")}
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {[
                      { name: "React / TypeScript", percentage: 95 },
                      { name: "Tailwind CSS Layouts", percentage: 98 },
                      { name: "Backend APIs & Node.js", percentage: 85 },
                      { name: "Framer Motion Animations", percentage: 90 },
                    ].map((skill, idx) => (
                      <div key={idx} className="relative">
                        <div className="flex justify-between items-center mb-2.5">
                          <span className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-brand-orange">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-dark-bg border border-white/5 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className="h-full bg-gradient-to-r from-brand-orange to-brand-green rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === "experience" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="flex items-center gap-3.5 mb-8 pl-2">
                    <Briefcase className="w-8 h-8 text-brand-orange stroke-[1.5]" />
                    <h3 className="text-2xl font-sans font-extrabold text-white">
                      {t("resume.job_title")}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {EXPERIENCE_DATA.map((item) => (
                      <div key={item.id}>
                        <TimelineCard item={item} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="p-8 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl">
                    <h3 className="text-xl font-sans font-bold text-white mb-4">
                      {language === "kh" ? "វិធីសាស្រ្តការងាររបស់ខ្ញុំ" : "My Professional Approach"}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed mb-6">
                      {language === "kh" 
                        ? "ខ្ញុំផ្តល់តុល្យភាពរវាងភាពស្រស់ស្អាតនៃការរចនា និងភាពត្រឹមត្រូវនៃលំហូរការងារ។ រាល់កូដដែលខ្ញុំសរសេរគឺមានលក្ខណៈច្បាស់លាស់ ល្បឿនលឿន និងឆ្លើយតបបានល្អឥតខ្ចោះគ្រប់ឧបករណ៍។"
                        : "I balance visual excellence with logical soundness. Every codebase I craft is fully typed with TypeScript, tested for high performance, and streamlined using minimal, clean structures."
                      }
                    </p>
                    <ul className="space-y-3.5">
                      {[
                        language === "kh" ? "ប្រព័ន្ធរចនាសមាសភាគរួចជាស្រេចសម្រាប់ការផលិត" : "Production ready component design Systems",
                        language === "kh" ? "API និងចំណុចប្រទាក់ដែលបានកំណត់ប្រភេទច្បាស់លាស់" : "Fully typed endpoints and standard interfaces",
                        language === "kh" ? "ការបង្រួមនិងបញ្ជូនឯកសារប្រកបដោយប្រសិទ្ធភាពខ្ពស់" : "Highly efficient asset compression & delivery",
                        language === "kh" ? "ការរចនាឆ្លើយតបឥតខ្ចោះគ្រប់ទំហំអេក្រង់" : "Pixel-perfect responsive design alignments",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm text-text-gray font-semibold">
                          <div className="w-2 h-2 rounded-full bg-brand-green" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* INTERVIEW TAB */}
            {activeTab === "interview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Layers className="w-6 h-6 text-brand-orange" />
                    <h3 className="text-2xl font-sans font-extrabold text-white">
                      {t("resume.partner_title")}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-text-gray leading-relaxed">
                    {language === "kh"
                      ? "នៅពេលយើងសហការគ្នា ខ្ញុំនាំមកនូវផ្នត់គំនិតសកម្មផ្តោតលើការដោះស្រាយបញ្ហា ការធ្វើបច្ចុប្បន្នភាពច្បាស់លាស់ និងការវាយតម្លៃលទ្ធផលការងារជាក់ស្តែង៖"
                      : "When we collaborate, I bring an active mindset focusing on problem resolution, clear updates, and production deployment benchmarks. Our path covers:"
                    }
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { step: "01", title: t("resume.step1_title"), text: t("resume.step1_desc") },
                      { step: "02", title: t("resume.step2_title"), text: t("resume.step2_desc") },
                      { step: "03", title: t("resume.step3_title"), text: t("resume.step3_desc") }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 p-5 rounded-xl bg-dark-bg border border-white/5 shadow-inner">
                        <span className="text-xl font-bold font-mono text-brand-orange">{item.step}</span>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                          <p className="text-xs text-text-gray leading-relaxed">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 text-center shadow-2xl">
                    <h3 className="text-2xl font-sans font-bold text-white mb-4">
                      {language === "kh" ? "ជជែកពិភាក្សាគ្នាពីគម្រោង" : "Let’s Hop On A Call"}
                    </h3>
                    <p className="text-sm text-text-gray leading-relaxed mb-8">
                      {language === "kh"
                        ? "ខ្ញុំតែងតែត្រៀមខ្លួនជាស្រេចក្នុងការជជែកអំពីគម្រោងការងារ ស្ថាបត្យកម្មប្រព័ន្ធ ឬប្រព័ន្ធរចនាទាក់ទាញភ្នែកផ្សេងៗ។ ជ្រើសរើសម៉ោងសមស្របណាមួយដើម្បីពិភាក្សា។"
                        : "I'm always ready to chat about engineering frameworks, system designs, or branding visual systems. Pick a time and let's build something beautiful."
                      }
                    </p>
                    <button
                      id="interview-call-cta"
                      onClick={() => {
                        const contactSec = document.getElementById("contact");
                        if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="px-8 py-4 rounded-xl bg-dark-bg border border-brand-orange/20 text-xs font-bold tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all cursor-pointer shadow-lg"
                    >
                      {t("resume.coffee_chat")}
                    </button>
                  </div>
                </div>

              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
