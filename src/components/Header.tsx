
import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Ишеевский вестник</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">Главная</Link>
            <Link to="/news" className="text-purple-600 font-medium">Новости</Link>
            <Link to="/politics" className="text-gray-700 hover:text-purple-600 transition-colors">Политика</Link>
            <Link to="/society" className="text-gray-700 hover:text-purple-600 transition-colors">Общество</Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Войти
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              Подписаться
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
