import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="https://cdn.poehali.dev/files/150bf1e9-687a-487e-97ef-60a29466aaef.png" 
                alt="Exam-Edu Logo" 
                className="w-48 h-48 object-contain"
              />
            </div>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight max-w-6xl mx-auto">
              Exam-Edu. Система для подготовки и автоматизированной проверки контрольных работ 
              с использованием технологий искусственного интеллекта
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-800">
              Что такое система Exam-Edu и для чего она предназначена?
            </h2>
            
            {/* Description */}
            <div className="max-w-5xl mx-auto text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Система Exam-Edu — это программный комплекс, предназначенный для подготовки и 
                автоматизированной проверки контрольных работ в учебных заведениях.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Основная цель системы</strong> — оптимизация рутинных задач преподавателей, 
                    таких как проверка большого объема работ, и повышение эффективности обучения для 
                    студентов за счет быстрой и персонализированной обратной связи.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Система призвана решить проблему низкой посещаемости лекций и пассивности студентов, 
                    предлагая частые микроконтрольные работы, ручная проверка которых практически невозможна 
                    из-за большого объема рутинной работы.
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Система использует технологии искусственного интеллекта (ИИ) для распознавания 
                    рукописных решений студентов, их проверки, выставления объективной оценки и 
                    предоставления обратной связи.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Начать использование
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <Icon name="Info" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ключевые возможности системы
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Передовые технологии ИИ для образовательного процесса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'PenTool',
                title: 'Распознавание рукописи',
                description: 'Точное распознавание рукописных решений студентов с использованием компьютерного зрения'
              },
              {
                icon: 'CheckCircle',
                title: 'Автоматическая проверка',
                description: 'Интеллектуальная система проверки работ с выставлением объективных оценок'
              },
              {
                icon: 'MessageSquare',
                title: 'Обратная связь',
                description: 'Персонализированная обратная связь для каждого студента с рекомендациями'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика успеваемости',
                description: 'Детальная аналитика прогресса студентов и эффективности обучения'
              },
              {
                icon: 'Clock',
                title: 'Экономия времени',
                description: 'Значительное сокращение времени преподавателей на проверку работ'
              },
              {
                icon: 'Users',
                title: 'Массовое тестирование',
                description: 'Возможность проведения частых микроконтрольных работ для больших групп'
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Преимущества для образования
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Для преподавателей</h3>
              <div className="space-y-4">
                {[
                  { icon: 'Clock', text: 'Экономия до 90% времени на проверку работ' },
                  { icon: 'Target', text: 'Объективная и стандартизированная оценка' },
                  { icon: 'BarChart3', text: 'Детальная аналитика успеваемости группы' },
                  { icon: 'Zap', text: 'Возможность частого контроля знаний' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Для студентов</h3>
              <div className="space-y-4">
                {[
                  { icon: 'MessageSquare', text: 'Быстрая обратная связь по результатам' },
                  { icon: 'BookOpen', text: 'Персонализированные рекомендации' },
                  { icon: 'TrendingUp', text: 'Отслеживание прогресса в обучении' },
                  { icon: 'Users', text: 'Мотивация к активному участию' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img 
              src="https://cdn.poehali.dev/files/150bf1e9-687a-487e-97ef-60a29466aaef.png" 
              alt="Exam-Edu Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold">Exam-Edu</span>
          </div>
          <p className="text-gray-400 mb-4">
            Инновационная система для автоматизации образовательного процесса
          </p>
          <p className="text-gray-500">
            &copy; 2024 Exam-Edu. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;