import React from "react";
import Logo from '../../assets/logo_senac_branco.svg';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="SENAC Logo" className="w-10 h-10" />
          <span className="text-xl font-bold">SENAC Hub</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="#empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</a>
          <a href="#graduacao" className="hover:text-orange-400 transition-colors">Graduação</a>
          <a href="#tecnicos" className="hover:text-orange-400 transition-colors">Técnicos</a>
          <a href="#imersivos" className="hover:text-orange-400 transition-colors">Cursos Imersivos</a>
          <a href="#certificacoes" className="hover:text-orange-400 transition-colors">Certificações</a>
        </nav>
        
        <Button className="hidden md:block senac-gradient text-white hover:opacity-90">
          Fale Conosco
        </Button>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</a>
            <a href="#graduacao" className="hover:text-orange-400 transition-colors">Graduação</a>
            <a href="#tecnicos" className="hover:text-orange-400 transition-colors">Técnicos</a>
            <a href="#imersivos" className="hover:text-orange-400 transition-colors">Cursos Imersivos</a>
            <a href="#certificacoes" className="hover:text-orange-400 transition-colors">Certificações</a>
            <Button className="senac-gradient text-white hover:opacity-90 w-full">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};