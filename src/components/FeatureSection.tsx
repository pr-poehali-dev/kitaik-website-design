
import { 
  Users, Clock, Globe, Award, MessageSquare, Video
} from 'lucide-react';

const features = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Носители языка",
    description: "Наши преподаватели — носители китайского языка с опытом обучения иностранцев"
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Гибкий график",
    description: "Занимайтесь в удобное для вас время, выбирая подходящие слоты в расписании"
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Полное погружение",
    description: "Изучайте не только язык, но и культуру, историю и традиции Китая"
  },
  {
    icon: <Award className="w-10 h-10 text-primary" />,
    title: "Сертификаты",
    description: "Получите сертификат об окончании курса, подтверждающий ваш уровень знаний"
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: "Разговорная практика",
    description: "Регулярные разговорные клубы с другими студентами и носителями языка"
  },
  {
    icon: <Video className="w-10 h-10 text-primary" />,
    title: "Видеоматериалы",
    description: "Доступ к библиотеке видео и аудиоматериалов для самостоятельного изучения"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Почему <span className="text-primary">выбирают нас</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мы создали эффективную систему обучения китайскому языку, 
            которая сделает ваш путь к свободному владению максимально комфортным
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow bg-white hover:-translate-y-1 duration-300"
            >
              <div className="p-3 bg-primary/10 inline-flex rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
