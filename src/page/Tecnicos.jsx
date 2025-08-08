import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Cpu,
  Shield,
  Zap,
  Settings,
  Monitor,
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Award,
  TrendingUp,
  Users,
  BookOpen
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
            Cursos Técnicos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Formação técnica de qualidade para você ingressar rapidamente no mercado de trabalho. Cursos reconhecidos e com alta empregabilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Ver Cursos Técnicos
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

// Courses Section
const CoursesSection = () => {
  const courses = [
    {
      title: "Técnico em Informática",
      duration: "18 meses",
      modality: "Presencial",
      icon: <Monitor className="w-8 h-8" />,
      description: "Desenvolva sistemas, configure redes e domine as principais tecnologias da informação.",
      skills: ["Programação", "Redes de Computadores", "Banco de Dados", "Suporte Técnico"],
      marketAreas: ["Desenvolvimento de Software", "Suporte Técnico", "Administração de Redes"]
    },
    {
      title: "Técnico em Segurança do Trabalho",
      duration: "24 meses",
      modality: "Presencial",
      icon: <Shield className="w-8 h-8" />,
      description: "Atue na prevenção de acidentes e promoção da saúde e segurança no ambiente de trabalho.",
      skills: ["Legislação Trabalhista", "Ergonomia", "Prevenção de Acidentes", "Gestão de Riscos"],
      marketAreas: ["Indústria", "Construção Civil", "Serviços", "Consultoria"]
    },
    {
      title: "Técnico em Eletrônica",
      duration: "18 meses",
      modality: "Presencial",
      icon: <Cpu className="w-8 h-8" />,
      description: "Projete, monte e mantenha equipamentos eletrônicos e sistemas automatizados.",
      skills: ["Circuitos Eletrônicos", "Microcontroladores", "Automação", "Instrumentação"],
      marketAreas: ["Automação Industrial", "Telecomunicações", "Manutenção", "Desenvolvimento"]
    },
    {
      title: "Técnico em Eletrotécnica",
      duration: "18 meses",
      modality: "Presencial",
      icon: <Zap className="w-8 h-8" />,
      description: "Trabalhe com instalações elétricas, sistemas de energia e automação predial.",
      skills: ["Instalações Elétricas", "Máquinas Elétricas", "Automação Predial", "Energia Renovável"],
      marketAreas: ["Concessionárias de Energia", "Indústria", "Construção Civil", "Manutenção"]
    },
    {
      title: "Técnico em Mecatrônica",
      duration: "24 meses",
      modality: "Presencial",
      icon: <Settings className="w-8 h-8" />,
      description: "Integre conhecimentos de mecânica, eletrônica e informática em sistemas automatizados.",
      skills: ["Automação Industrial", "Robótica", "CLP", "Pneumática e Hidráulica"],
      marketAreas: ["Automação Industrial", "Robótica", "Manutenção Industrial", "Desenvolvimento"]
    },
    {
      title: "Técnico em Redes de Computadores",
      duration: "18 meses",
      modality: "Presencial",
      icon: <Wrench className="w-8 h-8" />,
      description: "Projete, implemente e administre redes de computadores e infraestrutura de TI.",
      skills: ["Redes TCP/IP", "Segurança de Redes", "Servidores", "Cabeamento Estruturado"],
      marketAreas: ["Administração de Redes", "Segurança da Informação", "Suporte Técnico", "Consultoria"]
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Cursos Técnicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Formação técnica especializada com foco em tecnologia e inovação para o mercado de trabalho.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <div className="w-16 h-16 senac-gradient rounded-lg flex items-center justify-center text-white mb-4">
                    {course.icon}
                  </div>
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
                      <h4 className="font-semibold mb-2 text-sm">Competências Desenvolvidas:</h4>
                      <div className="space-y-1">
                        {course.skills.map((skill, i) => (
                          <div key={i} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-orange-400 mr-2" />
                            <span className="text-xs">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Áreas de Atuação:</h4>
                      <div className="flex flex-wrap gap-1">
                        {course.marketAreas.map((area, i) => (
                          <span key={i} className="px-2 py-1 bg-muted rounded text-xs">
                            {area}
                          </span>
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

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certificação Reconhecida",
      description: "Diploma técnico reconhecido pelo MEC e valorizado pelo mercado."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Alta Empregabilidade",
      description: "90% dos nossos técnicos conseguem emprego em até 6 meses."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professores Especialistas",
      description: "Corpo docente com experiência prática no mercado de trabalho."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Metodologia Prática",
      description: "Aprendizado baseado em projetos reais e laboratórios equipados."
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
            Vantagens dos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Cursos Técnicos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formação rápida e eficiente para você entrar no mercado de trabalho com qualificação técnica.
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

// Requirements Section
const RequirementsSection = () => {
  const requirements = [
    "Ensino Médio completo ou cursando (para cursos concomitantes)",
    "Idade mínima de 16 anos",
    "Documentação pessoal completa",
    "Aprovação no processo seletivo"
  ];

  const process = [
    {
      step: "01",
      title: "Inscrição",
      description: "Faça sua inscrição online ou presencialmente."
    },
    {
      step: "02",
      title: "Processo Seletivo",
      description: "Participe da prova ou análise de histórico escolar."
    },
    {
      step: "03",
      title: "Matrícula",
      description: "Efetue sua matrícula e reserve sua vaga."
    },
    {
      step: "04",
      title: "Início das Aulas",
      description: "Comece sua formação técnica."
    }
  ];

  return (
    <section className="py-20 bg-background">
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
              <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Processo</span> de Ingresso
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
            Inscreva-se Agora
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
    { number: "15+", label: "Cursos Técnicos Disponíveis" },
    { number: "90%", label: "Taxa de Empregabilidade" },
    { number: "2000+", label: "Técnicos Formados" },
    { number: "18", label: "Meses de Duração Média" }
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

export default function Tecnicos() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <BenefitsSection />
      <RequirementsSection />
      <StatsSection />
    </>
  );
}

