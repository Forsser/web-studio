// pages/specialization.js (серверний компонент)
import About from "../components/About";

export default async function AboutPage() {
  const data = [
    {
      id: 1,
      title: "Створюємо найсильніші сайти",
      description:
        "Ваш сайт буде залучати найбільше заявкою за рахунок стратегії, правильної структури, проданих тез і продуманих смислів",
    },
    {
      id: 2,
      title: "Розробляємо стратегію",
      description:
        "Аналізуємо ринок, прописуємо болі та їх рішення, створюємо унікальну пропозицію для клієнта, що підштовхує її залишити заявку",
    },
    {
      id: 3,
      title: "Поетапна оплата за 30%",
      description:
        "Для вашої зручності починаємо працювати при оплаті 30%, далі оплата розбивається на 40% та 30%",
    },
    {
      id: 4,
      title: "Працюємо у термін",
      description:
        "Ми не беремо більше проектів, ніж можемо встигнути, щоб вся робота виконувалася у строк",
    },
  ];

  return <About data={data} />;
}
