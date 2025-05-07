import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqItems = [
    {
      question: "Por quanto tempo tenho acesso à mentoria?",
      answer: "Você terá acesso vitalício a todo o conteúdo gravado da mentoria. O suporte personalizado e as aulas ao vivo têm duração de 8 semanas."
    },
    {
      question: "Preciso ter experiência prévia com tráfego pago?",
      answer: "Não! A mentoria foi estruturada para atender tanto iniciantes quanto pessoas com experiência. Temos módulos específicos para cada nível."
    },
    {
      question: "Como funciona o suporte individual?",
      answer: "Você terá acesso a um contato exclusivo no WhatsApp onde o mentor responde dúvidas diariamente. Além disso, teremos calls diárias para você mostrar a tela caso queira."
    },
    {
      question: "Quanto tempo preciso dedicar por semana?",
      answer: "Recomendamos que você dedique pelo menos 6 horas por semana entre aulas ao vivo, estudo do material e implementação das estratégias."
    },
    {
      question: "A mentoria tem garantia?",
      answer: "Sim! Oferecemos garantia de 7 dias. Se você participar das aulas, implementar as estratégias e não ver resultados, devolvemos seu investimento."
    },
    {
      question: "Consigo recuperar o investimento em quanto tempo?",
      answer: "Nossos alunos mais dedicados conseguem recuperar o investimento nas primeiras 48 horas após implementarem nossas estratégias."
    }
  ];

  const toggleQuestion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Perguntas Frequentes</h2>
          <p className="text-lg text-gray-700">
            Esclarecemos as principais dúvidas sobre a mentoria Arkad Select.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border-b border-gray-200 pb-4"
            >
              <button
                className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-lg font-medium text-blue-900">{item.question}</h3>
                {openIndex === index ? 
                  <ChevronUp className="text-blue-500" /> : 
                  <ChevronDown className="text-blue-500" />
                }
              </button>
              <div 
                className={`mt-2 text-gray-700 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;