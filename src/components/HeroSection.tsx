import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-white to-[#FFF5E6] py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Изучайте китайский язык <span className="text-primary">онлайн</span>
          </h1>
          <p className="text-lg mb-8 text-gray-700">
            Наши интерактивные курсы помогут вам овладеть китайским языком 
            с нуля до уровня свободного общения. Учитесь у носителей языка 
            в удобное для вас время!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="font-semibold text-lg px-8">
              Пробный урок
            </Button>
            <Button size="lg" variant="outline" className="font-semibold text-lg px-8">
              Узнать больше
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <img 
                    src={`/placeholder.svg`} 
                    alt={`Student ${i}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-gray-700">
              <span className="font-bold text-primary">1,500+</span> довольных студентов
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl animate-float">
            <img 
              src="/placeholder.svg"
              alt="Chinese language learning" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <p className="text-lg font-chinese mb-2">你好 (Nǐ hǎo)!</p>
                <p className="font-bold">Готовы начать?</p>
              </div>
            </div>
          </div>
          <div className="absolute top-8 -right-4 bg-chinese-gold text-black p-3 rounded-full shadow-lg transform rotate-12 z-20">
            <span className="font-chinese text-2xl">学</span>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-chinese-jade text-white p-3 rounded-full shadow-lg z-20">
            <span className="font-chinese text-2xl">习</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
