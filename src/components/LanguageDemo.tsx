
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Volume2, Play } from 'lucide-react';

interface Character {
  id: number;
  hanzi: string;
  pinyin: string;
  meaning: string;
  strokeCount: number;
}

const LanguageDemo = () => {
  const [activeCharacter, setActiveCharacter] = useState<number>(0);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  
  const characters: Character[] = [
    { id: 1, hanzi: '你', pinyin: 'nǐ', meaning: 'Ты, вы', strokeCount: 7 },
    { id: 2, hanzi: '好', pinyin: 'hǎo', meaning: 'Хорошо', strokeCount: 6 },
    { id: 3, hanzi: '学', pinyin: 'xué', meaning: 'Учиться', strokeCount: 8 },
    { id: 4, hanzi: '习', pinyin: 'xí', meaning: 'Практиковать', strokeCount: 3 },
    { id: 5, hanzi: '中', pinyin: 'zhōng', meaning: 'Середина, Китай', strokeCount: 4 },
    { id: 6, hanzi: '文', pinyin: 'wén', meaning: 'Текст, культура', strokeCount: 4 },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setActiveCharacter(prev => (prev + 1) % characters.length);
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, characters.length]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold">ИЗУЧАЙТЕ ИЕРОГЛИФЫ</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Начните изучать иероглифы уже сейчас
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, как произносятся и пишутся базовые китайские иероглифы. 
            Наша интерактивная система поможет вам быстро их запомнить.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 justify-center">
          <div className="relative w-full max-w-md">
            <Card className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-12 shadow-xl">
              <div 
                className="text-[180px] font-chinese leading-none transition-all duration-500 transform"
                style={{ 
                  opacity: isHovering ? 0.3 : 1,
                  transform: isHovering ? 'scale(0.9)' : 'scale(1)'
                }}
              >
                {characters[activeCharacter].hanzi}
              </div>
              {isHovering && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg animate-fade-in">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">ПИНЬИНЬ</h4>
                        <p className="text-xl">{characters[activeCharacter].pinyin}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">ЧЕРТЫ</h4>
                        <p className="text-xl">{characters[activeCharacter].strokeCount}</p>
                      </div>
                      <div className="col-span-2">
                        <h4 className="text-sm font-semibold text-gray-500 mb-1">ЗНАЧЕНИЕ</h4>
                        <p className="text-xl">{characters[activeCharacter].meaning}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="mt-4 w-full"
                    >
                      <Volume2 className="w-4 h-4 mr-2" />
                      Произношение
                    </Button>
                  </div>
                </div>
              )}
            </Card>
            <Button 
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 rounded-full w-12 h-12 p-0 shadow-lg"
              onClick={togglePlay}
            >
              <Play className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
            </Button>
          </div>

          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold mb-6">Изучите базовые иероглифы</h3>
            <p className="text-gray-600 mb-8">
              Наведите курсор на иероглиф, чтобы увидеть его значение, пиньинь (транскрипцию) 
              и количество черт. Нажмите кнопку воспроизведения, чтобы автоматически пролистывать иероглифы.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {characters.map((char, index) => (
                <Card 
                  key={char.id}
                  className={`p-4 cursor-pointer transition-all duration-300 ${
                    activeCharacter === index ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setActiveCharacter(index)}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="text-center">
                    <div className="text-4xl font-chinese mb-1">{char.hanzi}</div>
                    <div className="text-xs text-gray-500">{char.pinyin}</div>
                  </div>
                </Card>
              ))}
            </div>
            
            <div className="mt-8">
              <Button variant="outline" className="w-full">
                Открыть карточки с иероглифами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageDemo;
