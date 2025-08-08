import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Briefcase, 
  GraduationCap, 
  Zap, 
  Award, 
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Menu,
  X
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import CoursesSection from './components/core/CoursesSection';
import Home from './page/Home';
import ParaSuaEmpresa from './page/ParaSuaEmpresa';
import Graduacao from './page/Graduacao';
import Tecnicos from './page/Tecnicos';
import EnsinoMedio from './page/EnsinoMedio';
import Certificacoes from './page/Certificacoes';
import './App.css';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 senac-gradient rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold">SENAC Hub</span>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="/senac-website/" className="hover:text-orange-400 transition-colors">Home</a>
          <a href="/senac-website/empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</a>
          <a href="/senac-website/graduacao" className="hover:text-orange-400 transition-colors">Graduação</a>
          <a href="/senac-website/tecnicos" className="hover:text-orange-400 transition-colors">Técnicos</a>
          <a href="/senac-website/ensino-medio" className="hover:text-orange-400 transition-colors">Ensino Médio</a>
          <a href="/senac-website/certificacoes" className="hover:text-orange-400 transition-colors">Certificações</a>
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
            <a href="/senac-website/" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="/senac-website/empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</a>
            <a href="/senac-website/graduacao" className="hover:text-orange-400 transition-colors">Graduação</a>
            <a href="/senac-website/tecnicos" className="hover:text-orange-400 transition-colors">Técnicos</a>
            <a href="/senac-website/ensino-medio" className="hover:text-orange-400 transition-colors">Ensino Médio</a>
            <a href="/senac-website/certificacoes" className="hover:text-orange-400 transition-colors">Certificações</a>
            <Button className="senac-gradient text-white hover:opacity-90 w-full">
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 senac-gradient rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">SENAC Hub</span>
            </div>
            <p className="text-muted-foreground">
              Transformando o futuro através da educação tecnológica em Joinville/SC.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Cursos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/senac-website/graduacao" className="hover:text-orange-400 transition-colors">Graduação</a></li>
              <li><a href="/senac-website/tecnicos" className="hover:text-orange-400 transition-colors">Técnicos</a></li>
              <li><a href="/senac-website/ensino-medio" className="hover:text-orange-400 transition-colors">Ensino Médio</a></li>
              <li><a href="/senac-website/certificacoes" className="hover:text-orange-400 transition-colors">Certificações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre nós</a></li>
              <li><a href="/senac-website/empresa" className="hover:text-orange-400 transition-colors">Para sua Empresa</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Joinville/SC</p>
              <p>contato@senachub.sc.senac.br</p>
              <p>(47) 3481-8800</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 SENAC Hub de Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <Routes>
          <Route path="/senac-website/" element={<Home />} />
          <Route path="/senac-website/empresa" element={<ParaSuaEmpresa />} />
          <Route path="/senac-website/graduacao" element={<Graduacao />} />
          <Route path="/senac-website/tecnicos" element={<Tecnicos />} />
          <Route path="/senac-website/ensino-medio" element={<EnsinoMedio />} />
          <Route path="/senac-website/certificacoes" element={<Certificacoes />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
