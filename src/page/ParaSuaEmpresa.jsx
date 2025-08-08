import React from 'react';
import { motion } from 'framer-motion';
import {
  Building,
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Lightbulb,
  Briefcase
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import '../App.css';

// Hero Section
const HeroSection = () => {
  return (
    <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden tech-background">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Soluções Corporativas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Transforme sua empresa com soluções personalizadas de educação corporativa. Desenvolvemos talentos e impulsionamos resultados através da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              Fale com Especialista
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Solutions Section
const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Setor Público",
      description: "Soluções especializadas para governos, secretarias e prefeituras com foco em inovação e eficiência.",
      features: ["Capacitação de servidores", "Transformação digital", "Gestão pública moderna"]
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Empresas Privadas",
      description: "Programas customizados para empresas que buscam crescimento e competitividade no mercado.",
      features: ["Treinamento técnico", "Liderança e gestão", "Inovação tecnológica"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Terceiro Setor",
      description: "Capacitação especializada para ONGs e OSCIPs com foco em impacto social e sustentabilidade.",
      features: ["Gestão de projetos", "Captação de recursos", "Tecnologia social"]
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
            Soluções para <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Todos os Setores</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Desenvolvemos programas de excelência adaptados às necessidades específicas de cada organização.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-2xl mb-4">{solution.title}</CardTitle>
                  <CardDescription className="text-base">{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-orange-400 mr-3" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
    { number: "96,7%", label: "Cumpriu o prazo acordado" },
    { number: "95,1%", label: "Aplicabilidade prática na empresa" },
    { number: "95,1%", label: "Atendeu ao que foi contratado" },
    { number: "95%", label: "Acompanhamento durante prestação" },
    { number: "93,4%", label: "Investimento X Benefício" },
    { number: "95,07%", label: "Média de Ótimo/Bom" }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Índices de <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Satisfação</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossos resultados comprovam a excelência dos serviços prestados às empresas parceiras.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
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
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análise de Necessidades",
      description: "Realizamos um diagnóstico detalhado das necessidades específicas da sua organização."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Proposta Customizada",
      description: "Desenvolvemos uma solução sob medida alinhada aos objetivos estratégicos da empresa."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Execução Especializada",
      description: "Nossa equipe de consultores experientes implementa a solução com excelência."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Acompanhamento e Resultados",
      description: "Monitoramos os resultados e garantimos o desenvolvimento contínuo das competências."
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
            Nosso <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Processo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Metodologia comprovada para criar soluções corporativas que geram resultados efetivos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Transformar</span> sua Empresa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Entre em contato conosco e descubra como podemos impulsionar o crescimento da sua organização.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Telefone</h3>
            <p className="text-muted-foreground">(47) 3481-8900</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">E-mail</h3>
            <p className="text-muted-foreground">empresarial@sc.senac.br</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Localização</h3>
            <p className="text-muted-foreground">Joinville - SC</p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
            Solicitar Atendimento Personalizado
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default function ParaSuaEmpresa() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <StatsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}

