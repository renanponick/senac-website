import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Shield,
  Zap,
  Cloud,
  Database,
  Code,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  BookOpen,
  Target,
  Star
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
            Certificações
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Valide suas competências com certificações reconhecidas mundialmente. Centro autorizado Pearson VUE para exames de certificação em TI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Ver Certificações Disponíveis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              Agendar Exame
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Certifications Section
const CertificationsSection = () => {
  const certifications = [
    {
      title: "Microsoft Azure",
      icon: <Cloud className="w-8 h-8" />,
      description: "Certificações em computação em nuvem da Microsoft Azure.",
      exams: ["AZ-900: Azure Fundamentals", "AZ-104: Azure Administrator", "AZ-204: Azure Developer"],
      level: "Fundamental a Expert",
      duration: "2-4 horas",
      benefits: ["Reconhecimento global", "Aumento salarial", "Oportunidades de carreira"]
    },
    {
      title: "Amazon AWS",
      icon: <Shield className="w-8 h-8" />,
      description: "Certificações em serviços de nuvem da Amazon Web Services.",
      exams: ["AWS Cloud Practitioner", "AWS Solutions Architect", "AWS Developer"],
      level: "Fundamental a Professional",
      duration: "1.5-3 horas",
      benefits: ["Validação de expertise", "Credibilidade profissional", "Networking"]
    },
    {
      title: "CompTIA",
      icon: <Zap className="w-8 h-8" />,
      description: "Certificações fundamentais em TI e segurança da informação.",
      exams: ["CompTIA A+", "CompTIA Network+", "CompTIA Security+"],
      level: "Entry-level a Advanced",
      duration: "90 minutos",
      benefits: ["Base sólida em TI", "Reconhecimento internacional", "Progressão de carreira"]
    },
    {
      title: "Oracle",
      icon: <Database className="w-8 h-8" />,
      description: "Certificações em banco de dados e tecnologias Oracle.",
      exams: ["Oracle Database SQL", "Oracle Cloud Infrastructure", "Java SE"],
      level: "Associate a Professional",
      duration: "2-3 horas",
      benefits: ["Expertise em banco de dados", "Valorização no mercado", "Especialização técnica"]
    },
    {
      title: "Cisco",
      icon: <Code className="w-8 h-8" />,
      description: "Certificações em redes e infraestrutura de TI.",
      exams: ["CCNA", "CCNP", "CCIE"],
      level: "Associate a Expert",
      duration: "90-120 minutos",
      benefits: ["Expertise em redes", "Reconhecimento mundial", "Altos salários"]
    },
    {
      title: "VMware",
      icon: <Target className="w-8 h-8" />,
      description: "Certificações em virtualização e infraestrutura de nuvem.",
      exams: ["VCP-DCV", "VCP-NV", "VCAP"],
      level: "Professional a Advanced",
      duration: "2-4 horas",
      benefits: ["Especialização em virtualização", "Demanda alta no mercado", "Inovação tecnológica"]
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
            Certificações <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Disponíveis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Oferecemos uma ampla gama de certificações das principais empresas de tecnologia do mundo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <div className="w-16 h-16 senac-gradient rounded-lg flex items-center justify-center text-white mb-4">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {cert.duration}
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-1" />
                      {cert.level}
                    </div>
                  </div>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Exames Disponíveis:</h4>
                      <div className="space-y-1">
                        {cert.exams.map((exam, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-orange-400 mr-2" />
                            <span className="text-xs">{exam}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Benefícios:</h4>
                      <div className="flex flex-wrap gap-1">
                        {cert.benefits.map((benefit, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 text-orange-400 hover:text-orange-300 group w-full justify-start mt-4">
                    Agendar exame
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Reconhecimento Mundial",
      description: "Certificações aceitas e valorizadas em todo o mundo."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Aumento Salarial",
      description: "Profissionais certificados ganham até 25% mais."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Networking",
      description: "Acesso a comunidades exclusivas de profissionais certificados."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Desenvolvimento Contínuo",
      description: "Mantenha-se atualizado com as últimas tecnologias."
    }
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
            Por que se <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Certificar</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As certificações são fundamentais para validar suas competências e acelerar sua carreira em TI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Preparation Section
const PreparationSection = () => {
  const steps = [
    {
      step: "01",
      title: "Escolha sua Certificação",
      description: "Identifique qual certificação alinha com seus objetivos de carreira."
    },
    {
      step: "02",
      title: "Prepare-se",
      description: "Estude com nossos materiais e cursos preparatórios."
    },
    {
      step: "03",
      title: "Agende o Exame",
      description: "Marque sua prova em nosso centro autorizado Pearson VUE."
    },
    {
      step: "04",
      title: "Realize o Exame",
      description: "Faça sua prova em ambiente seguro e controlado."
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
            Como se <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Preparar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e estruturado para você conquistar sua certificação.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full">
                  <ArrowRight className="w-6 h-6 text-orange-400 mx-auto" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
            Comece sua Preparação
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      certification: "AWS Solutions Architect",
      text: "A certificação AWS mudou minha carreira. Consegui uma promoção e aumento salarial significativo.",
      rating: 5,
      company: "Tech Solutions"
    },
    {
      name: "Maria Santos",
      certification: "Microsoft Azure Administrator",
      text: "O centro de exames do SENAC é excelente. Ambiente profissional e suporte completo.",
      rating: 5,
      company: "Cloud Innovations"
    },
    {
      name: "Pedro Costa",
      certification: "CompTIA Security+",
      text: "Certificação fundamental para quem quer trabalhar com segurança da informação.",
      rating: 5,
      company: "CyberSec Corp"
    }
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
            Histórias de <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Sucesso</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.certification}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
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
    { number: "50+", label: "Certificações Disponíveis" },
    { number: "1000+", label: "Profissionais Certificados" },
    { number: "95%", label: "Taxa de Aprovação" },
    { number: "25%", label: "Aumento Salarial Médio" }
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Números</span>
          </h2>
        </motion.div>

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

export default function Certificacoes() {
  return (
    <>
      <HeroSection />
      <CertificationsSection />
      <BenefitsSection />
      <PreparationSection />
      <TestimonialsSection />
      <StatsSection />
    </>
  );
}

