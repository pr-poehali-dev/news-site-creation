
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    "Общество", "Политика", "Экономика", "Спорт", "Культура", "Технологии"
  ];
  
  const recentNews = [
    {
      id: 1,
      title: "Новые меры поддержки семей с детьми вступили в силу",
      date: "04 июня 2024",
      category: "Общество"
    },
    {
      id: 2,
      title: "В Ульяновске открылся новый спортивный комплекс",
      date: "03 июня 2024",
      category: "Спорт"
    },
    {
      id: 3,
      title: "Экономические показатели региона выросли на 5%",
      date: "02 июня 2024",
      category: "Экономика"
    }
  ];

  return (
    <aside className="md:w-1/3 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Категории</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index}>
                <Link 
                  to={`/category/${category.toLowerCase()}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors block py-1"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Последние новости</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentNews.map((item) => (
              <div key={item.id} className="border-b pb-4 last:border-0 last:pb-0">
                <Link to={`/news/${item.id}`} className="block">
                  <h3 className="font-medium text-gray-800 hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mt-2">
                    <span>{item.date}</span>
                    <span className="mx-2">•</span>
                    <span>{item.category}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-purple-50 border-purple-100">
        <CardContent className="p-6">
          <h3 className="font-medium text-purple-800 mb-2">Подпишитесь на рассылку</h3>
          <p className="text-sm text-gray-600 mb-4">Получайте последние новости на вашу почту</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Ваш email" 
              className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-md text-sm transition-colors">
              Подписаться
            </button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Sidebar;
