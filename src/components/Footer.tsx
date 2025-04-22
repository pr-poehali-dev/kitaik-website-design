
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white mb-6">
              <span className="text-chinese-red text-3xl font-chinese">汉语</span>
              <span className="font-semibold text-xl">ЧжунВэнь</span>
            </Link>
            <p className="mb-6 text-gray-400">
              Откройте для себя мир китайского языка и культуры с нашей школой онлайн-курсов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Курсы</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Для начинающих</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Разговорный китайский</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Деловой китайский</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Подготовка к HSK</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Китайская культура</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Преподаватели</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Отзывы</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Блог</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors hover-link">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white text-lg mb-6">Подпишитесь на новости</h3>
            <p className="mb-4 text-gray-400">
              Получайте анонсы новых курсов, материалы для самостоятельного изучения и специальные предложения.
            </p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Ваш email" 
                className="rounded-r-none bg-gray-800 border-gray-700 focus:border-primary"
              />
              <Button className="rounded-l-none">
                <Send size={16} className="mr-1" />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 ЧжунВэнь. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Условия использования
            </a>
            <a href="#" className="text-gray-500 hover:text-primary transition-colors">
              Правила оплаты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
