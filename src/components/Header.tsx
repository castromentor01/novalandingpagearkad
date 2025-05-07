import React from 'react';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full z-50 bg-gradient-to-r from-blue-900/80 to-purple-700/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Arkad Select
        </div>
        
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-200 hover:text-white transition">Sobre</a>
          <a href="#features" className="text-gray-200 hover:text-white transition">O que vai aprender</a>
          <a href="#testimonials" className="text-gray-200 hover:text-white transition">Depoimentos</a>
          <a href="#mentors" className="text-gray-200 hover:text-white transition">Mentores</a>
          <a href="#faq" className="text-gray-200 hover:text-white transition">FAQ</a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-900 to-purple-700 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <a href="#about" className="text-gray-200 hover:text-white transition" onClick={() => setMenuOpen(false)}>Sobre</a>
            <a href="#features" className="text-gray-200 hover:text-white transition" onClick={() => setMenuOpen(false)}>O que vai aprender</a>
            <a href="#testimonials" className="text-gray-200 hover:text-white transition" onClick={() => setMenuOpen(false)}>Depoimentos</a>
            <a href="#mentors" className="text-gray-200 hover:text-white transition" onClick={() => setMenuOpen(false)}>Mentores</a>
            <a href="#faq" className="text-gray-200 hover:text-white transition" onClick={() => setMenuOpen(false)}>FAQ</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;