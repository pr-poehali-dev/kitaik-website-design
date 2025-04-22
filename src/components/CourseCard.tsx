import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export interface CourseProps {
  id: string;
  title: string;
  level: string;
  duration: string;
  price: number;
  discountPrice?: number;
  image: string;
  badge?: string;
}

const CourseCard = ({
  title,
  level,
  duration,
  price,
  discountPrice,
  image,
  badge,
}: CourseProps) => {
  return (
    <Card className="overflow-hidden hover-card">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        {badge && (
          <Badge className="absolute top-3 right-3 bg-chinese-red" variant="destructive">
            {badge}
          </Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-xl">{title}</h3>
          <Badge variant="outline" className="bg-muted">
            {level}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          Продолжительность: {duration}
        </p>
        <div className="flex gap-2 items-center">
          {discountPrice ? (
            <>
              <span className="text-xl font-bold">{discountPrice} ₽</span>
              <span className="text-muted-foreground line-through">{price} ₽</span>
            </>
          ) : (
            <span className="text-xl font-bold">{price} ₽</span>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
