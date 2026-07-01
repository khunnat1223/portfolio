/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Clock, Calendar, ArrowUpRight, X, BookOpen, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BLOG_DATA } from "../data";
import { useTranslation } from "../context/LanguageContext";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState<any | null>(null);
  const { t, language } = useTranslation();

  const handleShare = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({ title, text: "Check out this amazing article by Khun Nat!" }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(language === "kh" ? `បានចម្លងតំណភ្ជាប់ទៅកាន់ "${title}" ទៅកាន់ Clipboard!` : `Link to "${title}" copied to clipboard!`);
    }
  };

  // Localize and enrich blog items dynamically based on selected language
  const localizedBlogs = BLOG_DATA.map((blog) => {
    let title = blog.title;
    let category = blog.category;
    let content = blog.content;
    let readTime = blog.readTime;

    if (language === "kh") {
      if (blog.id === "b1") {
        title = "ការរៀបចំរចនាសម្ព័ន្ធសមាសភាគ React ប្រកបដោយប្រសិទ្ធភាព";
        category = "ការអភិវឌ្ឍន៍";
        readTime = "អាន ៥ នាទី";
        content = "ការរចនាសមាសភាគ React ដែលអាចប្រើឡើងវិញបាន និងមានល្បឿនលឿន គឺជាគន្លឹះគ្រឹះក្នុងការបង្កើតគេហទំព័រកម្រិតធំ។ ការកំណត់ទំហំទិន្នន័យ ការគ្រប់គ្រង State ប្រកបដោយលំនឹង និងការប្រើប្រាស់ hooks ឆ្លាតវៃជួយសម្រួលល្បឿនដំណើរការបានរហូតដល់ទៅ ៥០%។";
      } else if (blog.id === "b2") {
        title = "សារៈសំខាន់នៃចន្លោះទំនេរ និងអក្សរផ្ចង់ក្នុងការរចនា UI/UX";
        category = "ការរចនាប្លង់";
        readTime = "អាន ៨ នាទី";
        content = "ចន្លោះទំនេរមិនមែនជាការខ្ជះខ្ជាយទីតាំងនោះទេ ប៉ុន្តែជាឧបករណ៍ដ៏មានឥទ្ធិពលបំផុតក្នុងការដឹកនាំខ្សែភ្នែករបស់អ្នកប្រើប្រាស់។ ការរៀបចំទំហំអក្សរ គម្លាតបន្ទាត់ និងចន្លោះរវាងប្លង់កាតនីមួយៗ ជួយបង្កើតអារម្មណ៍ស្ងប់ស្ងៀម និងមានរបៀបរៀបរយខ្ពស់។";
      } else if (blog.id === "b3") {
        title = "អនាគតនៃកម្មវិធីជំនួយ និងស្វ័យប្រវត្តិកម្មលើ Cloud";
        category = "ស្វ័យប្រវត្តិកម្ម";
        readTime = "អាន ៦ នាទី";
        content = "ការផ្លាស់ប្តូរទិន្នន័យដោយស្វ័យប្រវត្តិរវាង Cloud Services ជួយកាត់បន្ថយកំហុសរបស់មនុស្ស និងបង្កើនល្បឿនការងារ។ ការបង្កើតប្រព័ន្ធ API proxies ដែលមានសុវត្ថិភាព និងល្បឿនលឿន ធានាថាក្រុមហ៊ុនរបស់អ្នកដើរទាន់សម័យកាលបច្ចេកវិទ្យាទំនើប។";
      }
    }
    return {
      ...blog,
      title,
      category,
      content,
      readTime
    };
  });

  return (
    <section id="blog" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("blog.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("blog.title")}
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localizedBlogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              id={`blog-card-${blog.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedBlog(blog)}
              className="group p-6 rounded-2xl bg-dark-sec border border-white/5 hover:border-brand-orange/30 shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              
              {/* Media Cover Showcase */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 relative shadow-inner border border-white/5">
                <img
                  src={blog.image}
                  alt={blog.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Tag & Reading Time info */}
              <div className="flex items-center justify-between text-[11px] font-black tracking-widest text-brand-orange mb-4">
                <span className="uppercase">{blog.category}</span>
                <span className="text-text-gray font-mono flex items-center gap-1.5 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  {blog.readTime}
                </span>
              </div>

              {/* Blog Title */}
              <div>
                <h3 className="text-lg font-sans font-bold text-white group-hover:text-brand-orange leading-snug transition-colors mb-4 flex items-start justify-between gap-3">
                  <span className="line-clamp-2">{blog.title}</span>
                  <ArrowUpRight className="w-5 h-5 flex-shrink-0 text-brand-orange opacity-0 group-hover:opacity-100 transform translate-x-1 -translate-y-1 transition-all duration-300" />
                </h3>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Blog Detail Reader Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              id="blog-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBlog(null)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
            />

            {/* Modal Dialog Container */}
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-10 pointer-events-none">
              <motion.div
                id="blog-modal-dialog"
                initial={{ scale: 0.95, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 30 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-dark-sec rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-white/5 pointer-events-auto max-h-[90vh] flex flex-col relative text-white"
              >
                {/* Floating Close Button */}
                <button
                  id="blog-modal-close"
                  onClick={() => setSelectedBlog(null)}
                  className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-dark-bg text-text-gray hover:text-brand-orange hover:scale-105 border border-white/5 transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="overflow-y-auto p-6 sm:p-10 lg:p-14">
                  
                  {/* Category & Meta Stats */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-black tracking-widest text-brand-green uppercase mb-4">
                    <span>{selectedBlog.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green/30" />
                    <span className="text-text-gray flex items-center gap-1.5 font-mono">
                      <Calendar className="w-4 h-4 text-brand-orange" />
                      {selectedBlog.date}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green/30" />
                    <span className="text-text-gray flex items-center gap-1.5 font-mono">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      {selectedBlog.readTime}
                    </span>
                  </div>

                  {/* Heading Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-white leading-tight tracking-tight mb-8">
                    {selectedBlog.title}
                  </h3>

                  {/* Showcase Hero image */}
                  <div className="w-full aspect-[2/1] rounded-2xl overflow-hidden shadow-inner border border-white/5 bg-dark-bg mb-10">
                    <img
                      src={selectedBlog.image}
                      alt={selectedBlog.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Full detailed content */}
                  <div className="text-text-gray text-sm sm:text-base leading-relaxed space-y-6 mb-10 font-semibold">
                    <p>{selectedBlog.content}</p>
                    <p>
                      {language === "kh"
                        ? "នៅក្នុងស្ថាបត្យកម្មរចនាបច្ចេកវិទ្យាទំនើប យើងយល់ច្បាស់ថា របៀបរៀបចំលំហូរ និងចន្លោះលំហែទាក់ទាញភ្នែកមានឥទ្ធិពលផ្ទាល់ដល់អារម្មណ៍របស់អ្នកប្រើប្រាស់។ តាមរយៈការប្រើប្រាស់គម្លាតរចនាស្ដង់ដារ និងចលនារលូន យើងអាចបង្កើតបទពិសោធន៍ឌីជីថលដ៏ទាក់ទាញបំផុត។"
                        : "In modern design frameworks, we understand that structural alignment directly defines conversion success. By implementing scalable systems of components, prioritizing typography spacing, and keeping responsive grids tight, the visual layouts directly influence and shape standard human behavior."
                      }
                    </p>
                    <p>
                      {language === "kh"
                        ? "ក្នុងនាមជាអ្នកប្រឹក្សាយោបល់គម្រោងបច្ចេកវិទ្យា លោក ឃុន ណាត់ តែងតែយកចិត្តទុកដាក់ខ្ពស់លើការកសាងគេហទំព័រល្បឿនលឿន និងសោភ័ណភាពដើម្បីជួយអតិថិជនដោះស្រាយរាល់បញ្ហាប្រឈមធំៗប្រកបដោយទំនុកចិត្ត។"
                        : "As a technology consultant, Khun Nat focuses on building high-speed websites with premium visual aesthetics to help clients solve persistent technical challenges with peak confidence."
                      }
                    </p>
                  </div>

                  {/* Actions footer inside Modal */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/5">
                    <button
                      id="modal-share-blog"
                      onClick={(e) => handleShare(selectedBlog.title, e)}
                      className="py-4 px-6 rounded-xl bg-dark-bg text-xs font-bold tracking-widest text-brand-orange border border-white/5 hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
                    >
                      <Share2 className="w-4 h-4" />
                      {language === "kh" ? "ចែករំលែកអត្ថបទ" : "SHARE ARTICLE"}
                    </button>

                    <button
                      id="modal-close-blog"
                      onClick={() => setSelectedBlog(null)}
                      className="py-4 px-8 rounded-xl bg-gradient-to-tr from-brand-orange to-[#ff6a00] hover:brightness-105 text-xs font-bold tracking-widest text-white shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      {language === "kh" ? "អានរួចរាល់" : "FINISHED READING"}
                    </button>
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
