import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Users, Bed, ArrowLeft, Ruler, Anchor, ChevronDown, 
  MessageCircle, Phone, Mail, Instagram, Linkedin, Youtube,
  Music, Snowflake, Sun, GlassWater, Sparkles, MapPin, 
  UserCircle2, ShieldCheck, Ship, Info
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { yachts, Yacht } from "../data/yachts";

// Elegant Faq Component
const FaqItem = ({ question, answer }: { question: string, answer: string, key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20 group shadow-lg w-full">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <span className="text-white/90 font-serif tracking-wide text-sm md:text-base uppercase pr-4">{question}</span>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center transition-transform duration-500 group-hover:bg-[var(--color-accent)]/20 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 text-[var(--color-accent)]" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
           <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
           >
              <div className="px-6 pb-6 text-white/50 font-sans font-light text-sm md:text-base leading-relaxed border-t border-white/5 pt-4">
                 {answer}
              </div>
           </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function YachtDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [yacht, setYacht] = useState<Yacht | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [relatedYachts, setRelatedYachts] = useState<Yacht[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundYacht = yachts.find(y => y.id === id);
    if (foundYacht) {
      setYacht(foundYacht);
      setActiveImage(foundYacht.principalImage || (foundYacht.galleryImages.length > 0 ? foundYacht.galleryImages[0] : null));
      
      const targetPrice = foundYacht.pricePerHour;
      const similar = [...yachts]
         .filter(y => y.id !== id)
         .sort((a, b) => Math.abs(a.pricePerHour - targetPrice) - Math.abs(b.pricePerHour - targetPrice))
         .slice(0, 3);
      
      setRelatedYachts(similar);
    }
  }, [id]);

  if (!yacht) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 flex-col text-center">
        <div className="text-white text-2xl font-serif">{t("yacht_details.not_found")}</div>
        <button onClick={() => navigate("/#fleet")} className="mt-8 text-[var(--color-accent)] hover:underline uppercase tracking-widest text-sm font-bold">
          {t("yacht_details.return_home")}
        </button>
      </div>
    );
  }

  const allImages = [...(yacht.principalImage ? [yacht.principalImage] : []), ...yacht.galleryImages];
  const WHATSAPP_NUMBER = "971582177682";
  const whatsappMessage = encodeURIComponent(t("yacht_details.cta.whatsapp_message", { yacht: yacht.name }));

  return (
    <div className="min-h-screen w-full text-white pt-24 relative z-10 flex flex-col items-center bg-black/60 backdrop-blur-[24px]">
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Navigation & Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex flex-col items-center text-center mt-4 mb-16"
        >
          <button 
            onClick={() => navigate("/#fleet")} 
            className="flex items-center gap-2 text-white/50 hover:text-[var(--color-accent)] transition-colors group mb-8 absolute left-4 lg:left-8 top-28"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-[0.2em] text-xs font-bold font-sans hidden sm:block">{t("yacht_details.back")}</span>
          </button>

          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[var(--color-accent)]/50 bg-[var(--color-accent)]/10 backdrop-blur-md mb-6">
             <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
             <span className="text-white font-sans text-[10px] tracking-[0.3em] uppercase font-bold">{t("yacht_details.fleet_tag")}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-[5rem] font-serif font-normal tracking-[0.05em] xl:tracking-[0.1em] uppercase text-white leading-tight drop-shadow-2xl max-w-5xl mx-auto pb-2">
            {yacht.name}
          </h1>
        </motion.div>

        {/* TOP SECTION: Hero Image & Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 relative w-full items-start mb-24">
           
           {/* LEFT COLUMN: Visuals */}
           <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6"
           >
              <div className="w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] bg-white/5 backdrop-blur-3xl relative p-3">
                 <div className="w-full rounded-3xl overflow-hidden relative bg-black">
                    <img 
                      src={activeImage || 'https://images.unsplash.com/photo-1567606403062-811c7ffcc5a1?q=80&w=2670&auto=format&fit=crop'} 
                      alt={yacht.name} 
                      className="w-full h-auto max-h-[75vh] md:max-h-[85vh] object-cover object-center transition-opacity duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none mix-blend-overlay"></div>
                 </div>
              </div>

              {allImages.length > 1 && (
                <div className="w-full flex gap-3 overflow-x-auto custom-scrollbar pb-2 pt-2 snap-x">
                  {allImages.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative snap-center flex-shrink-0 w-32 md:w-44 aspect-[4/3] rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 ${activeImage === img ? 'border-2 border-[var(--color-accent)] ring-4 ring-[var(--color-accent)]/20 opacity-100 scale-[1.05] z-10' : 'border border-white/10 opacity-50 hover:opacity-100 hover:border-white/40'}`}
                    >
                      <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
           </motion.div>

           {/* RIGHT COLUMN: Floating Sticky Action Panel */}
           <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-5 xl:col-span-4 relative"
           >
              <div className="sticky top-32 flex flex-col gap-6">
                 <div className="w-full bg-black/30 backdrop-blur-[40px] border border-white/10 rounded-[2.5rem] p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.7)] hover:border-white/20 transition-colors duration-500">
                     <div className="mb-10 pb-8 border-b border-white/10">
                       <h3 className="text-[var(--color-accent)] text-[10px] tracking-[0.3em] uppercase mb-3 font-sans font-bold flex items-center gap-2">
                         <MapPin className="w-3 h-3" /> {t("yacht_details.overview.location")}
                       </h3>
                       {yacht.pricePerHour > 0 ? (
                         <div className="flex items-baseline gap-2 flex-wrap">
                            <span className="text-4xl xl:text-5xl font-serif text-white tracking-widest uppercase">
                               {t("yacht_details.similar.price_unit")} {yacht.pricePerHour.toLocaleString()}
                            </span>
                            <span className="text-lg xl:text-xl text-white/50 font-sans font-light">{t("yacht_details.similar.hour_unit")}</span>
                         </div>
                       ) : (
                         <div className="text-3xl font-serif text-white tracking-widest uppercase">{t("yacht_details.overview.price_on_request")}</div>
                       )}
                    </div>

                    <h3 className="text-white/90 font-serif tracking-[0.15em] uppercase mb-6 text-lg">{t("yacht_details.overview.title")}</h3>
                    
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Ruler className="w-4 h-4 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-sans">{t("yacht_details.overview.length")}</span>
                                <span className="text-white font-serif text-lg leading-none mt-1 shadow-sm">{yacht.length || t("yacht_details.overview.not_available")}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Users className="w-4 h-4 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-sans">{t("yacht_details.overview.capacity")}</span>
                                <span className="text-white font-serif text-lg leading-none mt-1 shadow-sm">{yacht.capacity || t("yacht_details.overview.not_available")}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Bed className="w-4 h-4 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-sans">{t("yacht_details.overview.cabins")}</span>
                                <span className="text-white font-serif text-lg leading-none mt-1 shadow-sm">{yacht.cabins || t("yacht_details.overview.not_available")}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <UserCircle2 className="w-4 h-4 text-white/50" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/40 text-[9px] uppercase tracking-[0.2em] font-sans">{t("yacht_details.overview.crew")}</span>
                                <span className="text-white font-serif text-lg leading-none mt-1 shadow-sm">{t("yacht_details.overview.crew_value")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a 
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-5 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90 text-white font-sans font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-300"
                        >
                            <MessageCircle className="w-5 h-5"/> {t("yacht_details.cta.whatsapp")}
                        </a>
                        
                        <div className="flex gap-4">
                            <a 
                               href="mailto:info@bigboyyachtrental.com" 
                               className="flex-1 py-4 rounded-xl border border-white/20 text-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-colors uppercase tracking-[0.2em] text-[10px] font-sans font-bold"
                            >
                               {t("yacht_details.cta.email")}
                            </a>
                            <a 
                               href={`tel:+${WHATSAPP_NUMBER}`} 
                               className="flex-1 py-4 rounded-xl border border-white/20 text-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-colors uppercase tracking-[0.2em] text-[10px] font-sans font-bold"
                            >
                               {t("yacht_details.cta.call")}
                            </a>
                        </div>
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>

        {/* MIDDLE SECTION: Centered Experience & Amenities */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full max-w-5xl mx-auto flex flex-col items-center mb-24"
        >
           <div className="w-full bg-black/10 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-2xl text-center">
              <h2 className="flex flex-col sm:flex-row items-center justify-center gap-4 text-3xl md:text-5xl font-serif text-white tracking-[0.15em] uppercase mb-10 font-normal">
                 <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-accent)]" />
                 {t("yacht_details.experience.title")}
                 <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--color-accent)] hidden sm:block" />
              </h2>
              
              <div className="space-y-8 text-white/70 font-sans font-light text-lg md:text-xl leading-[2.2] tracking-wide max-w-4xl mx-auto">
                 <p className="font-serif italic text-white/90 text-2xl mb-8">
                    {t("yacht_details.experience.stats", { yacht: yacht.name, price: yacht.pricePerHour, capacity: yacht.capacity, cabins: yacht.cabins })}
                 </p>
                 <p>
                   {t("yacht_details.experience.p1")}
                 </p>
                 <p>
                   {t("yacht_details.experience.p2")}
                 </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-16 pt-12 border-t border-white/10">
                 {[
                   { icon: Music, label: "yacht_details.experience.amenities.audio" },
                   { icon: Sun, label: "yacht_details.experience.amenities.solarium" },
                   { icon: Snowflake, label: "yacht_details.experience.amenities.ac" },
                   { icon: GlassWater, label: "yacht_details.experience.amenities.drinks" },
                   { icon: Anchor, label: "yacht_details.experience.amenities.swim" }
                 ].map((item, id) => (
                   <div key={id} className="flex flex-col items-center justify-center text-center gap-3">
                      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-[var(--color-accent)]" />
                      </div>
                      <span className="text-white/80 font-sans text-xs tracking-widest uppercase">{t(item.label)}</span>
                   </div>
                 ))}
              </div>
           </div>
        </motion.div>

        {/* BOTTOM SECTION: Centered FAQs */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="w-full max-w-4xl mx-auto flex flex-col items-center mt-12 mb-32"
        >
           <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[0.15em] uppercase mb-12 text-center font-normal">
              {t("yacht_details.faq.title")}
           </h2>
           <div className="w-full space-y-4">
              { (t("yacht_details.faq.items", { returnObjects: true }) as any[]).map((item, idx) => (
                <FaqItem 
                  key={idx}
                  question={t(`yacht_details.faq.items.${idx}.q`, { yacht: yacht.name, capacity: yacht.capacity })}
                  answer={t(`yacht_details.faq.items.${idx}.a`, { yacht: yacht.name, capacity: yacht.capacity })}
                />
              ))}
           </div>
        </motion.div>

        {/* Related Yachts Section */}
        <div className="w-full mt-24">
           <h2 className="text-3xl md:text-5xl font-serif text-white tracking-[0.15em] uppercase mb-12 text-center font-normal">
             {t("yacht_details.similar.title")}
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {relatedYachts.map((related) => (
                <motion.div 
                  key={related.id} 
                  whileHover={{ y: -10 }}
                  onClick={() => navigate(`/yachts/${related.id}`)}
                  className="bg-black/20 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer shadow-2xl flex flex-col h-full hover:border-[var(--color-accent)]/50 transition-colors duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img 
                      src={related.principalImage || (related.galleryImages && related.galleryImages.length > 0 ? related.galleryImages[0] : 'https://images.unsplash.com/photo-1567606403062-811c7ffcc5a1?q=80&w=2670&auto=format&fit=crop')} 
                      alt={related.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-6 left-6">
                      <span className="text-[var(--color-accent)] font-serif italic text-2xl font-bold">
                        {related.pricePerHour} {t("yacht_details.similar.price_unit")}<span className="text-sm font-sans font-normal text-white/80 not-italic">{t("yacht_details.similar.hour_unit")}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-serif text-white uppercase tracking-widest mb-6">
                      {related.name}
                    </h3>

                    <div className="flex items-center gap-6 mb-8 text-white/70">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-sans tracking-wider">{related.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-sans tracking-wider">{related.cabins}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-sans tracking-wider">{related.length?.replace(/\D/g,'').slice(0,3)} FT</span>
                      </div>
                    </div>

                    <div className="mt-auto grid grid-cols-2 gap-4">
                      <button 
                        onClick={(e) => { e.stopPropagation(); window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t("yacht_details.cta.whatsapp_message", { yacht: related.name }))}`, '_blank'); }}
                        className="py-3 px-4 rounded-xl bg-[var(--color-accent)] text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest text-center"
                      >
                        {t("yacht_details.similar.whatsapp")}
                      </button>
                      <button className="py-3 px-4 rounded-xl bg-white text-black hover:bg-gray-200 transition-all duration-300 text-xs font-bold uppercase tracking-widest">
                        {t("yacht_details.similar.details")}
                      </button>
                    </div>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
