export function getURL(path: string = "") {
  return `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}${path}`
}

export async function fetchAPI(path: string) {
  const requestUrl = getURL(path)
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
