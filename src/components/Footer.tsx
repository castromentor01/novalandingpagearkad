import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-4">Arkad Select</h3>
            <p className="max-w-xs">
              Transformando amadores em profissionais de tráfego pago com resultados comprovados.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#features" className="hover:text-white transition">O que vai aprender</a></li>
                <li><a href="#testimonials" className="hover:text-white transition">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition">Política de Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contato</h4>
              <ul className="space-y-2">
                <li><a href="https://www.youtube.com/watch?v=SPW8xi3nRAo&t=625s" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Youtube</a></li>
                <li><a href="https://www.instagram.com/mentoriaarkadselect/" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Arkad Select. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;