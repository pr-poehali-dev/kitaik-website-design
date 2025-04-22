
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Award, ChevronRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  level: string;
  description: string;
  duration: string;
  students: number;
  image: string;
  price: string;
  discount?: string;
  popular?: boolean;
}

const CourseCard = ({
  title,
  level,
  description,
  duration,
  students,
  image,
  price,
  discount,
  popular = false
}: CourseCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`overflow-hidden transition-all duration-300 ${
        isHovered ? 'shadow-xl transform -translate-y-2' : 'shadow-md'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        {popular && (
          <Badge className="absolute top-3 right-3 bg-chinese-red text-white">
            Популярный
          </Badge>
        )}
        {discount && (
          <div className="absolute top-3 left-3 bg-chinese-gold text-black px-2 py-1 rounded-md font-bold">
            -{discount}%
          </div>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-center">
          <Badge variant="outline" className="bg-blue-50">
            {level}
          </Badge>
          <div className="text-sm text-gray-500 flex items-center gap-1">
            <Users size={14} />
            {students}+ студентов
          </div>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Clock size={16} className="text-primary" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Award size={16} className="text-primary" />
          <span>Сертификат по окончании</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          {discount ? (
            <div>
              <span className="text-lg font-bold">{price} ₽</span>
              <span className="ml-2 text-gray-500 line-through text-sm">
                {Math.round(parseInt(price) * (100 / (100 - parseInt(discount))))} ₽
              </span>
            </div>
          ) : (
            <span className="text-lg font-bold">{price} ₽</span>
          )}
        </div>
        <Button 
          className={`transition-all duration-300 ${
            isHovered ? 'pr-4 pl-5' : 'px-4'
          }`}
        >
          <span>Подробнее</span>
          <ChevronRight 
            size={16} 
            className={`ml-1 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
