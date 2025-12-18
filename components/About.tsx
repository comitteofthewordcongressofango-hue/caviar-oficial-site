
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="container mx-auto px-6 md:px-12 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <div className="mb-8">
            <h2 className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] mb-3 font-bold">A Nossa Missão</h2>
            <h3 className="font-serif-premium text-4xl md:text-5xl leading-tight mb-8 text-white">
              A Arte de <span className="italic text-[#D4AF37]">Executar</span> Momentos que Impactam.
            </h3>
          </div>
          
          <div className="space-y-6 text-white font-light leading-relaxed text-lg opacity-95">
            <p>
              A <span className="text-[#D4AF37] font-bold">CAVIAR</span> é uma empresa especializada na criação, gestão e execução de experiências estratégicas. O nosso foco é claro: conectar marcas ao seu público através de ações que ficam na memória.
            </p>
            <p>
              Com um posicionamento focado no detalhe e na sofisticação, transformamos objetivos corporativos em realidades tangíveis. Desde a produção técnica de grandes eventos até ativações minuciosas.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-10">
            <div className="group">
              <span className="block text-4xl font-serif-premium text-[#D4AF37] mb-2">5.000+</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 italic font-bold">Eventos Realizados</span>
            </div>
            <div className="group">
              <span className="block text-4xl font-serif-premium text-[#D4AF37] mb-2">185</span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 italic font-bold">Clientes Atendidos</span>
            </div>
          </div>
        </div>

        <div className="relative reveal">
          <div className="relative z-10 aspect-video lg:aspect-square overflow-hidden border border-white/10 p-1 bg-white/5 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop" 
              alt="Evento Caviar" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-[#D4AF37] p-8 z-20 max-w-[260px] shadow-2xl text-black">
            <p className="text-sm italic font-serif-premium leading-relaxed font-bold">
              "Criamos as pontas que unem as marcas aos seus destinos finais."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
