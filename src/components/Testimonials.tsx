/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA } from "../data";
import { useTranslation } from "../context/LanguageContext";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const { t, language } = useTranslation();

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  // Localize client comments dynamically for peak craft
  let testimonialTitle = activeTestimonial.title;
  let testimonialComment = activeTestimonial.comment;

  if (language === "kh") {
    if (activeTestimonial.id === "t1") {
      testimonialTitle = "ការអភិវឌ្ឍន៍កម្មវិធីស្វ័យប្រវត្តិកម្ម";
      testimonialComment = "ឃុន ណាត គឺជាអ្នកជំនាញពិតប្រាកដលើផ្នែកស្វ័យប្រវត្តិកម្ម និងការអភិវឌ្ឍប្រព័ន្ធ React។ ប្រតិបត្តិការការងារ និងលំហូរទិន្នន័យរបស់យើងបានកើនឡើងល្បឿន និងមានភាពងាយស្រួលជាងមុនដល់ទៅ ៤០% បន្ទាប់ពីការដាក់ឱ្យប្រើប្រាស់ផ្ទាំងគ្រប់គ្រងថ្មីដែលគាត់បានបង្កើត។";
    } else if (activeTestimonial.id === "t2") {
      testimonialTitle = "ការរៀបចំរចនាសម្ព័ន្ធម៉ាកយីហោឡើងវិញ";
      testimonialComment = "ឃុន ណាត បានជួយផ្លាស់ប្តូរ និងរៀបចំរចនាសម្ព័ន្ធប្រព័ន្ធគេហទំព័ររបស់យើងឡើងវិញប្រកបដោយសោភ័ណភាពខ្ពស់។ ចាប់ពីការជ្រើសរើសពណ៌ រហូតដល់ចលនារលូន និងល្បឿនលឿន។ ពួកយើងទទួលបានការសរសើរប្រចាំថ្ងៃពីដៃគូសហការ និងអតិថិជនរបស់យើង! គម្រោងនេះធ្វើបានល្អណាស់!";
    } else if (activeTestimonial.id === "t3") {
      testimonialTitle = "ការបង្កើតប្រព័ន្ធ API & Integration ឆ្លាតវៃ";
      testimonialComment = "សមត្ថភាពផ្នែកបច្ចេកវិទ្យាដ៏ឆ្នើមគួបផ្សំនឹងការយល់ដឹងពីសោភ័ណភាពរចនាច្បាស់លាស់។ គាត់បានយកទិន្នន័យស្មុគស្មាញរបស់យើងមកបំប្លែងទៅជាផ្ទាំងបង្ហាញដ៏សាមញ្ញ ស្រស់ស្អាត និងមានប្រសិទ្ធភាពបំផុត។ ប្រព័ន្ធដំណើរការបានលឿនជាងមុនគួរឱ្យកត់សម្គាល់។";
    }
  }

  return (
    <section id="clients" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slider Navigation buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="text-left">
            <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
              {t("testimonials.subtitle")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
              {t("testimonials.title")}
            </h2>
          </div>
          
          {/* Previous / Next Actions */}
          <div className="flex items-center gap-4">
            <button
              id="testimonial-prev-btn"
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-dark-sec border border-white/5 text-brand-orange hover:bg-brand-orange hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              id="testimonial-next-btn"
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-dark-sec border border-white/5 text-brand-orange hover:bg-brand-orange hover:text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Active Slide Container */}
        <div className="min-h-[420px] relative overflow-hidden flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "tween", duration: 0.35 }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
            >
              
              {/* Left Column: Client Profile Card */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl flex flex-col sm:flex-row lg:flex-col items-center gap-6 sm:gap-8 lg:gap-6 h-full text-center sm:text-left lg:text-center justify-center">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shadow-inner border border-white/5 flex-shrink-0">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.clientName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[11px] font-black tracking-[0.2em] text-brand-orange uppercase block mb-1">
                      {activeTestimonial.company}
                    </span>
                    <h3 className="text-xl font-sans font-bold text-white leading-tight mb-1">
                      {activeTestimonial.clientName}
                    </h3>
                    <p className="text-xs text-text-gray font-semibold uppercase tracking-wider">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Quote & Testimonial Details */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl h-full flex flex-col justify-between relative">
                  
                  {/* Watermark Quote Icon */}
                  <div className="absolute top-8 right-8 text-white/5 pointer-events-none hidden sm:block">
                    <Quote className="w-24 h-24 stroke-[1]" />
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-5">
                      <div>
                        <h4 className="text-lg sm:text-xl font-sans font-bold text-white">
                          {testimonialTitle}
                        </h4>
                        <span className="text-xs text-text-gray font-semibold block mt-1">
                          {activeTestimonial.date}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1 bg-dark-bg border border-white/5 px-3 py-1.5 rounded-lg shadow-sm self-start sm:self-auto">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < activeTestimonial.rating
                                ? "fill-brand-orange text-brand-orange"
                                : "text-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-text-gray leading-relaxed italic pr-2">
                      "{testimonialComment}"
                    </p>
                  </div>

                  <div className="mt-8">
                    {/* Tiny decorative bar */}
                    <div className="w-12 h-1 bg-brand-orange rounded-full" />
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel indicator dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              id={`testimonial-dot-${index}`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "w-8 bg-brand-orange" : "w-2.5 bg-white/15 hover:bg-brand-orange/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
