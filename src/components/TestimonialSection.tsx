
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Мария Иванова",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Благодаря занятиям на платформе я сдала экзамен HSK 4 с отличным результатом! Преподаватели объясняют очень понятно и всегда готовы помочь.",
    course: "Подготовка к HSK 4"
  },
  {
    id: 2,
    name: "Алексей Петров",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Занимаюсь уже 8 месяцев и вижу огромный прогресс. Особенно нравится, что много внимания уделяется разговорной практике и правильному произношению.",
    course: "Китайский для начинающих"
  },
  {
    id: 3,
    name: "Екатерина Смирнова",
    avatar: "/placeholder.svg",
    rating: 4,
    text: "Удобная платформа и профессиональные преподаватели. Радует гибкий график и возможность заниматься из любой точки мира.",
    course: "Деловой китайский"
  },
  {
    id: 4,
    name: "Дмитрий Козлов",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Никогда не думал, что смогу выучить китайский, но с этой школой всё получилось! Теперь могу свободно общаться с китайскими партнерами.",
    course: "Разговорный китайский"
  },
  {
    id: 5,
    name: "Анна Соколова",
    avatar: "/placeholder.svg",
    rating: 5,
    text: "Лучшие курсы китайского, которые я нашла. Преподаватели-носители языка делают огромную разницу в обучении.",
    course: "Китайская литература"
  }
];

const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Отзывы наших <span className="text-primary">студентов</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят о нас те, кто уже изучает китайский язык на нашей платформе
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg bg-white shadow-lg p-6 md:p-8">
            <div 
              className="flex transition-transform duration-500 ease-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-16 h-16 mb-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                    
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">Курс: {testimonial.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full bg-white shadow-md"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full bg-white shadow-md"
            onClick={nextSlide}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
