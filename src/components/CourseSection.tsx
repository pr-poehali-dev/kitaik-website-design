
import { useState } from 'react';
import CourseCard, { CourseProps } from './CourseCard';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { motion } from 'framer-motion';

const courses: Record<string, CourseProps[]> = {
  beginner: [
    {
      id: "1",
      title: "Китайский для начинающих",
      level: "A1",
      duration: "8 недель",
      price: 12000,
      discountPrice: 9900,
      image: "/placeholder.svg",
      badge: "Хит"
    },
    {
      id: "2",
      title: "Основы иероглифики",
      level: "A1",
      duration: "6 недель",
      price: 8500,
      image: "/placeholder.svg"
    },
    {
      id: "3",
      title: "Пиньинь и произношение",
      level: "A1",
      duration: "4 недели",
      price: 6000,
      image: "/placeholder.svg"
    },
  ],
  intermediate: [
    {
      id: "4",
      title: "Разговорный китайский",
      level: "B1",
      duration: "10 недель",
      price: 15000,
      discountPrice: 12500,
      image: "/placeholder.svg",
      badge: "Популярный"
    },
    {
      id: "5",
      title: "Деловой китайский",
      level: "B1-B2",
      duration: "12 недель",
      price: 18000,
      image: "/placeholder.svg"
    },
    {
      id: "6",
      title: "Культура и традиции",
      level: "B1",
      duration: "8 недель",
      price: 13000,
      image: "/placeholder.svg"
    },
  ],
  advanced: [
    {
      id: "7",
      title: "Подготовка к HSK 5",
      level: "C1",
      duration: "16 недель",
      price: 25000,
      image: "/placeholder.svg"
    },
    {
      id: "8",
      title: "Технический китайский",
      level: "C1",
      duration: "14 недель",
      price: 22000,
      image: "/placeholder.svg"
    },
    {
      id: "9",
      title: "Китайская литература",
      level: "C1-C2",
      duration: "12 недель",
      price: 21000,
      image: "/placeholder.svg",
      badge: "Новый"
    },
  ]
};

const CourseSection = () => {
  const [activeTab, setActiveTab] = useState('beginner');

  return (
    <section className="py-20 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Наши <span className="text-primary">курсы</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите подходящий курс в зависимости от вашего уровня владения языком и целей обучения
          </p>
        </div>

        <Tabs defaultValue="beginner" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="beginner">Начинающий</TabsTrigger>
              <TabsTrigger value="intermediate">Средний</TabsTrigger>
              <TabsTrigger value="advanced">Продвинутый</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(courses).map(([level, levelCourses]) => (
            <TabsContent key={level} value={level} className="focus:outline-none">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {levelCourses.map((course, index) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CourseCard {...course} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-medium">
            Смотреть все курсы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
