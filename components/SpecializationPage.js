// pages/specialization.js (серверний компонент)
import Specialization from "./Specialization";

export default async function SpecializationPage() {
  const data = [
    {
      id: 1,
      title: "Сайт візитка",
      description: "Детальніше про сайт візитку...",
      image: "/img/landing.jpg",
    },
    {
      id: 2,
      title: "Сайт портфоліо",
      description: "Детальніше про сайт портфоліо...",
      image: "/img/portfolio.jpg",
    },
    {
      id: 3,
      title: "Інтернет магазин",
      description: "Детальніше про інтернет магазин...",
      image: "/img/shop.jpg",
    },
    {
      id: 4,
      title: "Корпоративний сайт",
      description: "Детальніше про корпоративний сайт...",
      image: "/img/corp.jpg",
    },
  ];

  return <Specialization data={data} />;
}
