import React from "react";
import { motion } from "framer-motion";
import { Users, Bed, Navigation2, Ship, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "971582177682";

export function ExperiencesSection() {
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

    const openWhatsApp = (boatName: string) => {
        const message = `Hello, I'm interested in the ${boatName} experience.`;
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    };

    const experiences = [
        {
            id: "01",
            label: t("experiences.items.sunset.label"),
            title: t("experiences.items.sunset.title"),
            boatName: "Carmen 140 FT Mega Yacht",
            desc: t("experiences.items.sunset.desc"),
            specs: {
                guests: 100,
                cabins: 6,
                speed: "18 Knots",
                length: "140 ft"
            },
            image: "/assets/yachts_optimized/carmen-big-boy-140-feet.jpg",
            imageLeft: true,
        },
        {
            id: "02",
            label: t("experiences.items.f1.label"),
            title: t("experiences.items.f1.title"),
            boatName: "High Seas Yacht 115 FT",
            desc: t("experiences.items.f1.desc"),
            specs: {
                guests: 50,
                cabins: 3,
                speed: "22 Knots",
                length: "115 ft"
            },
            image: "/images/yachts/big-boy-yacht-115-feet/principal.jpeg",
            imageLeft: false,
        },
        {
            id: "03",
            label: t("experiences.items.island.label"),
            title: t("experiences.items.island.title"),
            boatName: "High Seas Yacht 101 FT",
            desc: t("experiences.items.island.desc"),
            specs: {
                guests: 40,
                cabins: 4,
                speed: "25 Knots",
                length: "101 ft"
            },
            image: "/images/yachts/big-boy-yacht-101-feet/principal.jpeg",
            imageLeft: true,
        },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <section className="py-24 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">

                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-20"
                >
                    <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-3">
                        {t("experiences.tag")}
                    </p>
                    <h2 
                        className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3]"
                        dangerouslySetInnerHTML={{ __html: t("experiences.title") }}
                    />
                    <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
                        {t("experiences.description")}
                    </p>
                </motion.div>

                {/* Experience Cards — alternating layout */}
                <div className="space-y-4">
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-80px" }}
                            variants={fadeUp}
                            className={`flex flex-col ${exp.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 overflow-hidden rounded-2xl border border-white/10`}
                        >
                            {/* Image */}
                            <div className="lg:w-[60%] relative overflow-hidden flex items-center justify-center bg-[#0a0a0a]">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className="w-full h-72 lg:h-full object-cover lg:object-contain xl:object-cover transition-transform duration-700 hover:scale-105"
                                    style={{ minHeight: "100%" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="lg:w-[40%] flex flex-col justify-center p-8 lg:p-10 bg-black/40 backdrop-blur-sm z-10">
                                <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-2">
                                    {exp.id} — {exp.label}
                                </p>
                                <h3 className="text-3xl md:text-4xl font-black italic text-white uppercase leading-tight mb-2">
                                    {exp.title}
                                </h3>
                                <div className="text-sm font-medium tracking-widest text-white/70 uppercase mb-5 flex items-center gap-2">
                                    <Ship className="w-4 h-4 text-[var(--color-accent)]" /> {exp.boatName}
                                </div>
                                <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                                    {exp.desc}
                                </p>

                                {/* Specs Grid */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <Users className="w-4 h-4 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{t("experiences.labels.guests")}</p>
                                            <p className="text-sm text-white font-medium">{t("experiences.labels.guests_value", { count: exp.specs.guests })}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{t("experiences.labels.cabins")}</p>
                                            <p className="text-sm text-white font-medium">{t("experiences.labels.cabins_value", { count: exp.specs.cabins })}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <Navigation2 className="w-4 h-4 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{t("experiences.labels.speed")}</p>
                                            <p className="text-sm text-white font-medium">{exp.specs.speed}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                            <Ship className="w-4 h-4 text-[var(--color-accent)]" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{t("experiences.labels.length")}</p>
                                            <p className="text-sm text-white font-medium">{exp.specs.length}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4 items-center mt-auto">
                                    <button 
                                        onClick={() => openWhatsApp(exp.boatName)}
                                        className="btn-luxury-gold px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full transition-colors"
                                    >
                                        {t("experiences.labels.enquire")}
                                    </button>
                                    <button 
                                        onClick={scrollToFleet}
                                        className="text-xs font-bold tracking-widest text-gray-400 uppercase hover:text-white transition-colors"
                                    >
                                        {t("experiences.labels.explore")} →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bespoke Charter CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mt-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/10 pt-16"
                >
                    <div>
                        <h3 
                            className="font-serif text-white text-2xl md:text-3xl font-normal uppercase tracking-[0.1em] mb-4 leading-tight"
                            dangerouslySetInnerHTML={{ __html: t("experiences.bespoke.title") }}
                        />
                        <p className="text-gray-400 max-w-md leading-relaxed">
                            {t("experiences.bespoke.desc")}
                        </p>
                    </div>
                    <button 
                        onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'd like to request a bespoke yacht charter.")}`, "_blank")}
                        className="btn-luxury-gold flex-shrink-0 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                    >
                        {t("experiences.bespoke.cta")}
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
