import React from 'react';

const MentorsSection: React.FC = () => {
  const mentors = [
    {
      name: "Léo Castro",
      role: "Especialista em Tráfego Pago",
      image: "https://i.ibb.co/DnXNzvr/minha-foto.jpg",
      description: "Especialista em tráfego pago com mais de 7 anos de experiência e R$4 milhões gerenciados em campanhas. Já ajudou mais de 25 mil alunos a dominarem o marketing digital."
    },
    {
      name: "Paloma Stefani",
      role: "Especialista em Conversão",
      image: "https://i.ibb.co/QvnsTQcq/Whats-App-Image-2024-09-04-at-11-23-16.jpg",
      description: "Especialista em estratégias de conversão e vendas pelo WhatsApp. Responsável por transformar leads em clientes fiéis, com mais de R$3 milhões em vendas nos últimos 12 meses."
    }
  ];

  return (
    <section id="mentors" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Quem está por trás</h2>
          <p className="text-lg text-gray-700">
            Conheça os especialistas que vão te guiar nessa jornada de transformação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-blue-900">{mentor.name}</h3>
                  <p className="text-pink-500 font-medium">{mentor.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{mentor.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-12 text-center bg-gradient-to-r from-blue-800 to-purple-700 p-6 rounded-lg shadow-md text-white">
          <h3 className="text-xl font-semibold mb-3">Experiência que gera resultados</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-3xl font-bold text-sky-400">+50 mil</p>
              <p className="text-sm">Alunos impactados</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-sky-400">R$7 milhões</p>
              <p className="text-sm">Gerenciados em tráfego</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;