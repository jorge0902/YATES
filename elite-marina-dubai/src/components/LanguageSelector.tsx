import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language?.toLowerCase().startsWith('ar') ? 'ar' : 
                     i18n.language?.toLowerCase().startsWith('es') ? 'es' : 'en';

  const getNextLang = () => {
    if (currentLang === 'en') return 'ar';
    if (currentLang === 'ar') return 'es';
    return 'en';
  };

  const handleCycle = () => {
    i18n.changeLanguage(getNextLang());
  };

  const getNextFlagUrl = () => {
    const next = getNextLang();
    if (next === 'ar') return 'https://flagcdn.com/w80/ae.png';
    if (next === 'es') return 'https://flagcdn.com/w80/es.png';
    return 'https://flagcdn.com/w80/gb.png';
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleCycle}
        className="group relative w-11 h-11 flex items-center justify-center bg-[#2a2a2a] border border-white/10 rounded-full shadow-lg hover:scale-110 hover:border-white/30 transition-all duration-500 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="w-[65%] h-[65%] rounded-full overflow-hidden border border-black/20">
          <img 
            src={getNextFlagUrl()} 
            alt={getNextLang()}
            className="w-full h-full object-cover scale-150 select-none"
          />
        </div>
      </button>
    </div>
  );
}
