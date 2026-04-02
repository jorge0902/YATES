import React from "react";
import { motion } from "framer-motion";
import { Anchor, ShieldCheck, MapPin, CalendarCheck, Award, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "971582177682";
const openWhatsApp = (message: string) => {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
};

export function IntroSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const scrollToFleet = () => {
        const fleetSection = document.getElementById('fleet');
        if (fleetSection) {
            fleetSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            navigate('/#fleet');
        }
    };

    return (
        <section className="relative w-full py-24 overflow-hidden">
            {/* Elegant Dark Background + 10% transparency (90% opacity) */}
            <div className="absolute inset-0 bg-[#141414]/90 backdrop-blur-md"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Column - Main Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <h2 
                            className="text-4xl md:text-5xl font-black font-sans mb-2 uppercase leading-tight tracking-tight overflow-visible text-white"
                            dangerouslySetInnerHTML={{ __html: t('intro.title') }}
                        />
                        <h3 className="text-xl text-white/90 mb-8 font-sans font-light tracking-wide">
                            {t('intro.subtitle')}
                        </h3>

                        <div className="space-y-6 text-white/70 font-sans leading-relaxed text-base">
                            <p>
                                {t('intro.p1')}
                            </p>
                            <p>
                                {t('intro.p2')}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column - Why Choose Us */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                    >
                        <h3 
                            className="text-xl font-bold font-sans text-white mb-8 tracking-widest uppercase border-b border-white/10 pb-4"
                            dangerouslySetInnerHTML={{ __html: t('intro.why_choose') }}
                        />

                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <Anchor className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold font-sans text-sm tracking-wider uppercase mb-1">{t('intro.features.prestige.title')}</h4>
                                    <p className="text-white/60 text-sm font-sans leading-relaxed">{t('intro.features.prestige.desc')}</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <MapPin className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold font-sans text-sm tracking-wider uppercase mb-1">{t('intro.features.ports.title')}</h4>
                                    <p className="text-white/60 text-sm font-sans leading-relaxed">{t('intro.features.ports.desc')}</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <ShieldCheck className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold font-sans text-sm tracking-wider uppercase mb-1">{t('intro.features.hospitality.title')}</h4>
                                    <p className="text-white/60 text-sm font-sans leading-relaxed">{t('intro.features.hospitality.desc')}</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CalendarCheck className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold font-sans text-sm tracking-wider uppercase mb-1">{t('intro.features.booking.title')}</h4>
                                    <p className="text-white/60 text-sm font-sans leading-relaxed">{t('intro.features.booking.desc')}</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <Award className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold font-sans text-sm tracking-wider uppercase mb-1">{t('intro.features.excellence.title')}</h4>
                                    <p className="text-white/60 text-sm font-sans leading-relaxed">{t('intro.features.excellence.desc')}</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-center gap-6"
                >
                    <button
                        onClick={scrollToFleet}
                        className="group relative px-8 py-4 btn-old-gold font-sans font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">{t('intro.cta_fleet')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </button>

                    <button
                        onClick={() => navigate('/packages')}
                        className="group relative px-8 py-4 btn-old-gold font-sans font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">{t('intro.cta_packages')}</span>
                    </button>

                    <button
                        onClick={() => openWhatsApp('Hello, I would like to check availability for a yacht charter in Dubai.')}
                        className="group relative px-8 py-4 btn-old-gold font-sans font-bold text-sm tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300"
                    >
                        <span className="relative z-10 flex items-center gap-2">{t('intro.cta_availability')}</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
