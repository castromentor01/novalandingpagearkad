import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      image: "https://i.ibb.co/5xxTk9WS/2.png"
    },
    {
      image: "https://i.ibb.co/G31HbNGx/3.png"
    },
    {
      image: "https://i.ibb.co/VcL9wqgm/4.png"
    },
    {
      image: "https://i.ibb.co/PZXmQb8D/5.png"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-blue-900 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Depoimentos de Alunos</h2>
          <p className="text-lg text-gray-200">
            Veja como a Arkad Select está transformando carreiras e negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
            >
              <img 
                src={item.image} 
                alt="Depoimento"
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;