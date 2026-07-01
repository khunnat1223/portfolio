/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, Mail, Facebook, Instagram, Linkedin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

// Reference the generated handshake image
import handshakeImg from "@/src/assets/images/handshake_1782542289916.jpg";

export default function Contact() {
  const { t, language } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = language === "kh" ? "សូមបញ្ចូលឈ្មោះរបស់អ្នក" : "Your name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = language === "kh" ? "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែល" : "Your email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = language === "kh" ? "សូមបញ្ចូលអ៊ីមែលឱ្យបានត្រឹមត្រូវ" : "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = language === "kh" ? "សូមបញ្ចូលប្រធានបទ" : "Please enter a subject";
    }
    
    if (!formData.message.trim()) {
      errors.message = language === "kh" ? "សូមសរសេរសារពិពណ៌នារបស់អ្នក" : "Please write a message";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };
const BOT_TOKEN = "8843916248:AAERw_LDdHp7hthGZWo7xeV4751aQu-r-7g";
const CHAT_ID = "1682341367";

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  const text = `
📩 New Contact Form

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
📌 Subject: ${formData.subject}

💬 Message:
${formData.message}
`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    const result = await response.json();

    if (result.ok) {
      setSubmitSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      alert("Telegram Error: " + result.description);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to send message.");
  } finally {
    setIsSubmitting(false);
  }
};

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setIsSubmitting(true);

  //   // Simulate standard asynchronous API delivery
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setSubmitSuccess(true);
  //     setFormData({
  //       name: "",
  //       phone: "",
  //       email: "",
  //       subject: "",
  //       message: "",
  //     });
  //   }, 1500);
  // };

  // Direct labels
  const labelName = language === "kh" ? "ឈ្មោះរបស់អ្នក" : "Your Name";
  const labelPhone = language === "kh" ? "លេខទូរស័ព្ទ (Telegram)" : "Telegram";
  const labelEmail = language === "kh" ? "អាសយដ្ឋានអ៊ីមែល" : "Email";
  const labelSubject = language === "kh" ? "ប្រធានបទ" : "Subject";
  const labelMessage = language === "kh" ? "សាររបស់អ្នក" : "Your Message";

  const placeholderName = language === "kh" ? "ឧ. ម៉ាថា ស្មីត" : "e.g. Martha Smithes";
  const placeholderPhone = language === "kh" ? "ឧ. +៨៥៥ ១២ ៣៤៥ ៦៧៨" : "e.g. +855 12 345 678";
  const placeholderEmail = language === "kh" ? "ឧ. martha@example.com" : "e.g. martha@example.com";
  const placeholderSubject = language === "kh" ? "ឧ. ការសាកសួរព័ត៌មានអភិវឌ្ឍន៍គេហទំព័រ" : "e.g. Inquiries on Web App Development";
  const placeholderMessage = language === "kh" ? "សរសេរព័ត៌មានលម្អិតពីគម្រោងរបស់អ្នកនៅទីនេះ..." : "Write detailed specifications or project outlines here...";

  return (
    <section id="contact" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("contact.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Details */}
          <div className="lg:col-span-5 w-full">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl flex flex-col justify-between h-full">
              
              {/* Shake Hand banner image */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-8 relative shadow-inner border border-white/5">
                <img
                  src={handshakeImg}
                  alt="Contact Shake Hand"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mb-2 leading-tight">
                  {language === "kh" ? "ឃុន ណាត់" : "Khun Nat"}
                </h3>
                <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block mb-5">
                  {language === "kh" ? "កច្នៃប្រឌិត និងស្ថាបត្យករ Full-Stack" : "Creative Director & Full Stack Architect"}
                </span>
                <p className="text-sm text-text-gray leading-relaxed mb-8">
                  {language === "kh"
                    ? "ខ្ញុំត្រៀមខ្លួនរួចជាស្រេចសម្រាប់ការងារកិច្ចសន្យាឯករាជ្យ (Freelance) ការផ្តល់ប្រឹក្សារយៈពេលវែងពីចម្ងាយ ឬកិច្ចសហការអភិវឌ្ឍន៍គម្រោងយុទ្ធសាស្ត្រផ្សេងៗ។ តោះចាប់ផ្តើមការពិភាក្សាឥឡូវនេះ។"
                    : "I am available for freelance contracts, full-time remote consulting opportunities, or strategic partnership project developments. Let's start the dialogue."
                  }
                </p>

                {/* Contact Coordinates */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 text-sm sm:text-base">
                    <div className="w-12 h-12 rounded-xl bg-dark-bg border border-white/5 flex items-center justify-center text-brand-orange shadow-inner flex-shrink-0">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-text-gray font-bold mb-0.5">
                        {language === "kh" ? "ទូរស័ព្ទ" : "Phone"}
                      </span>
                      <a href="mailto:khunnat1223@gmail.com" className="font-bold text-white hover:text-brand-orange transition-colors">
                        +855 876 723 82
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm sm:text-base">
                    <div className="w-12 h-12 rounded-xl bg-dark-bg border border-white/5 flex items-center justify-center text-brand-orange shadow-inner flex-shrink-0">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-widest text-text-gray font-bold mb-0.5">
                        {language === "kh" ? "អ៊ីមែល" : "Email"}
                      </span>
                      <a href="mailto:khunnat1223@gmail.com" className="font-bold text-white hover:text-brand-orange transition-colors break-all">
                        khunnat1223@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Socials Linkups */}
              <div className="border-t border-white/5 pt-6">
                <span className="block text-xs uppercase tracking-widest text-text-gray font-bold mb-4">
                  {language === "kh" ? "ស្វែងរកគណនីរបស់ខ្ញុំ" : "FIND WITH ME"}
                </span>
                <div className="flex items-center gap-3">
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

            </div>
          </div>

          {/* Right Column: Dynamic Form Module */}
          <div className="lg:col-span-7 w-full">
            <div className="p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 shadow-2xl">
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name & Phone side-by-side on tablet/desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-text-gray uppercase tracking-widest pl-1">
                      {labelName}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl bg-dark-bg text-sm text-white placeholder-text-gray/40 border-2 focus:bg-dark-sec focus:border-brand-orange/30 shadow-inner focus:outline-none transition-all ${
                        formErrors.name ? "border-rose-500/50" : "border-white/5"
                      }`}
                      placeholder={placeholderName}
                    />
                    {formErrors.name && (
                      <span className="text-xs font-semibold text-rose-500 flex items-center gap-1 pl-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {formErrors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-text-gray uppercase tracking-widest pl-1">
                      {labelPhone}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 rounded-xl bg-dark-bg text-sm text-white placeholder-text-gray/40 border-2 border-white/5 focus:bg-dark-sec focus:border-brand-orange/30 shadow-inner focus:outline-none transition-all"
                      placeholder={placeholderPhone}
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-email" className="text-xs font-bold text-text-gray uppercase tracking-widest pl-1">
                    {labelEmail}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-xl bg-dark-bg text-sm text-white placeholder-text-gray/40 border-2 focus:bg-dark-sec focus:border-brand-orange/30 shadow-inner focus:outline-none transition-all ${
                      formErrors.email ? "border-rose-500/50" : "border-white/5"
                    }`}
                    placeholder={placeholderEmail}
                  />
                  {formErrors.email && (
                    <span className="text-xs font-semibold text-rose-500 flex items-center gap-1 pl-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.email}
                    </span>
                  )}
                </div>

                {/* Subject field */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-subject" className="text-xs font-bold text-text-gray uppercase tracking-widest pl-1">
                    {labelSubject}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-xl bg-dark-bg text-sm text-white placeholder-text-gray/40 border-2 focus:bg-dark-sec focus:border-brand-orange/30 shadow-inner focus:outline-none transition-all ${
                      formErrors.subject ? "border-rose-500/50" : "border-white/5"
                    }`}
                    placeholder={placeholderSubject}
                  />
                  {formErrors.subject && (
                    <span className="text-xs font-semibold text-rose-500 flex items-center gap-1 pl-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.subject}
                    </span>
                  )}
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="contact-message" className="text-xs font-bold text-text-gray uppercase tracking-widest pl-1">
                    {labelMessage}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full p-4 rounded-xl bg-dark-bg text-sm text-white placeholder-text-gray/40 border-2 focus:bg-dark-sec focus:border-brand-orange/30 shadow-inner focus:outline-none transition-all ${
                      formErrors.message ? "border-rose-500/50" : "border-white/5"
                    }`}
                    placeholder={placeholderMessage}
                  />
                  {formErrors.message && (
                    <span className="text-xs font-semibold text-rose-500 flex items-center gap-1 pl-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {formErrors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-dark-bg border border-brand-orange/20 text-xs font-bold tracking-widest text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all flex items-center justify-center gap-2.5 group cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>{language === "kh" ? "កំពុងផ្ញើសារ..." : "SENDING MESSAGE..."}</span>
                  ) : (
                    <>
                      <span>{language === "kh" ? "ផ្ញើសារចេញ" : "SEND MESSAGE"}</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>

      {/* Success Dialog Popup alert */}
      <AnimatePresence>
        {submitSuccess && (
          <>
            {/* Backdrop */}
            <motion.div
              id="success-alert-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSubmitSuccess(false)}
              className="fixed inset-0 bg-black/90 z-50 backdrop-blur-md"
            />

            {/* Alert Panel */}
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                id="success-alert-panel"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-dark-sec p-8 sm:p-10 rounded-2xl max-w-md w-full text-center border border-white/5 shadow-2xl pointer-events-auto relative text-white"
              >
                <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <h3 className="text-xl font-sans font-extrabold text-white mb-3">
                  {language === "kh" ? "ផ្ញើសារបានជោគជ័យ!" : "Message Transmitted Successfully!"}
                </h3>
                
                <p className="text-sm text-text-gray leading-relaxed mb-8">
                  {language === "kh"
                    ? "សូមអរគុណសម្រាប់ការទំនាក់ទំនង។ ឃុន ណាត ទទួលបានសាររបស់លោកអ្នកហើយ ហើយនឹងឆ្លើយតបទៅលោកអ្នកវិញក្នុងរយៈពេល ២៤ ម៉ោង។"
                    : "Thank you for reaching out. Khun Nat has received your communication and will follow up with you directly within the next 24 business hours."
                  }
                </p>

                <button
                  id="success-alert-close"
                  onClick={() => setSubmitSuccess(false)}
                  className="w-full py-4 px-6 rounded-xl bg-gradient-to-tr from-brand-orange to-[#ff6a00] text-xs font-bold tracking-widest text-white shadow-lg hover:brightness-105 transition-all cursor-pointer"
                >
                  {language === "kh" ? "យល់ព្រម" : "DISMISS"}
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
