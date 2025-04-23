
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Newspaper } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Newspaper className="h-6 w-6 text-purple-600" />
              <span className="font-bold text-xl">НовостиОнлайн</span>
            </div>
            
            <Button asChild size="sm">
              <Link to="/news">Перейти к новостям</Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Добро пожаловать на НовостиОнлайн!</h1>
          <p className="text-xl text-gray-600 mb-8">Самые актуальные новости из разных сфер жизни</p>
          
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link to="/news">Читать последние новости</Link>
          </Button>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2024 НовостиОнлайн | Все права защищены
        </div>
      </footer>
    </div>
  );
};

export default Index;
