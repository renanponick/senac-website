import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Brain,
  ArrowRight,
  ShieldCheck,
  BarChart,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const PopularTopicsSection = () => {
  const popularTopics = [
    {
      id: 'programacao',
      title: 'Programação',
      icon: <Code className="w-8 h-8" />,
      description: 'Desenvolvimento de software, linguagens de programação e algoritmos.',
      color: 'from-blue-500 to-cyan-500',
      courses: ['Python', 'JavaScript', 'Java', 'C++', 'Estrutura de Dados']
    },
    {
      id: 'inteligencia-artificial',
      title: 'Inteligência Artificial',
      icon: <Brain className="w-8 h-8" />,
      description: 'Machine Learning, Deep Learning, Processamento de Linguagem Natural.',
      color: 'from-purple-500 to-indigo-500',
      courses: ['Aprendizado Supervisionado', 'Redes Neurais', 'Visão Computacional', 'NLP']
    },
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Infraestrutura e serviços em nuvem, como AWS, Azure e Google Cloud.',
      color: 'from-green-500 to-emerald-500',
      courses: ['AWS Certified', 'Azure Fundamentals', 'Docker', 'Kubernetes']
    },
    {
      id: 'desenvolvimento-web',
      title: 'Desenvolvimento Web',
      icon: <Palette className="w-8 h-8" />,
      description: 'Criação de sites e aplicações web interativas e responsivas.',
      color: 'from-yellow-500 to-orange-500',
      courses: ['HTML', 'CSS', 'React', 'Angular', 'Vue.js']
    },
    {
      id: 'seguranca-da-informacao',
      title: 'Segurança da Informação',
      icon: <ShieldCheck className="w-8 h-8" />,
      description: 'Proteção de dados e sistemas contra ameaças cibernéticas.',
      color: 'from-red-500 to-pink-500',
      courses: ['Cibersegurança', 'Testes de Invasão', 'Segurança de Redes']
    },
    {
      id: 'data-science',
      title: 'Data Science',
      icon: <BarChart className="w-8 h-8" />,
      description: 'Análise de dados, estatística e modelagem para insights e previsões.',
      color: 'from-teal-500 to-blue-500',
      courses: ['Análise Exploratória', 'Modelagem Preditiva', 'Big Data']
    },
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Explore os <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">Tópicos Populares</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Descubra as áreas de tecnologia mais buscadas e encontre o caminho ideal para sua carreira.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="card-hover bg-card border-border h-full">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${topic.color} flex items-center justify-center text-white mb-4`}>
                    {topic.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topic.courses.map((course, i) => (
                      <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                        {course}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" className="p-0 text-orange-400 hover:text-orange-300 group">
                    Ver cursos 
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

export default PopularTopicsSection;

