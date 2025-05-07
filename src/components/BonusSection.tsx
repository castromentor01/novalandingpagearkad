import React from 'react';
import { Gift, Rocket, Clock, Users, BookOpen, Award } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      icon: <Gift size={32} className="text-pink-500" />,
      title: "Acesso Vitalício",
      description: "Todo o conteúdo gravado disponível para sempre, incluindo atualizações futuras."
    },
    {
      icon: <Rocket size={32} className="text-white" />,
      title: "Inteligência Artificial",
      description: "Aprenda a dominar o futuro, fazendo as IAs trabalharem pra você.",
      special: true
    },
    {
      icon: <Clock size={32} className="text-pink-500" />,
      title: "Encontros Presenciais",
      description: "Nossos encontros pra networking entre alunos pelo Brasil ."
    },
    {
      icon: <Users size={32} className="text-pink-500" />,
      title: "Comunidade VIP",
      description: "Grupo exclusivo para networking e parcerias entre alunos."
    },
    {
      icon: <BookOpen size={32} className="text-pink-500" />,
      title: "Hot Seat",
      description: "Aulas aovivo com os(as) Top afiliados(as) e Gestores de tráfego pra fazer perguntas e ter acesso as estratégias detalhadas."
    },
    {
      icon: <Award size={32} className="text-pink-500" />,
      title: "Certificado",
      description: "Certificado de conclusão reconhecido pelo mercado."
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-blue-900">Bônus Exclusivos</h2>
          <p className="text-xl text-gray-700">
            Ao se matricular hoje, você receberá estes bônus especiais para acelerar ainda mais seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div 
              key={index}
              className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 ${
                bonus.special 
                  ? 'bg-gradient-to-br from-[#FFD700] to-[#FFA500] text-white' 
                  : 'bg-white'
              }`}
            >
              <div className="mb-6">
                {bonus.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 ${
                bonus.special ? 'text-white' : 'text-blue-900'
              }`}>
                {bonus.title}
              </h3>
              <p className={bonus.special ? 'text-white' : 'text-gray-700'}>
                {bonus.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-blue-900 mb-4">
            Valor Total dos Bônus: <span className="line-through text-gray-500">R$ 2.997</span>
          </p>
          <p className="text-xl text-pink-500 font-bold">
            GRÁTIS para as próximas 20 matrículas
          </p>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;