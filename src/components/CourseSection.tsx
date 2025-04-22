
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseCard from '@/components/CourseCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Базовый курс китайского для начинающих',
      level: 'Начальный',
      description: 'Идеальный старт для тех, кто только начинает изучать китайский язык',
      duration: '3 месяца',
      students: 1200,
      image: '/placeholder.svg',
      price: '5900',
      discount: '15',
      popular: true,
      category: 'beginner'
    },
    {
      id: 2,
      title: 'Разговорный китайский для путешествий',
      level: 'Средний',
      description: 'Научитесь общаться в повседневных ситуациях во время путешествий',
      duration: '2 месяца',
      students: 850,
      image: '/placeholder.svg',
      price: '4500',
      category: 'speaking'
    },
    {
      id: 3,
      title: 'Деловой китайский для бизнеса',
      level: 'Продвинутый',
      description: 'Освойте деловую лексику и научитесь вести переговоры на китайском',
      duration: '4 месяца',
      students: 620,
      image: '/placeholder.svg',
      price: '8900',
      discount: '10',
      category: 'business'
    },
    {
      id: 4,
      title: 'Подготовка к HSK 3',
      level: 'Средний',
      description: 'Подготовка к международному экзамену по китайскому языку',
      duration: '5 месяцев',
      students: 740,
      image: '/placeholder.svg',
      price: '7500',
      popular: true,
      category: 'exam'
    },
    {
      id: 5,
      title: 'Китайская каллиграфия',
      level: 'Любой',
      description: 'Изучите искусство китайской каллиграфии с мастерами из Пекина',
      duration: '2 месяца',
      students: 320,
      image: '/placeholder.svg',
      price: '3900',
      category: 'culture'
    },
    {
      id: 6,
      title: 'Интенсив по иероглифике',
      level: 'Начальный',
      description: 'Быстрое запоминание 300 базовых иероглифов за 30 дней',
      duration: '1 месяц',
      students: 950,
      image: '/placeholder.svg',
      price: '2900',
      discount: '20',
      category: 'beginner'
    }
  ];

  const filteredCourses = activeTab === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  return (
    <section className="py-20 bg-white" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши популярные курсы
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите курс, который подходит именно вам. От базовых знаний до продвинутого уровня — 
            мы поможем вам достичь ваших целей в изучении китайского языка.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 gap-1">
              <TabsTrigger value="all" className="px-4">Все курсы</TabsTrigger>
              <TabsTrigger value="beginner" className="px-4">Для начинающих</TabsTrigger>
              <TabsTrigger value="speaking" className="px-4">Разговорный</TabsTrigger>
              <TabsTrigger value="business" className="px-4">Деловой</TabsTrigger>
              <TabsTrigger value="exam" className="px-4">Экзамены</TabsTrigger>
              <TabsTrigger value="culture" className="px-4">Культура</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beginner" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="speaking" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exam" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="culture" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group">
            Смотреть все курсы
            <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
