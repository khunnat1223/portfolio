/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Code, Figma, Laptop } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

// Reference the external portrait image URL directly
const joneLeePortrait = "https://scontent.fpnh8-2.fna.fbcdn.net/v/t39.30808-6/468195735_122123622962514021_9155211533795172643_n.jpg?stp=dst-jpg_tt6&cstp=mx960x958&ctp=s960x958&_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeE-MMmjQTO3-Sylz4U-nJV7dRDrPAc8pU51EOs8BzylTvsi8JH5qK11Ks5fcQJnfl6SnQKl9PCg-Ixxi4Lf9YsV&_nc_ohc=PeW_xy6C6QYQ7kNvwH4HOiC&_nc_oc=AdpkhUMQX9FpHJzNZNc8gjab1Hhspkd4ShAMPdrZLnIrgccAlRedF657miBjYSExw0Y&_nc_zt=23&_nc_ht=scontent.fpnh8-2.fna&_nc_gid=GSu1umEDJpkYtjNl5zrNqg&_nc_ss=7b2a8&oh=00_Af_TmoKjvuhXN0k-PlefvLoCO3TUMszKu-SahfIEBkhegA&oe=6A464FC3";

export default function Hero() {
  const { t, language } = useTranslation();
  const titles = [t("hero.dev"), t("hero.des"), t("hero.auto")];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentTitle = titles[currentTitleIndex] || "";

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setTypedText(currentTitle.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === currentTitle) {
          // Pause at the end of typing
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        // Deleting characters
        setTypedText(currentTitle.substring(0, typedText.length - 1));
        setTypingSpeed(50);

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex, language]);

  // Reset typist when language switches to avoid out of bounds mismatch
  useEffect(() => {
    setTypedText("");
    setIsDeleting(false);
    setCurrentTitleIndex(0);
  }, [language]);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-16 bg-dark-bg flex items-center overflow-hidden"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Details (Left Column) */}
          <motion.div
            id="hero-details-column"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase mb-4 drop-shadow-[0_0_15px_rgba(0,200,117,0.25)]">
              {t("hero.welcome")}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {t("hero.intro")} <span className="text-brand-orange relative">{t("name.me")}</span>
              <br />
              <span className="text-xl sm:text-3xl lg:text-4xl font-sans font-bold text-white flex items-center gap-2 mt-4">
                <span>{t("hero.a")}</span>
                <span className="text-brand-green min-h-[1.2em] border-r-4 border-brand-orange pr-1.5 animate-pulse">
                  {typedText}
                </span>
              </span>
            </h1>

            <p className="text-sm sm:text-base text-text-gray max-w-xl leading-relaxed mb-10 sm:mb-12">
              {t("discription.me")}
            </p>

            {/* Socials & Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              
              {/* Find with Me */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-gray font-bold mb-4">
                  {t("hero.findMe")}
                </span>
                <div className="flex items-center gap-4">
                  <a
                    id="social-fb"
                    href="https://www.facebook.com/khunnat2/"
                    target="_black"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-text-gray hover:text-brand-orange hover:border-brand-orange/30 shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    id="social-ig"
                    href="https://t.me/khun_nat"
                    target="_black"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-text-gray hover:text-brand-orange hover:border-brand-orange/30 shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    aria-label="Telegram"
                  >
                    {/* <Telegram className="w-5 h-5" /> */}
                   <i className="fa-brands fa-telegram"></i>
                  </a>
                  <a
                    id="social-ln"
                    href="https://www.tiktok.com/@data_automation_nt"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-text-gray hover:text-brand-orange hover:border-brand-orange/30 shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                    aria-label="Tiktok"
                    target="_black"
                  >
                    <i className="fa-brands fa-tiktok"></i>
                  </a>
                </div>
              </div>

              {/* Best Skill On */}
              <div>
                <span className="block text-xs uppercase tracking-widest text-text-gray font-bold mb-4">
                  {t("hero.bestSkill")}
                </span>
                <div className="flex items-center gap-4">
                  <div
                    id="skill-react"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-brand-green shadow-lg hover:border-brand-green/30 transform hover:-translate-y-1 transition-all duration-300 cursor-help"
                    title="React Expert"
                  >
                    <Code className="w-5 h-5" />
                  </div>
                  <div
                    id="skill-figma"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-brand-orange shadow-lg hover:border-brand-orange/30 transform hover:-translate-y-1 transition-all duration-300 cursor-help"
                    title="Figma Designer"
                  >
                    <Figma className="w-5 h-5" />
                  </div>
                  <div
                    id="skill-fullstack"
                    className="w-14 h-14 rounded-xl bg-dark-sec border border-white/5 flex items-center justify-center text-brand-green shadow-lg hover:border-brand-green/30 transform hover:-translate-y-1 transition-all duration-300 cursor-help"
                    title="Full Stack Architecture"
                  >
                    <Laptop className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Hero Portrait (Right Column) */}
          <motion.div
            id="hero-portrait-column"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-2xl bg-dark-sec p-4 border border-white/5 shadow-2xl group overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-to-b from-dark-sec to-dark-bg shadow-inner relative">
                <img
                  src={joneLeePortrait}
                  alt="Khun Nat Portfolio Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                
                {/* Floating card indicator */}
                <div className="absolute bottom-4 left-4 right-4 bg-dark-bg/90 backdrop-blur-md p-3.5 rounded-xl shadow-xl border border-white/5 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-widest text-text-gray font-bold">STATUS</span>
                    <span className="block text-[11px] font-bold text-white">
                      {language === "kh" ? "ត្រៀមខ្លួនសម្រាប់គម្រោងថ្មីៗ" : "Available for Custom Integrations"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
