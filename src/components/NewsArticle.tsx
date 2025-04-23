
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, Bookmark, ThumbsUp } from "lucide-react";

interface NewsArticleProps {
  title: string;
  content: string[];
}

const NewsArticle = ({ title, content }: NewsArticleProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-72 bg-gray-200 relative">
        <img 
          src="https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="Гуляющая семья" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs px-2 py-1 rounded">
          Общество
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <span>15 апреля 2025</span>
          <span className="mx-2">•</span>
          <span>Прокуратура Ульяновской области</span>
        </div>
        <CardTitle className="text-2xl md:text-3xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="prose max-w-none">
          {content.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm">24</span>
            </button>
            <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
              <Share2 className="h-4 w-4" />
              <span className="text-sm">Поделиться</span>
            </button>
          </div>
          <button className="flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors">
            <Bookmark className="h-4 w-4" />
            <span className="text-sm">Сохранить</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
