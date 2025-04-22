
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  role: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Анна Смирнова',
    avatar: '/placeholder.svg',
    role: 'Начинающий',
    text: 'До начала курса я не знала ни одного китайского иероглифа. Через месяц я уже могла представиться и рассказать о себе на китайском! Методика преподавания очень эффективная.',
    rating: 5
  },
  {
    id: 2,
    name: 'Иван Петров',
    avatar: '/placeholder.svg',
    role: 'Бизнесмен',
    text: 'Прошел интенсивный курс для деловых переговоров. Очень доволен результатом! Смог успешно провести встречу с китайскими партнерами без переводчика.',
    rating: 5
  },
  {
    id: 3,
    name: 'Мария Иванова',
    avatar: '/placeholder.svg',
    role: 'Студент',
    text: 'Готовилась к HSK 3 и успешно сдала с первого раза. Преподаватели отлично знают специфику экзамена и помогли подготовиться ко всем типам заданий.',
    rating: 4
  },
  {
    id: 4,
    name: 'Алексей Сидоров',
    avatar: '/placeholder.svg',
    role: 'Путешественник',
    text: 'Взял курс разговорного китайского перед поездкой в Пекин. Очень пригодилось! Мог сам заказать еду, спросить дорогу и поторговаться на рынке.',
    rating: 5
  },
  {
    id: 5,
    name: 'Елена Козлова',
    avatar: '/placeholder.svg',
    role: 'Преподаватель',
    text: 'Изучаю китайский уже год. Методика школы отличается от других — здесь действительно учат говорить, а не просто зубрить правила.',
    rating: 5
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
    setIsPaused(true);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
  };

  return (
    <div 
      className="relative max-w-4xl mx-auto" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                    <Quote className="ml-auto text-primary opacity-20 w-10 h-10" />
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}>
                        ★
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'
            }`}
            onClick={() => {
              setActiveIndex(i);
              setIsPaused(true);
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -left-12 rounded-full hover:bg-primary hover:text-white transition-colors"
        onClick={handlePrev}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute top-1/2 -translate-y-1/2 -right-12 rounded-full hover:bg-primary hover:text-white transition-colors"
        onClick={handleNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default TestimonialCarousel;
