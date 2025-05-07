import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-900 to-purple-700 text-white flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
            Domine o Tráfego Pago e Lucre Todos os Dias
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Domine as estratégias mais avançadas de tráfego pago e descubra como gerar resultados consistentes para qualquer negócio.
          </p>
          
          <div className="space-y-6">            
            <p className="text-[#FFD700] text-lg font-medium">
              Apenas 50 vagas disponíveis | Suporte individual Whatsapp | 12 produtos exclusivos | Aula aovivo com o mentor diariamente
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-sky-400">+50 mil</p>
              <p className="text-sm md:text-base mt-2">Alunos impactados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-sky-400">R$7M+</p>
              <p className="text-sm md:text-base mt-2">Em campanhas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-sky-400">97%</p>
              <p className="text-sm md:text-base mt-2">Taxa de satisfação</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-sky-400">48h</p>
              <p className="text-sm md:text-base mt-2">ROI médio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;