// lib/api/hero.js
import { fetchAPI } from "./index";

export async function getHeroData() {
  const baseUrl = process.env.STRAPI_API_URL;
  const response = await fetch(`${baseUrl}/api/heroes?populate=*`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      next: { revalidate: 30 }, // ISR з оновленням кожну годину
    },
  });

  if (!response.ok) {
    throw new Error("Не вдалося завантажити дані");
  }
  return await response.json();
}
