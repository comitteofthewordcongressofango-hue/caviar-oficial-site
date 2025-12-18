
import React from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const whatsappUrl = "https://wa.me/244948937428";

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo on the left */}
        <a href="#home" className="flex items-center group">
          <div className="flex flex-col items-center">
            <span className="font-serif-premium text-2xl font-bold tracking-[0.3em] text-[#D4AF37] leading-none">
              CAVIAR
            </span>
            <div className="w-full h-[1px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center mt-1"></div>
          </div>
        </a>

        {/* Falar Connosco on the right */}
        <div className="flex items-center">
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[10px] bg-[#D4AF37] text-white px-6 py-2.5 uppercase tracking-widest hover:bg-white hover:text-black transition-all font-bold leading-none flex items-center justify-center shadow-lg border border-[#D4AF37]"
          >
            Falar Connosco
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
