
import React from 'react';

const servicesList = [
  {
    title: "Produção de Eventos",
    description: "Gestão completa de ponta a ponta. Da logística técnica à coordenação de palco com excelência.",
    category: "Full Production"
  },
  {
    title: "Ativação de Marcas",
    description: "Criação de pontos de contacto estratégicos que elevam a visibilidade direta no PDV.",
    category: "Brand Visibility"
  },
  {
    title: "Marketing Experiencial",
    description: "Conceitos sensoriais que permitem vivenciar os valores da marca de forma profunda.",
    category: "Experience"
  },
  {
    title: "On & Off Trade",
    description: "Ações coordenadas em pontos de venda e consumo direto, otimizando resultados.",
    category: "Strategic Execution"
  }
];

const Services: React.FC = () => {
  return (
    <div id="servicos" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 reveal">
          <h2 className="text-black uppercase tracking-[0.5em] text-[11px] mb-5 font-bold">Expertise</h2>
          <h3 className="font-serif-premium text-4xl md:text-6xl mb-8 text-black">Soluções Corporativas</h3>
          <div className="w-24 h-[2px] bg-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="group relative p-12 border border-black/10 bg-white transition-all duration-700 hover:shadow-2xl reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="block text-[10px] uppercase tracking-[0.4em] text-black mb-8 font-bold">
                {service.category}
              </span>
              <h4 className="font-serif-premium text-2xl mb-8 text-black transition-colors duration-500">
                {service.title}
              </h4>
              <p className="text-black/70 font-light leading-relaxed text-base mb-8">
                {service.description}
              </p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold transition-all duration-700 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
