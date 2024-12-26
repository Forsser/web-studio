export async function fetchAPI(path) {
  const baseUrl = process.env.STRAPI_API_URL;
  const response = await fetch(`${baseUrl}/api/${path}`, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  });
  return await response.json();
}
