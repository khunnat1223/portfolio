/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "../context/LanguageContext";

export default function Services() {
  const { t } = useTranslation();

  // Localized services array with premium relevant icons for data automation architecture
  const servicesList = [
    {
      id: "1",
      title: t("services.dev_title"),
      description: t("services.dev_desc"),
      iconName: "Code"
    },
    {
      id: "2",
      title: t("services.data_title"),
      description: t("services.data_desc"),
      iconName: "Cpu"
    },
    // {
    //   id: "3",
    //   title: t("services.strat_title"),
    //   description: t("services.strat_desc"),
    //   iconName: "Zap"
    // },
    {
      id: "4",
      title: t("services.ux_title"),
      description: t("services.ux_desc"),
      iconName: "Monitor"
    },
    {
      id: "5",
      title: t("services.seo_title"),
      description: t("services.seo_desc"),
      iconName: "TrendingUp"
    },
    {
      id: "6",
      title: t("services.cloud_title"),
      description: t("services.cloud_desc"),
      iconName: "Cloud"
    }
  ];

  return (
    <section id="features" className="py-24 bg-dark-bg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-14 text-left">
          <span className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.25em] text-brand-green uppercase block mb-3 drop-shadow-[0_0_12px_rgba(0,200,117,0.2)]">
            {t("services.subtitle")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight">
            {t("services.title")}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {servicesList.map((service, idx) => {
            // Dynamically lookup the Lucide icon component
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative p-8 sm:p-10 rounded-2xl bg-dark-sec border border-white/5 hover:border-brand-orange/30 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Subtle brand gradient hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Icon with beautiful shadows */}
                  <div className="w-14 h-14 rounded-xl bg-dark-bg border border-white/5 flex items-center justify-center text-brand-orange mb-8 transform group-hover:scale-105 transition-all duration-300 shadow-md">
                    <IconComponent className="w-9 h-9 stroke-[1.2] group-hover:stroke-[1.6] transition-all" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-sans font-bold text-white group-hover:text-brand-orange transition-colors mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-gray leading-relaxed group-hover:text-white/90 transition-colors mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator at the bottom */}
                <div className="pt-2 text-brand-orange opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                  <span className="text-xs font-black tracking-widest">{t("services.readMore")}</span>
                  <Icons.ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
