import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Анна Петрова",
    avatar: "/placeholder.svg",
    text: "Благодаря курсам я освоила основы китайского всего за 3 месяца! Преподаватели очень внимательные и помогают с произношением. Рекомендую всем!",
    rating: 5,
  },
  {
    id: 2,
    name: "Иван Сидоров",
    avatar: "/placeholder.svg",
    text: "Прошел курс для начинающих. Очень доступно объясняют, особенно понравились интерактивные упражнения и возможность практиковать язык с носителями.",
    rating: 4,
  },
  {
    id: 3,
    name: "Мария Иванова",
    avatar: "/placeholder.svg",
    text: "Учусь на продвинутом курсе уже 6 месяцев. Прогресс потрясающий! Теперь могу свободно общаться с китайскими партнерами по бизнесу.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/1 lg:basis-1/1">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex gap-4 items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                          key={i}
                          size={16}
                          className={`${
                            i < testimonial.rating
                              ? "text-chinese-gold fill-chinese-gold"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4 gap-2">
        <CarouselPrevious className="static transform-none" />
        <CarouselNext className="static transform-none" />
      </div>
    </Carousel>
  );
};

export default TestimonialCarousel;
