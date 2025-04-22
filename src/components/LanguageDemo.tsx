
import { useState } from 'react';
import { Button } from './ui/button';
import { VolumeX, Volume2 } from 'lucide-react';

const characters = [
  { 
    character: "你", 
    pinyin: "nǐ", 
    meaning: "ты" 
  },
  { 
    character: "好", 
    pinyin: "hǎo", 
    meaning: "хорошо" 
  },
  { 
    character: "学", 
    pinyin: "xué", 
    meaning: "учиться" 
  },
  { 
    character: "习", 
    pinyin: "xí", 
    meaning: "практиковать" 
  },
  { 
    character: "中", 
    pinyin: "zhōng", 
    meaning: "середина/Китай" 
  },
  { 
    character: "文", 
    pinyin: "wén", 
    meaning: "язык/письмо" 
  },
];

const LanguageDemo = () => {
  const [activeChar, setActiveChar] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCharacterClick = (index: number) => {
    setActiveChar(index);
    // Mock audio playback
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Интерактивное <span className="text-primary">обучение</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Нажмите на иероглиф, чтобы услышать его произношение и узнать значение
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {characters.map((char, index) => (
            <div 
              key={index}
              onClick={() => handleCharacterClick(index)}
              className={`
                aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer
                transition-all duration-300 transform hover:scale-105
                ${activeChar === index 
                  ? 'bg-primary text-white shadow-lg scale-105' 
                  : 'bg-white shadow hover:shadow-md'
                }
              `}
            >
              <span className="text-5xl md:text-6xl font-chinese mb-2">{char.character}</span>
              {activeChar === index && (
                <div className="text-center animate-fade-in">
                  <p className="font-medium">{char.pinyin}</p>
                  <p className="text-sm opacity-90">{char.meaning}</p>
                  {isPlaying ? 
                    <Volume2 className="w-5 h-5 mx-auto mt-1 animate-pulse" /> : 
                    <VolumeX className="w-5 h-5 mx-auto mt-1" />
                  }
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-center">Попробуйте собрать фразу</h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {characters.map((char, index) => (
              <Button 
                key={index}
                variant="outline"
                className="text-lg font-chinese h-12 w-12"
              >
                {char.character}
              </Button>
            ))}
          </div>
          
          <div className="h-16 border border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
            <p className="text-gray-500">Перетащите иероглифы сюда</p>
          </div>
          
          <div className="text-center">
            <Button>Проверить</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageDemo;
