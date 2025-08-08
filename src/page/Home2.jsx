import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
} from 'lucide-react';
import { Button } from '../components/ui/button';
import '../App.css';
import PopularTopicsSection from "../components/core/PopularTopicsSection";

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="min-h-[50vh] flex items-center justify-center relative overflow-hidden tech-background">
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

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "5000+", label: "Alunos formados" },
    { number: "200+", label: "Empresas parceiras" },
    { number: "50+", label: "Cursos disponíveis" },
    { number: "95%", label: "Taxa de empregabilidade" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
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

export default function Home() {
  return (
    <>
      <HeroSection />
      <PopularTopicsSection />
      <StatsSection />
      <WhyChooseUsSection />
    </>
  );
}


