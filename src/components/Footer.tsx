
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  Mail, Phone, MapPin, 
  Facebook, Instagram, Youtube, Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-primary text-3xl font-chinese">汉语</span>
              <span className="font-semibold text-xl text-white">ЧжунВэнь</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Онлайн-школа китайского языка с носителями языка и современной методикой обучения
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Курсы</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-primary transition-colors">
                  Все курсы
                </Link>
              </li>
              <li>
                <Link to="/courses/beginner" className="text-gray-400 hover:text-primary transition-colors">
                  Для начинающих
                </Link>
              </li>
              <li>
                <Link to="/courses/intermediate" className="text-gray-400 hover:text-primary transition-colors">
                  Средний уровень
                </Link>
              </li>
              <li>
                <Link to="/courses/advanced" className="text-gray-400 hover:text-primary transition-colors">
                  Продвинутый уровень
                </Link>
              </li>
              <li>
                <Link to="/courses/business" className="text-gray-400 hover:text-primary transition-colors">
                  Деловой китайский
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-gray-400 hover:text-primary transition-colors">
                  Преподаватели
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">
                  Частые вопросы
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-gray-400 hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Связаться с нами</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary" />
                <span>+7 (900) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@zhongwen.ru</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>г. Москва, ул. Пушкина, д. 10, офис 25</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-white">Подпишитесь на новости</h4>
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="ml-2">
                  OK
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© 2023 ЧжунВэнь. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
