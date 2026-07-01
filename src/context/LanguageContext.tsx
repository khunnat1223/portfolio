import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "kh";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav / Header
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.portfolio": "Portfolio",
    "nav.resume": "Resume",
    "nav.clients": "Clients",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.contact": "Contact",
    "nav.hire": "Hire Me",

    // Hero
    "hero.welcome": "WELCOME TO MY WORLD",
    "hero.intro": "Hi, I’m",
    "hero.a": "a ",
    "hero.findMe": "FIND ME ON",
    "hero.bestSkill": "BEST SKILL ON",
    "hero.dev": "Developer.",
    "hero.des": "Designer.",
    "hero.strat": "Strategist.",
    "hero.auto": "DATA AUTOMATION Specialist.",
    "discription.me": "I construct high-performance digital architectures with a pristine attention to UI details, database optimizations, and fluid animations. I use automation to streamline operations and build tailored customer portals.",
    "name.me":"Khun Nat",
    // Services
    "services.subtitle": "FEATURES",
    "services.title": "What I Do",
    "services.readMore": "READ MORE",
    "services.dev_title": "App Development",
    "services.dev_desc": "Building high-performance, responsive full-stack web applications and robust custom digital solutions.",
    "services.strat_title": "Business Strategy",
    "services.strat_desc": "Formulating tailored digital automation strategies to optimize processes, scale outreach, and boost ROI.",
    "services.seo_title": "SEO Optimizations",
    "services.seo_desc": "Ranking high on search engines to ensure your services and brand attract organic premium traffic.",
    "services.ux_title": "UX/UI Design",
    "services.ux_desc": "Crafting intuitive and immersive pixel-perfect user journeys with beautiful aesthetic design tokens.",
    "services.data_title": "Data Automation",
    "services.data_desc": "Automating business operations, workflows, and database processes with custom high-speed automation scripts.",
    "services.cloud_title": "Cloud Architectures",
    "services.cloud_desc": "Designing high-availability cloud infrastructure utilizing optimal microservices and serverless architectures.",

    // Portfolio
    "portfolio.subtitle": "VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK",
    "portfolio.title": "My Portfolio",
    "portfolio.like": "LIKE PROJECT",
    "portfolio.liked": "PROJECT LIKED",
    "portfolio.viewLive": "VIEW PROJECT LIVE",
    "portfolio.techStack": "Tech Stack",
    "portfolio.client": "Client",
    "portfolio.date": "Date",
    "portfolio.cat_dev": "Development",
    "portfolio.cat_design": "Design",
    "portfolio.cat_auto": "Automation",
    "portfolio.proj1_title": "Next-Gen Data Automation",
    "portfolio.proj1_desc": "A powerful Excel VBA and Microsoft Access solution that automates data processing, streamlines reporting, and centralizes business operations with high accuracy and efficiency.",
    "portfolio.proj2_title": "UX/UI Deisng-Creative Portfolio Layout",
    "portfolio.proj2_desc": "A custom web application highlighting modern interactions, tailored aesthetics, and optimal responsive designs.",
    "portfolio.proj3_title": "E-commerce website",
    "portfolio.proj3_desc": "Build E-commerce website. (Full Project)",

    // Resume
    "resume.subtitle": "7+ YEARS OF EXPERIENCE",
    "resume.title": "My Resume",
    "resume.tab_education": "Education",
    "resume.tab_skills": "Professional Skills",
    "resume.tab_experience": "Experience",
    "resume.education_title": "Education Quality",
    "resume.job_title": "Job Experience",
    "resume.design_cap": "Design Capabilities",
    "resume.tech_cap": "Technical Capabilities",
    "resume.partner_title": "Partner Readiness",
    "resume.coffee_chat": "SCHEDULE COFFEE CHAT",
    "resume.step1_title": "Understand Scope First",
    "resume.step1_desc": "We translate requirements into clear milestones with zero guesswork on timelines or tech choices.",
    "resume.step2_title": "Iterate & Prototype Daily",
    "resume.step2_desc": "Continuous micro-deployments provide feedback loops, ensuring aesthetics align perfectly with expectations.",
    "resume.step3_title": "Testing & Deployment",
    "resume.step3_desc": "We test code loads, screen resolutions, and deploy natively onto high speed global nodes.",

    // Clients
    "clients.subtitle": "POPULAR CLIENTS",
    "clients.title": "Partners & Clients",

    // Pricing
    "pricing.subtitle": "PRICING",
    "pricing.title": "My Pricing Plans",
    "pricing.order": "ORDER NOW",
    "pricing.revisions": "Revisions",
    "pricing.delivery": "Delivery Time",
    "pricing.p1_title": "Static Page Design",
    "pricing.p1_desc": "Ideal for startups needing a high-fidelity single page layout with custom aesthetic touches.",
    "pricing.p2_title": "Standard Full-Stack",
    "pricing.p2_desc": "A fully responsive dynamic web application connected to server api and fast persistent database.",
    "pricing.p3_title": "Enterprise Automation",
    "pricing.p3_desc": "Custom workflows, cloud databases, cron automation, security audits, and dedicated maintenance.",

    // Testimonials
    "testimonials.subtitle": "WHAT CLIENTS SAY",
    "testimonials.title": "Testimonials",

    // Blog
    "blog.subtitle": "VISIT MY BLOG AND KEEP YOUR FEEDBACK",
    "blog.title": "My Blog",
    "blog.read_time": "read",
    "blog.share": "SHARE ARTICLE",
    "blog.finished": "FINISHED READING",

    // Contact
    "contact.subtitle": "CONTACT",
    "contact.title": "Contact With Me",
    "contact.director": "Creative Director & Full Stack Architect",
    "contact.label_name": "YOUR NAME",
    "contact.label_phone": "PHONE NUMBER",
    "contact.label_email": "EMAIL",
    "contact.label_subject": "SUBJECT",
    "contact.label_message": "YOUR MESSAGE",
    "contact.btn_submit": "SEND MESSAGE",
    "contact.btn_sending": "SENDING MESSAGE...",
    "contact.success_title": "Message Sent!",
    "contact.success_desc": "Thank you for reaching out. Khun Nat has received your communication and will follow up with you directly within the next 24 business hours.",
    "contact.dismiss": "DISMISS"
  },
  kh: {
    // Nav / Header
    "nav.home": "ទំព័រដើម",
    "nav.features": "មុខងារ",
    "nav.portfolio": "ស្នាដៃ",
    "nav.resume": "ប្រវត្តិរូប",
    "nav.clients": "អតិថិជន",
    "nav.pricing": "តម្លៃ",
    "nav.blog": "ប្លុក",
    "nav.contact": "ទំនាក់ទំនង",
    "nav.hire": "ជួលខ្ញុំ",

    // Hero
    "hero.welcome": "សូមស្វាគមន៍មកកាន់ពិភពរបស់ខ្ញុំ",
    "hero.intro": "សួស្តី ខ្ញុំគឺ",
    "hero.a": "ជា ",
    "hero.findMe": "ស្វែងរកខ្ញុំនៅលើ",
    "hero.bestSkill": "ជំនាញល្អបំផុតលើ",
    "hero.dev": "អ្នកអភិវឌ្ឍន៍កម្មវិធី។",
    "hero.des": "អ្នករចនា។",
    "hero.strat": "អ្នករៀបចំយុទ្ធសាស្ត្រ។",
    "hero.auto": "អ្នកជំនាញស្វ័យប្រវត្តិកម្មទិន្នន័យ។",
    "discription.me": "ខ្ញុំសាងសង់ស្ថាបត្យកម្មឌីជីថលដែលមានដំណើរការខ្ពស់ជាមួយនឹងការយកចិត្តទុកដាក់យ៉ាងច្បាស់លាស់ចំពោះព័ត៌មានលម្អិតនៃចំណុចប្រទាក់អ្នកប្រើប្រាស់ ការបង្កើនប្រសិទ្ធភាពមូលដ្ឋានទិន្នន័យ និងចលនារលូន។ ខ្ញុំប្រើស្វ័យប្រវត្តិកម្មដើម្បីធ្វើឱ្យប្រតិបត្តិការមានភាពរលូន និងបង្កើតវិបផតថលអតិថិជនដែលសមស្រប។",
    "name.me":"ឃុន​ ណាត់",
    // Services
    "services.subtitle": "សេវាកម្ម",
    "services.title": "អ្វីដែលខ្ញុំធ្វើ",
    "services.readMore": "អានបន្ថែម",
    "services.dev_title": "ការអភិវឌ្ឍកម្មវិធី",
    "services.dev_desc": "ការបង្កើតកម្មវិធីគេហទំព័រ Full-stack ប្រកបដោយប្រសិទ្ធភាពខ្ពស់ និងដំណោះស្រាយឌីជីថលតាមតម្រូវការ។",
    "services.strat_title": "យុទ្ធសាស្ត្រអាជីវកម្ម",
    "services.strat_desc": "ការរៀបចំយុទ្ធសាស្ត្រស្វ័យប្រវត្តិកម្មឌីជីថល ដើម្បីបង្កើនប្រសិទ្ធភាពការងារ និងទទួលបានអត្ថប្រយោជន៍ខ្ពស់។",
    "services.seo_title": "ការបង្កើនចំណាត់ថ្នាក់ស្វែងរក (SEO)",
    "services.seo_desc": "ការធ្វើឱ្យគេហទំព័រមានចំណាត់ថ្នាក់ខ្ពស់នៅលើម៉ាស៊ីនស្វែងរក ដើម្បីទាក់ទាញអតិថិជនសក្តានុពល។",
    "services.ux_title": "ការរចនា UX/UI",
    "services.ux_desc": "ការរចនាបទពិសោធន៍អ្នកប្រើប្រាស់ដ៏រលូន និងទាក់ទាញភ្នែក ជាមួយស្តង់ដារសោភ័ណភាពទំនើបបំផុត។",
    "services.data_title": "ស្វ័យប្រវត្តិកម្មទិន្នន័យ",
    "services.data_desc": "ការធ្វើស្វ័យប្រវត្តិកម្មលើកិច្ចការអាជីវកម្ម លំហូរការងារ និងទិន្នន័យ ជាមួយកូដស្វ័យប្រវត្តិកម្មល្បឿនលឿន។",
    "services.cloud_title": "ស្ថាបត្យកម្ម Cloud",
    "services.cloud_desc": "ការរៀបចំប្រព័ន្ធ Cloud ដែលមានសុវត្ថិភាពខ្ពស់ និងរលូនល្អ ជាមួយបច្ចេកវិទ្យា microservices និង serverless។",

    // Portfolio
    "portfolio.subtitle": "ទស្សនាស្នាដៃរបស់ខ្ញុំ និងផ្តល់មតិកែលម្អ",
    "portfolio.title": "ស្នាដៃរបស់ខ្ញុំ",
    "portfolio.like": "ចូលចិត្តគម្រោង",
    "portfolio.liked": "បានចូលចិត្តគម្រោង",
    "portfolio.viewLive": "មើលគម្រោងផ្ទាល់",
    "portfolio.techStack": "បច្ចេកវិទ្យាប្រើប្រាស់",
    "portfolio.client": "អតិថិជន",
    "portfolio.date": "កាលបរិច្ឆេទ",
    "portfolio.cat_dev": "ការអភិវឌ្ឍកម្មវិធី",
    "portfolio.cat_design": "ការរចនា",
    "portfolio.cat_auto": "ស្វ័យប្រវត្តិកម្ម",
    "portfolio.proj1_title": "មជ្ឈមណ្ឌលស្វ័យប្រវត្តិកម្មទិន្នន័យជំនាន់ថ្មី",
    "portfolio.proj1_desc": "ដំណោះស្រាយ Excel VBA និង Microsoft Access ដ៏មានអានុភាព ដែលធ្វើការទិន្នន័យដំណើរស្វ័យប្រវត្តិកម្ម ធ្វើឱ្យការរាយការណ៍មានភាពងាយស្រួល និងធ្វើការប្រតិបត្តិការអាជីវកម្មមានភាពត្រឹមត្រូវ និងប្រសិទ្ធភាពខ្ពស់។",
    "portfolio.proj2_title": "គេហទំព័រស្នាដៃរចនាបែបច្នៃប្រឌិតកម្រិតខ្ពស់",
    "portfolio.proj2_desc": "កម្មវិធីគេហទំព័រដែលបង្ហាញពីការរចនាទាក់ទាញ ទំនើប និងឆ្លើយតបបានយ៉ាងល្អឥតខ្ចោះគ្រប់ឧបករណ៍។",
    "portfolio.proj3_title": "សេវាកម្មបង្កើត E-commerce website.",
    "portfolio.proj3_desc": "បង្កើត E-commerce website សម្រាប់លក់ទំនិញអនឡាញ។",

    // Resume
    "resume.subtitle": "បទពិសោធន៍ជាង ៧ ឆ្នាំ",
    "resume.title": "ប្រវត្តិរូបរបស់ខ្ញុំ",
    "resume.tab_education": "ការសិក្សា",
    "resume.tab_skills": "ជំនាញអាជីព",
    "resume.tab_experience": "បទពិសោធន៍ការងារ",
    "resume.education_title": "គុណភាពនៃការសិក្សា",
    "resume.job_title": "បទពិសោធន៍ការងារ",
    "resume.design_cap": "សមត្ថភាពផ្នែករចនា",
    "resume.tech_cap": "សមត្ថភាពផ្នែកបច្ចេកទេស",
    "resume.partner_title": "ការត្រៀមខ្លួនជាដៃគូ",
    "resume.coffee_chat": "ណាត់ជួបជជែកគ្នា",
    "resume.step1_title": "ស្វែងយល់ពីតម្រូវការឱ្យច្បាស់លាស់",
    "resume.step1_desc": "ពួកយើងបកប្រែតម្រូវការទៅជាគម្រោងការងារច្បាស់លាស់ ដោយគ្មានការភាន់ច្រឡំលើពេលវេលា ឬបច្ចេកវិទ្យា។",
    "resume.step2_title": "ការកែលម្អ និងសាកល្បងប្រចាំថ្ងៃ",
    "resume.step2_desc": "ការដាក់ឱ្យប្រើប្រាស់ជាបន្តបន្ទាប់ដើម្បីទទួលបានមតិកែលម្អ ធានាថាលទ្ធផលសមស្របនឹងការរំពឹងទុក។",
    "resume.step3_title": "ការសាកល្បង និងការដាក់ឱ្យដំណើរការ",
    "resume.step3_desc": "ពួកយើងធ្វើតេស្តល្បឿន ភាពស៊ីគ្នានឹងអេក្រង់ឧបករណ៍ផ្សេងៗ និងដាក់ឱ្យដំណើរការលើប្រព័ន្ធល្បឿនលឿនទូទាំងសកលលោក។",

    // Clients
    "clients.subtitle": "អតិថិជនពេញនិយម",
    "clients.title": "ដៃគូ និងអតិថិជន",

    // Pricing
    "pricing.subtitle": "តម្លៃសេវាកម្ម",
    "pricing.title": "កញ្ចប់តម្លៃសេវាកម្ម",
    "pricing.order": "បញ្ជាទិញឥឡូវនេះ",
    "pricing.revisions": "កែសម្រួលបាន",
    "pricing.delivery": "រយៈពេលបញ្ចប់",
    "pricing.p1_title": "ការរចនាទំព័រ Static",
    "pricing.p1_desc": "ស័ក្តិសមសម្រាប់អាជីវកម្មថ្មីថ្មោងដែលត្រូវការគេហទំព័រមួយទំព័រប្រកបដោយសោភ័ណភាព និងការរចនាច្បាស់លាស់។",
    "pricing.p2_title": "កម្មវិធី Full-Stack ស្តង់ដារ",
    "pricing.p2_desc": "កម្មវិធីគេហទំព័រឌីជីថលដែលមានភាពរស់រវើក ភ្ជាប់ទៅកាន់ API និងប្រព័ន្ធទិន្នន័យដែលមានល្បឿនលឿន។",
    "pricing.p3_title": "ប្រព័ន្ធស្វ័យប្រវត្តិកម្មកម្រិតសហគ្រាស",
    "pricing.p3_desc": "លំហូរការងារផ្ទាល់ខ្លួន ប្រព័ន្ធទិន្នន័យលើ Cloud ការធ្វើស្វ័យប្រវត្តិកម្ម កិច្ចការការពារសុវត្ថិភាព និងការថែទាំពិសេស។",

    // Testimonials
    "testimonials.subtitle": "អ្វីដែលអតិថិជននិយាយ",
    "testimonials.title": "មតិយោបល់អតិថិជន",

    // Blog
    "blog.subtitle": "ចូលមើលទស្សនៈបស់ខ្ញុំ និងផ្តល់មតិកែលម្អ",
    "blog.title": "ប្ទស្សនៈរបស់ខ្ញុំ",
    "blog.read_time": "នាទីអាន",
    "blog.share": "ចែករំលែកអត្ថបទ",
    "blog.finished": "អានរួចរាល់",

    // Contact
    "contact.subtitle": "ទំនាក់ទំនង",
    "contact.title": "ទាក់ទងមកខ្ញុំផ្ទាល់",
    "contact.director": "ប្រធានផ្នែកច្នៃប្រឌិត និងស្ថាបត្យករ Full Stack",
    "contact.label_name": "ឈ្មោះរបស់អ្នក",
    "contact.label_phone": "លេខទូរស័ព្ទ",
    "contact.label_email": "អ៊ីមែល",
    "contact.label_subject": "ប្រធានបទ",
    "contact.label_message": "សាររបស់អ្នក",
    "contact.btn_submit": "ផ្ញើសារ",
    "contact.btn_sending": "កំពុងផ្ញើសារ...",
    "contact.success_title": "ផ្ញើសារបានជោគជ័យ!",
    "contact.success_desc": "សូមអរគុណចំពោះការទាក់ទងមក។ ឃុន ណាត បានទទួលសាររបស់អ្នកហើយ ហើយនឹងឆ្លើយតបទៅកាន់អ្នកវិញក្នុងរយៈពេល ២៤ ម៉ោងខាងមុខ។",
    "contact.dismiss": "យល់ព្រម"
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("app_lang");
    return (saved === "kh" || saved === "en") ? saved : "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("app_lang", lang);
    
    // Smooth language transition attribute on html for fonts or layouts
    document.documentElement.setAttribute("lang", lang);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
