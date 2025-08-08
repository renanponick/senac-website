import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Calendar,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Building,
  Lightbulb,
  Target,
  Zap
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
            Ensino Médio Integrado ao Técnico
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Complete o ensino médio e obtenha uma formação técnica ao mesmo tempo. Duas certificações em um só curso para acelerar sua entrada no mercado de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Conheça os Cursos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black">
              Processo Seletivo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// What is Section
const WhatIsSection = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Dupla Certificação",
      description: "Conclua o ensino médio e obtenha certificação técnica simultaneamente."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Otimização do Tempo",
      description: "Economize tempo integrando formação geral e técnica em um só curso."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Entrada Antecipada no Mercado",
      description: "Ingresse no mercado de trabalho mais cedo com qualificação técnica."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Metodologia Inovadora",
      description: "Aprendizado integrado que conecta teoria e prática profissional."
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
            O que é o <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Ensino Médio Integrado</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Uma modalidade de ensino que combina a formação geral do ensino médio com a educação profissional técnica, oferecendo uma formação completa e integrada.
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

// Courses Section
const CoursesSection = () => {
  const courses = [
    {
      title: "Ensino Médio Integrado ao Técnico em Informática",
      duration: "3 anos",
      modality: "Presencial",
      description: "Combine a formação do ensino médio com conhecimentos em programação, redes e sistemas.",
      subjects: ["Matemática", "Português", "Física", "Programação", "Redes", "Banco de Dados"],
      opportunities: ["Desenvolvedor", "Suporte Técnico", "Analista de Sistemas"]
    },
    {
      title: "Ensino Médio Integrado ao Técnico em Eletrônica",
      duration: "3 anos",
      modality: "Presencial",
      description: "Formação completa em eletrônica integrada ao currículo do ensino médio.",
      subjects: ["Matemática", "Física", "Química", "Circuitos Eletrônicos", "Microcontroladores", "Automação"],
      opportunities: ["Técnico em Eletrônica", "Automação Industrial", "Manutenção"]
    },
    {
      title: "Ensino Médio Integrado ao Técnico em Administração",
      duration: "3 anos",
      modality: "Presencial",
      description: "Desenvolva competências administrativas junto com a formação básica do ensino médio.",
      subjects: ["Matemática", "Português", "História", "Gestão Empresarial", "Contabilidade", "Marketing"],
      opportunities: ["Assistente Administrativo", "Auxiliar Contábil", "Atendimento ao Cliente"]
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Cursos Integrados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Cursos que combinam a base curricular do ensino médio com formação técnica especializada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {course.modality}
                    </div>
                  </div>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Principais Disciplinas:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.subjects.map((subject, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Oportunidades de Carreira:</h4>
                      <div className="space-y-1">
                        {course.opportunities.map((opportunity, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-orange-400 mr-2" />
                            <span className="text-xs">{opportunity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="p-0 text-orange-400 hover:text-orange-300 group w-full justify-start mt-4">
                    Saiba mais
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

// Differentials Section
const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificação Dupla",
      description: "Diploma de ensino médio + certificado técnico reconhecido pelo MEC."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professores Qualificados",
      description: "Corpo docente especializado em educação integrada."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Infraestrutura Completa",
      description: "Laboratórios modernos e salas de aula equipadas."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Metodologia Ativa",
      description: "Aprendizagem baseada em projetos e práticas profissionais."
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Diferenciais</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 senac-gradient rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {differential.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{differential.title}</h3>
              <p className="text-muted-foreground">{differential.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Requirements Section
const RequirementsSection = () => {
  const requirements = [
    "Conclusão do ensino fundamental",
    "Idade entre 14 e 18 anos",
    "Aprovação no processo seletivo",
    "Documentação pessoal completa"
  ];

  const process = [
    {
      step: "01",
      title: "Inscrição",
      description: "Realize sua inscrição no período determinado."
    },
    {
      step: "02",
      title: "Prova de Seleção",
      description: "Participe da prova de conhecimentos gerais."
    },
    {
      step: "03",
      title: "Resultado",
      description: "Acompanhe a divulgação dos resultados."
    },
    {
      step: "04",
      title: "Matrícula",
      description: "Efetue sua matrícula e inicie os estudos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500/10 to-purple-500/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Requisitos</span> para Ingresso
            </h2>
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Processo</span> Seletivo
            </h2>
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 senac-gradient rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
            Inscreva-se no Processo Seletivo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Stats Section
const StatsSection = () => {
  const stats = [
    { number: "3", label: "Anos de Duração" },
    { number: "2", label: "Certificações Obtidas" },
    { number: "85%", label: "Taxa de Aprovação no ENEM" },
    { number: "500+", label: "Alunos Formados" }
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Resultados</span>
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

export default function EnsinoMedio() {
  return (
    <>
      <HeroSection />
      <WhatIsSection />
      <CoursesSection />
      <DifferentialsSection />
      <RequirementsSection />
      <StatsSection />
    </>
  );
}

