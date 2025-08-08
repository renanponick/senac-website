import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './assets/logo_senac_branco.svg';
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
import './App.css';

// Header Component
const Header = () => {
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

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden tech-background">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            SENAC Hub de Tecnologia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Seu futuro tecnológico começa aqui. Conecte-se com a inovação, domine as tecnologias do amanhã e transforme sua carreira.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Conheça nossos cursos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              Para sua empresa
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Services Section
const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Para sua Empresa",
      description: "Soluções tecnológicas personalizadas para o crescimento da sua empresa",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Graduação",
      description: "Sua jornada acadêmica em tecnologia começa aqui",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Técnicos",
      description: "Formação técnica de excelência para o mercado de trabalho",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cursos Imersivos",
      description: "Mergulhe no conhecimento: cursos intensivos e práticos",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificações",
      description: "Valide seu conhecimento: certificações reconhecidas globalmente",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore nossas <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">soluções</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de programas educacionais e soluções corporativas para impulsionar sua carreira e negócio na era digital.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="mt-4 p-0 text-orange-400 hover:text-orange-300">
                    Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Alunos formados" },
    { number: "200+", label: "Empresas parceiras" },
    { number: "50+", label: "Cursos disponíveis" },
    { number: "95%", label: "Taxa de empregabilidade" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Foco em Tecnologia",
      description: "Especialização e profundidade nos temas tecnológicos mais relevantes do mercado."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conexão com o Mercado",
      description: "Programas alinhados às demandas do mercado de trabalho e parcerias com empresas líderes."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Infraestrutura de Ponta",
      description: "Laboratórios modernos e equipamentos de última geração para uma experiência completa."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">SENAC Hub</span>?
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
              <li><a href="#" className="hover:text-orange-400 transition-colors">Graduação</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Técnicos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Imersivos</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Certificações</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Parcerias</a></li>
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhyChooseUsSection />
      <Footer />
    </div>
  );
}

export default App;
