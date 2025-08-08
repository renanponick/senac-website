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
  Building
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
            Graduação
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Forme-se em uma das melhores instituições de ensino superior do país. Cursos reconhecidos pelo MEC com foco em tecnologia e inovação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="senac-gradient text-white hover:opacity-90 glow-effect">
              Ver Cursos Disponíveis
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
      title: "Análise e Desenvolvimento de Sistemas",
      duration: "5 semestres",
      modality: "Presencial/EAD",
      description: "Forme-se para desenvolver sistemas computacionais inovadores e soluções tecnológicas.",
      highlights: ["Programação Avançada", "Banco de Dados", "Desenvolvimento Web", "Mobile"]
    },
    {
      title: "Gestão da Tecnologia da Informação",
      duration: "4 semestres",
      modality: "Presencial/EAD",
      description: "Lidere projetos de TI e gerencie infraestruturas tecnológicas em organizações.",
      highlights: ["Gestão de Projetos", "Segurança da Informação", "Cloud Computing", "Business Intelligence"]
    },
    {
      title: "Design Digital",
      duration: "6 semestres",
      modality: "Presencial",
      description: "Crie experiências digitais únicas combinando criatividade e tecnologia.",
      highlights: ["UX/UI Design", "Design Thinking", "Prototipagem", "Marketing Digital"]
    },
    {
      title: "Gestão Empresarial",
      duration: "4 semestres",
      modality: "Presencial/EAD",
      description: "Desenvolva competências para liderar e inovar no mundo dos negócios.",
      highlights: ["Empreendedorismo", "Gestão Financeira", "Marketing", "Liderança"]
    },
    {
      title: "Jogos Digitais",
      duration: "6 semestres",
      modality: "Presencial",
      description: "Entre no universo dos games e desenvolva jogos para diferentes plataformas.",
      highlights: ["Game Design", "Programação de Jogos", "Modelagem 3D", "Realidade Virtual"]
    },
    {
      title: "Redes de Computadores",
      duration: "5 semestres",
      modality: "Presencial",
      description: "Especialize-se em infraestrutura de redes e comunicação de dados.",
      highlights: ["Redes TCP/IP", "Segurança de Redes", "Administração de Servidores", "IoT"]
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
            Nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Cursos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Cursos superiores de tecnologia reconhecidos pelo MEC, com metodologia inovadora e corpo docente especializado.
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
                  <div className="space-y-2 mb-4">
                    {course.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 text-orange-400 hover:text-orange-300 group w-full justify-start">
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
      title: "Reconhecimento MEC",
      description: "Todos os nossos cursos são reconhecidos pelo Ministério da Educação."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corpo Docente Especializado",
      description: "Professores com experiência acadêmica e mercado de trabalho."
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Infraestrutura Moderna",
      description: "Laboratórios equipados com tecnologia de ponta."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Empregabilidade",
      description: "95% dos nossos graduados estão empregados em até 6 meses."
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
            Por que escolher nossa <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Graduação</span>?
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

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Inscrição",
      description: "Faça sua inscrição online ou presencialmente em uma de nossas unidades."
    },
    {
      step: "02",
      title: "Processo Seletivo",
      description: "Participe do nosso processo seletivo simplificado e acessível."
    },
    {
      step: "03",
      title: "Matrícula",
      description: "Efetue sua matrícula e garante sua vaga no curso escolhido."
    },
    {
      step: "04",
      title: "Início das Aulas",
      description: "Comece sua jornada acadêmica com metodologia inovadora."
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
            Como <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Ingressar</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Processo simples e transparente para você começar sua graduação.
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
            Inscreva-se Agora
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
      name: "Ana Silva",
      course: "Análise e Desenvolvimento de Sistemas",
      text: "O curso me preparou perfeitamente para o mercado de trabalho. Hoje trabalho como desenvolvedora full-stack em uma startup de tecnologia.",
      rating: 5
    },
    {
      name: "Carlos Santos",
      course: "Gestão da Tecnologia da Informação",
      text: "A metodologia do SENAC é diferenciada. Aprendi não só teoria, mas também a aplicar os conhecimentos na prática.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      course: "Design Digital",
      text: "Os professores são excelentes e a infraestrutura é de primeira. Recomendo para quem quer uma formação de qualidade.",
      rating: 5
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
            O que nossos <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Alunos</span> dizem
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
                    <p className="text-sm text-muted-foreground">{testimonial.course}</p>
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

export default function Graduacao() {
  return (
    <>
      <HeroSection />
      <CoursesSection />
      <DifferentialsSection />
      <ProcessSection />
      <TestimonialsSection />
    </>
  );
}

