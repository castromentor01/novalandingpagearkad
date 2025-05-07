import React from 'react';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <CheckCircle className="text-sky-400" size={24} />,
      title: "12 Produtos",
      description: "Acesso a 12 produtos físicos e digitais 100% validados e exclusivos para os alunos venderem."
    },
    {
      icon: <CheckCircle className="text-sky-400" size={24} />,
      title: "Suporte individual",
      description: "Acesso direto ao mentor via WhatsApp para solucionar suas dúvidas em tempo real."
    },
    {
      icon: <Clock className="text-sky-400" size={24} />,
      title: "Aulas ao vivo diárias",
      description: "Conteúdo atualizado e interativo com o mentor todos os dias da semana."
    },
    {
      icon: <Users className="text-sky-400" size={24} />,
      title: "Para todos os níveis",
      description: "Estratégias personalizadas tanto para iniciantes quanto para profissionais avançados."
    },
    {
      icon: <Star className="text-sky-400" size={24} />,
      title: "Resultados rápidos",
      description: "Metodologia focada em recuperar seu investimento em até 48 horas."
    }
  ];

  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Sobre a Mentoria</h2>
          <p className="text-lg text-gray-700">
            A Arkad Select não é apenas mais um curso. É um programa intensivo de mentoria que vai te transformar em um profissional de tráfego pago com resultados reais e mensuráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;