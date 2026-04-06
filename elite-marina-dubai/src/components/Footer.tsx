import React from "react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <div className="flex flex-col items-start gap-3 text-white mb-6">
              <img src="/logo-oro.png" alt="High Seas Yacht Rental" className="h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,120,0,0.45)]" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mt-4">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.contact')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{t('footer.charter_desk')}</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{t('footer.ownership')}</a></li>
              <li><a href="#" className="hover:text-[var(--color-accent)] transition-colors">{t('footer.press')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest mb-6 text-sm">{t('footer.connect')}</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="https://www.instagram.com/yachts_rental_dubai_dxb?igsh=eDV6YzJhbDJvbXFu" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@yacht_charter_dubai?_r=1&_t=ZS-950tXGnjkWr" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">TikTok</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500 font-bold uppercase tracking-widest">
          <p>© {new Date().getFullYear()} High Seas Yacht. {t('footer.all_rights')}</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
