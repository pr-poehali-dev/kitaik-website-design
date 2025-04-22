import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-chinese-red text-3xl font-chinese">汉语</span>
          <span className="font-semibold text-xl">ЧжунВэнь</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="font-medium hover:text-primary transition-colors">
            Главная
          </Link>
          <Link to="/courses" className="font-medium hover:text-primary transition-colors">
            Курсы
          </Link>
          <Link to="/teachers" className="font-medium hover:text-primary transition-colors">
            Преподаватели
          </Link>
          <Link to="/about" className="font-medium hover:text-primary transition-colors">
            О нас
          </Link>
          <Button>Начать обучение</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="sm" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/courses" 
              className="font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Курсы
            </Link>
            <Link 
              to="/teachers" 
              className="font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Преподаватели
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-primary transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Button className="w-full">Начать обучение</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
