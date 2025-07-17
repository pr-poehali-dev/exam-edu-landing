import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState('textAnalysis');
  const [demoInput, setDemoInput] = useState('');
  const [demoOutput, setDemoOutput] = useState('');

  const handleDemoSubmit = (type: string) => {
    if (!demoInput.trim()) return;
    
    let output = '';
    switch (type) {
      case 'textAnalysis':
        output = `Анализ текста: ✨ Позитивный тон (87%), 🎯 Ключевые слова: ["инновации", "технологии", "ИИ"], 📊 Сложность: средняя`;
        break;
      case 'translation':
        output = `Перевод: "Hello! We are an innovative AI platform that helps businesses integrate artificial intelligence into their workflows."`;
        break;
      case 'codeGen':
        output = `// Сгенерированный код:\nfunction analyzeData(data) {\n  return data.map(item => ({\n    ...item,\n    score: calculateScore(item)\n  }));\n}`;
        break;
    }
    setDemoOutput(output);
  };

  const demos = [
    { id: 'textAnalysis', title: 'Анализ текста', icon: 'FileText', description: 'Анализ тональности и ключевых слов' },
    { id: 'translation', title: 'Перевод', icon: 'Languages', description: 'Перевод на 100+ языков' },
    { id: 'codeGen', title: 'Генерация кода', icon: 'Code', description: 'Создание кода по описанию' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Platform
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#hero" className="text-gray-600 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Демо</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Начать работу
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              <Icon name="Sparkles" size={16} className="mr-1" />
              Новое поколение ИИ
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Будущее ИИ <br />
              уже здесь
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Инновационная платформа для интеграции искусственного интеллекта в ваши бизнес-процессы. 
              Автоматизируйте задачи, анализируйте данные и создавайте умные решения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Icon name="Play" size={20} className="mr-2" />
                Попробовать демо
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 hover:bg-blue-50">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>
          
          <div className="mt-16 animate-float">
            <img 
              src="/img/e80fd76c-f07d-4175-ab14-e749d52add2e.jpg" 
              alt="AI Technology Visualization" 
              className="mx-auto rounded-2xl shadow-2xl max-w-4xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мощные инструменты ИИ для решения самых сложных задач
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Brain',
                title: 'Машинное обучение',
                description: 'Продвинутые алгоритмы для анализа данных и прогнозирования'
              },
              {
                icon: 'MessageSquare',
                title: 'Обработка языка',
                description: 'Понимание и генерация текста на естественном языке'
              },
              {
                icon: 'Eye',
                title: 'Компьютерное зрение',
                description: 'Распознавание и анализ изображений и видео'
              },
              {
                icon: 'BarChart3',
                title: 'Аналитика данных',
                description: 'Глубокий анализ больших объемов данных'
              },
              {
                icon: 'Zap',
                title: 'Автоматизация',
                description: 'Автоматизация рутинных задач и процессов'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Защита данных и соответствие стандартам безопасности'
              }
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-scale-in">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
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

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Интерактивное демо</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Попробуйте наши ИИ-сервисы прямо сейчас
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {demos.map((demo) => (
                <Button
                  key={demo.id}
                  variant={activeDemo === demo.id ? "default" : "outline"}
                  onClick={() => setActiveDemo(demo.id)}
                  className={activeDemo === demo.id ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}
                >
                  <Icon name={demo.icon} size={18} className="mr-2" />
                  {demo.title}
                </Button>
              ))}
            </div>
            
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name={demos.find(d => d.id === activeDemo)?.icon || 'Zap'} size={24} className="mr-2" />
                  {demos.find(d => d.id === activeDemo)?.title}
                </CardTitle>
                <CardDescription>
                  {demos.find(d => d.id === activeDemo)?.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Введите данные:</label>
                  <Textarea
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                    placeholder="Введите текст для обработки..."
                    className="min-h-[100px]"
                  />
                </div>
                
                <Button 
                  onClick={() => handleDemoSubmit(activeDemo)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={!demoInput.trim()}
                >
                  <Icon name="Play" size={18} className="mr-2" />
                  Обработать
                </Button>
                
                {demoOutput && (
                  <div className="animate-fade-in">
                    <label className="block text-sm font-medium mb-2">Результат:</label>
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <pre className="whitespace-pre-wrap text-sm">{demoOutput}</pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей платформе</h2>
              <p className="text-gray-600 mb-6">
                Мы создали передовую платформу искусственного интеллекта, которая делает 
                сложные технологии доступными для бизнеса любого размера.
              </p>
              <div className="space-y-4">
                {[
                  { icon: 'Target', text: 'Точность анализа более 95%' },
                  { icon: 'Zap', text: 'Обработка в реальном времени' },
                  { icon: 'Globe', text: 'Поддержка 100+ языков' },
                  { icon: 'Shield', text: 'Корпоративная безопасность' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} size={14} className="text-white" />
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '1M+', label: 'Обработано запросов' },
                { number: '99.9%', label: 'Время работы' },
                { number: '50+', label: 'Стран используют' },
                { number: '24/7', label: 'Техподдержка' }
              ].map((stat, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-600">
              Готовы начать работу с ИИ? Мы поможем вам интегрировать наши решения
            </p>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="Название компании" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о ваших потребностях в ИИ..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">AI Platform</span>
              </div>
              <p className="text-gray-400">
                Передовые решения искусственного интеллекта для вашего бизнеса.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Анализ текста</li>
                <li>Машинное обучение</li>
                <li>Компьютерное зрение</li>
                <li>Автоматизация</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Карьера</li>
                <li>Блог</li>
                <li>Пресс-центр</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Документация</li>
                <li>Помощь</li>
                <li>Статус системы</li>
                <li>Контакты</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI Platform. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;