import React from 'react';
import { CheckCircle, ArrowRight, Lock, ShieldCheck, CreditCard } from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    "Aulas ao vivo todos os dias",
    "Suporte individual via WhatsApp",
    "Estratégias práticas e prontas para aplicar",
    "Comunidade exclusiva de alunos",
    "Conteúdo 100% atualizado",
    "Garantia de 7 dias"
  ];

  return (
    <section id="cta" className="py-16 bg-gradient-to-br from-blue-900 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar sua carreira e seus resultados?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Junte-se agora à mentoria Arkad Select e comece a gerar resultados reais com tráfego pago
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">O que você vai receber:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-pink-400 mr-2 mt-1 flex-shrink-0" size={20} />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>

            <div className="text-center mb-8">
              <div className="inline-block bg-white/5 rounded-xl p-6 mb-6">
                <p className="text-gray-300 text-lg mb-2">De <span className="line-through">R$1.497</span> por apenas</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl font-bold text-[#FFD700]">R$997,00</span>
                  <span className="text-gray-300">ou</span>
                </div>
                <p className="text-xl text-[#22C55E] font-bold">12x de R$103,11</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://pay.kiwify.com.br/X4XQyV4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Quero começar agora
                <ArrowRight className="ml-2" size={20} />
              </a>
              
              <p className="mt-4 text-sm text-gray-300">
                Vagas limitadas para garantir esta Promoção
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center justify-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  <span className="text-sm">Pagamento Seguro</span>
                </div>
                <div className="flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  <span className="text-sm">Compra Protegida</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  <span className="text-sm">Ambiente Criptografado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;