
import TestimonialCarousel from '@/components/TestimonialCarousel';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">ОТЗЫВЫ СТУДЕНТОВ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Что говорят наши ученики
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Более 1500 студентов уже изучают китайский язык вместе с нами. 
            Вот что они рассказывают о своем опыте обучения.
          </p>
        </div>

        <TestimonialCarousel />

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">1500+</div>
            <p className="text-gray-700">Довольных студентов</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">80+</div>
            <p className="text-gray-700">Профессиональных преподавателей</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <p className="text-gray-700">Разных курсов</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-gray-700">Положительных отзывов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
