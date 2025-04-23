
import { Newspaper } from "lucide-react";
import Header from "@/components/Header";
import NewsArticle from "@/components/NewsArticle";
import Sidebar from "@/components/Sidebar";

const NewsPage = () => {
  const newsTitle = "Прокуратура Ульяновского района защитила права пенсионерки-инвалида";
  const newsContent = [
    "Прокуратура Ульяновского района Ульяновской области провела проверку по обращению пожилой местной жительницы с ограниченными возможностями.",
    "Установлено, что данная пенсионерка – инвалид 3 группы нуждается в постоянном применении технических средств реабилитации.",
    "Вопреки требованиям закона, руководство отделения Фонда пенсионного и социального страхования Российской Федерации по Ульяновской области длительное время игнорировало ее обращения о предоставлении трости опорной, регулируемой по высоте, с устройством противоскольжения, а также бандажа на коленный сустав (наколенника), что послужило основанием для направления в суд искового заявления.",
    "В результате прокурорского вмешательства лицо с ограниченными возможностями обеспечено необходимыми техническими средствами реабилитации.",
    "Кроме того, по исковому заявлению прокурора с отделения в пользу инвалида взыскана компенсация морального вреда."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <main className="md:w-2/3">
            <NewsArticle title={newsTitle} content={newsContent} />
          </main>
          <Sidebar />
        </div>
      </div>
      <footer className="bg-gray-100 py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          © 2024 Новостной портал | Все права защищены
        </div>
      </footer>
    </div>
  );
};

export default NewsPage;
