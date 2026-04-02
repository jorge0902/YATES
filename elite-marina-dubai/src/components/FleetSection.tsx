import React from "react";
import { motion } from "framer-motion";
import { Users, Bed, Navigation2, Ship, ChevronLeft, ChevronRight } from "lucide-react";
import { PrefetchLink } from "./PrefetchLink";
import { yachts } from "../data/yachts";
import { useTranslation } from "react-i18next";

function YachtCard({ yacht, t, idx }: { yacht: any, t: any, idx: number, [key: string]: any }) {
    const images = [yacht.principalImage, ...(yacht.galleryImages || [])].filter(Boolean);
    const [currentImg, setCurrentImg] = React.useState(0);

    const nextImg = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImg((prev) => (prev + 1) % images.length);
    };

    const prevImg = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImg((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative flex flex-col h-full bg-black/40 backdrop-blur-[20px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-white/20 transition-all duration-300"
        >
            {/* Yacht Image with Navigation */}
            <div className="relative h-56 w-full overflow-hidden">
                <img
                    src={images[currentImg]}
                    alt={yacht.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Navigation Arrows (Visible on hover) */}
                {images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button 
                            onClick={prevImg}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 hover:border-white/30 transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                            onClick={nextImg}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white border border-white/10 hover:bg-black/60 hover:border-white/30 transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
                    <h3 className="text-2xl font-serif text-white tracking-wide">{yacht.name}</h3>
                    <span className="text-[var(--color-accent)] font-bold text-lg font-sans">
                        {yacht.pricePerHour > 0 ? `${yacht.pricePerHour}${t('fleet.per_hour')}` : t('fleet.price_request')}
                    </span>
                </div>

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg border border-white/10 text-[10px] text-white/70 font-bold tracking-tighter z-10">
                        {currentImg + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Yacht Specs */}
            <div className="p-6 flex flex-col flex-grow justify-between">
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-white/80 text-sm font-sans mb-6">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{yacht.capacity || t("yacht_details.overview.not_available")} {t('fleet.pax')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{yacht.cabins || t("yacht_details.overview.not_available")} {t('fleet.cabins')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Navigation2 className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{yacht.length}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Ship className="w-4 h-4 text-[var(--color-accent)]" />
                        <span>{t('fleet.luxury_class')}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                    <a 
                        href={`https://wa.me/971582177682?text=${encodeURIComponent(t('fleet.interests', { yacht: yacht.name }))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center btn-luxury-gold relative font-bold font-sans py-3 rounded-xl uppercase text-xs tracking-wider"
                    >
                        {t('fleet.whatsapp')}
                    </a>
                    <PrefetchLink to={`/yachts/${yacht.id}`} className="flex-1 flex justify-center items-center bg-white/10 text-white font-bold font-sans py-3 rounded-xl uppercase text-xs tracking-wider transition-all hover:bg-white/20 border border-white/10 hover:border-white/30">
                        {t('fleet.details')}
                    </PrefetchLink>
                </div>
            </div>
        </motion.div>
    );
}

export function FleetSection() {
    const { t } = useTranslation();
    // Only display yachts that have a principal image
    const displayYachts = yachts.filter(yacht => yacht.principalImage !== null);

    return (
        <section id="fleet" className="relative w-full min-h-screen py-24 bg-black/60">
            {/* Progressive darkening gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 pointer-events-none z-0" />
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 
                        className="font-serif text-white text-3xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] mb-8 leading-[1.3]"
                        dangerouslySetInnerHTML={{ __html: t('fleet.title') }}
                    />
                    <p className="text-lg text-white/70 max-w-2xl mx-auto font-sans">
                        {t('fleet.subtitle')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayYachts.map((yacht, idx) => (
                        <YachtCard key={yacht.id} yacht={yacht} t={t} idx={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}
