import React from 'react';
import { TrendingUp, MessageCircle, PenTool, Package, DollarSign } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp size={32} className="text-white" />,
      title: "Tráfego direto",
      description: "Aprenda a criar campanhas que vendem de forma automática. Sem precisar aparecer",
      color: "from-blue-900 to-blue-700",
    },
    {
      icon: <MessageCircle size={32} className="text-white" />,
      title: "Tráfego para WhatsApp",
      description: "Crie anúncios para X1 que transformam interessados em clientes. E venda sem precisar aparecer",
      color: "from-purple-700 to-purple-500",
    },
    {
      icon: <PenTool size={32} className="text-white" />,
      title: "Criativos, Scripts e RMKT",
      description: "Domine a construção de criativos campeões e conversas que vendem.",
      color: "from-pink-600 to-pink-400",
    },
    {
      icon: <Package size={32} className="text-white" />,
      title: "Criação de Produto",
      description: "Aprenda a estruturar ofertas irresistíveis que se vendem sozinhas.",
      color: "from-blue-600 to-sky-400",
    },
    {
      icon: <DollarSign size={32} className="text-white" />,
      title: "ROI em 48h",
      description: "Metodologia comprovada para recuperar seu investimento em tempo recorde.",
      color: "from-purple-600 to-purple-400",
    },
    {
      icon: <DollarSign size={32} className="text-white" />,
      title: "Lançamento",
      description: "Metodologia comprovada para gerar multiplas vendas em poucos segundos.",
      color: "from-green-600 to-green-400",
    },
    {
      icon: <PenTool size={32} className="text-white" />,
      title: "Tráfego Internacional",
      description: "Domine a criação de anúncios para fora do País e ganhe em Dolar, Euro.",
      color: "from-pink-600 to-pink-400",
    },
    {
      icon: <TrendingUp size={32} className="text-white" />,
      title: "Gestão de Tráfego",
      description: "Aprenda a fechar contratos para gerenciar anúncios de empresas.",
      color: "from-orange-600 to-orange-400",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">O que você vai aprender</h2>
          <p className="text-lg text-gray-700">
            Nossa mentoria foca em habilidades práticas que você pode implementar imediatamente para ver resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className={`p-6 bg-gradient-to-r ${feature.color}`}>
                <div className="mb-4 inline-block p-3 bg-white/20 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;