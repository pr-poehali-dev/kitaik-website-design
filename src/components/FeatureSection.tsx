
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop, Users, Video, Award, Clock, BookOpen } from 'lucide-react';

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 1,
      icon: <Laptop className="w-12 h-12 text-primary" />,
      title: 'Онлайн занятия',
      description: 'Учитесь в любом месте и в любое время. Наша платформа доступна 24/7 для вашего удобства.'
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Носители языка',
      description: 'Занимайтесь с опытными преподавателями из Китая, чтобы освоить правильное произношение и интонацию.'
    },
    {
      id: 3,
      icon: <Video className="w-12 h-12 text-primary" />,
      title: 'Видео уроки',
      description: 'Доступ к библиотеке видеоуроков с подробными объяснениями грамматики и лексики.'
    },
    {
      id: 4,
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'Сертификаты',
      description: 'По окончании курса получите сертификат, подтверждающий ваш уровень владения китайским языком.'
    },
    {
      id: 5,
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: 'Гибкий график',
      description: 'Составьте расписание занятий, которое подходит именно вам. Учитесь в своем темпе.'
    },
    {
      id: 6,
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: 'Учебные материалы',
      description: 'Получите доступ к эксклюзивным учебным материалам, разработанным нашими методистами.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">НАШИ ПРЕИМУЩЕСТВА</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Почему стоит учиться с нами
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы создали идеальную среду для эффективного изучения китайского языка,
            сочетая современные технологии и проверенные методики обучения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card 
              key={feature.id}
              className={`border-none hover-card transition-all duration-300 overflow-hidden ${
                activeFeature === feature.id 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'shadow-md'
              }`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? 'bg-primary bg-opacity-20 scale-110' 
                    : 'bg-gray-100'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative mt-24 p-8 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 overflow-hidden">
          <div className="absolute -right-10 -bottom-10 text-[120px] font-chinese text-primary opacity-20">学</div>
          <div className="relative z-10 md:w-3/4">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Начните свой путь к владению китайским языком уже сегодня!
            </h3>
            <p className="text-gray-700 mb-6">
              Присоединяйтесь к нашему сообществу из более чем 1500 студентов, которые уже изучают китайский с удовольствием.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div className="mr-3 text-3xl font-bold text-primary">90%</div>
                <div className="text-sm">студентов продолжают обучение после пробного урока</div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-3xl font-bold text-primary">80+</div>
                <div className="text-sm">профессиональных преподавателей в нашей команде</div>
              </div>
              <div className="flex items-center">
                <div className="mr-3 text-3xl font-bold text-primary">8/10</div>
                <div className="text-sm">студентов достигают разговорного уровня за 6 месяцев</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
