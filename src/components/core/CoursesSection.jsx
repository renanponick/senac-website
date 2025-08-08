import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Zap, 
  Award,
  ArrowRight,
  Clock,
  Users,
  MapPin
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const CoursesSection = () => {
  const courseCategories = [
    {
      id: 'empresa',
      title: 'Para sua Empresa',
      icon: <Briefcase className="w-8 h-8" />,
      description: 'Soluções tecnológicas personalizadas para o crescimento da sua empresa',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/20',
      totalFormations: 12,
      formations: [
        {
          title: 'Transformação Digital Empresarial',
          courses: 8,
          duration: '120h',
          modality: 'Presencial + EAD',
          description: 'Capacite sua equipe para liderar a transformação digital'
        },
        {
          title: 'Desenvolvimento de Software Corporativo',
          courses: 12,
          duration: '180h',
          modality: 'Presencial',
          description: 'Soluções sob medida para necessidades específicas'
        },
        {
          title: 'Cibersegurança Empresarial',
          courses: 6,
          duration: '80h',
          modality: 'Híbrido',
          description: 'Proteja sua empresa contra ameaças digitais'
        },
        {
          title: 'Análise de Dados para Negócios',
          courses: 10,
          duration: '150h',
          modality: 'EAD',
          description: 'Tome decisões baseadas em dados'
        }
      ]
    },
    {
      id: 'graduacao',
      title: 'Graduação',
      icon: <GraduationCap className="w-8 h-8" />,
      description: 'Sua jornada acadêmica em tecnologia começa aqui',
      color: 'from-purple-500 to-blue-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      totalFormations: 8,
      formations: [
        {
          title: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
          courses: 40,
          duration: '5 semestres',
          modality: 'Presencial',
          description: 'Forme-se para criar soluções tecnológicas inovadoras'
        },
        {
          title: 'Tecnologia em Redes de Computadores',
          courses: 38,
          duration: '5 semestres',
          modality: 'Presencial',
          description: 'Especialista em infraestrutura e segurança de redes'
        },
        {
          title: 'Tecnologia em Ciência de Dados',
          courses: 42,
          duration: '5 semestres',
          modality: 'Híbrido',
          description: 'Transforme dados em insights estratégicos'
        },
        {
          title: 'Tecnologia em Jogos Digitais',
          courses: 45,
          duration: '5 semestres',
          modality: 'Presencial',
          description: 'Desenvolva jogos e experiências interativas'
        }
      ]
    },
    {
      id: 'tecnicos',
      title: 'Técnicos',
      icon: <Code className="w-8 h-8" />,
      description: 'Formação técnica de excelência para o mercado de trabalho',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      totalFormations: 15,
      formations: [
        {
          title: 'Técnico em Informática',
          courses: 20,
          duration: '18 meses',
          modality: 'Presencial',
          description: 'Base sólida em tecnologia da informação'
        },
        {
          title: 'Técnico em Desenvolvimento de Sistemas',
          courses: 24,
          duration: '18 meses',
          modality: 'Presencial',
          description: 'Programação e desenvolvimento de aplicações'
        },
        {
          title: 'Técnico em Redes de Computadores',
          courses: 22,
          duration: '18 meses',
          modality: 'Presencial',
          description: 'Administração e manutenção de redes'
        },
        {
          title: 'Técnico em Segurança do Trabalho Digital',
          courses: 18,
          duration: '15 meses',
          modality: 'Híbrido',
          description: 'Segurança em ambientes digitais'
        }
      ]
    },
    {
      id: 'imersivos',
      title: 'Cursos Imersivos',
      icon: <Zap className="w-8 h-8" />,
      description: 'Mergulhe no conhecimento: cursos intensivos e práticos',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      totalFormations: 25,
      formations: [
        {
          title: 'Bootcamp Full Stack JavaScript',
          courses: 1,
          duration: '12 semanas',
          modality: 'Intensivo',
          description: 'Do zero ao mercado de trabalho em desenvolvimento web'
        },
        {
          title: 'Imersão em Python e Data Science',
          courses: 1,
          duration: '8 semanas',
          modality: 'Intensivo',
          description: 'Análise de dados e machine learning'
        },
        {
          title: 'Workshop de Cibersegurança',
          courses: 1,
          duration: '40h',
          modality: 'Presencial',
          description: 'Técnicas avançadas de proteção digital'
        },
        {
          title: 'Desenvolvimento Mobile com React Native',
          courses: 1,
          duration: '6 semanas',
          modality: 'Híbrido',
          description: 'Crie apps para iOS e Android'
        }
      ]
    },
    {
      id: 'certificacoes',
      title: 'Certificações',
      icon: <Award className="w-8 h-8" />,
      description: 'Valide seu conhecimento: certificações reconhecidas globalmente',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      totalFormations: 18,
      formations: [
        {
          title: 'Preparatório Microsoft Azure Fundamentals',
          courses: 4,
          duration: '60h',
          modality: 'EAD',
          description: 'Certificação oficial Microsoft Azure'
        },
        {
          title: 'Preparatório AWS Cloud Practitioner',
          courses: 5,
          duration: '80h',
          modality: 'Híbrido',
          description: 'Fundamentos de computação em nuvem AWS'
        },
        {
          title: 'Certificação Cisco CCNA',
          courses: 8,
          duration: '120h',
          modality: 'Presencial',
          description: 'Networking e infraestrutura Cisco'
        },
        {
          title: 'Google Cloud Professional',
          courses: 6,
          duration: '100h',
          modality: 'EAD',
          description: 'Especialização em Google Cloud Platform'
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('empresa');

  const selectedCategoryData = courseCategories.find(cat => cat.id === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Formações e <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">cursos de tecnologia</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Sequências de cursos e conteúdos para você mergulhar em tecnologia e se preparar para os próximos desafios da sua carreira.
          </p>
          
          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-orange-400">Do básico ao avançado</h3>
              <p className="text-muted-foreground">Aprenda de maneira imersiva e dê os próximos passos rumo ao seu objetivo.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Um guia de aprendizado</h3>
              <p className="text-muted-foreground">Elaborado por especialistas para que você conheça o tema de uma maneira completa.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Evolua sua carreira</h3>
              <p className="text-muted-foreground">Nossos cursos e conteúdos preparam você para desafios reais do mercado.</p>
            </div>
          </div>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {courseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all duration-300 ${
                selectedCategory === category.id
                  ? `${category.bgColor} ${category.borderColor} text-foreground`
                  : 'bg-card border-border text-muted-foreground hover:bg-accent'
              }`}
            >
              <div className={`w-6 h-6 rounded bg-gradient-to-r ${category.color} flex items-center justify-center text-white text-sm`}>
                {React.cloneElement(category.icon, { className: 'w-4 h-4' })}
              </div>
              <span className="font-medium">{category.title}</span>
              <span className="text-xs bg-muted px-2 py-1 rounded">
                {category.totalFormations}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Selected Category Content */}
        {selectedCategoryData && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Header */}
            <div className={`${selectedCategoryData.bgColor} ${selectedCategoryData.borderColor} border rounded-lg p-8 mb-8`}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${selectedCategoryData.color} flex items-center justify-center text-white`}>
                  {selectedCategoryData.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Formação em <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">{selectedCategoryData.title}</span>
                  </h3>
                  <p className="text-muted-foreground">{selectedCategoryData.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>{selectedCategoryData.totalFormations} formações disponíveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Joinville/SC</span>
                </div>
              </div>
            </div>

            {/* Formations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedCategoryData.formations.map((formation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover bg-card border-border h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-lg leading-tight">{formation.title}</CardTitle>
                        <div className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${selectedCategoryData.color} text-white`}>
                          {formation.courses} {formation.courses === 1 ? 'Curso' : 'Cursos'}
                        </div>
                      </div>
                      <CardDescription className="text-sm">
                        {formation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{formation.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{formation.modality}</span>
                        </div>
                      </div>
                      <Button variant="ghost" className="p-0 text-orange-400 hover:text-orange-300 group">
                        Saiba mais 
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-8">
              <Button size="lg" className="senac-gradient text-white hover:opacity-90">
                Ver todas as formações em {selectedCategoryData.title}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;

