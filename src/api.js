export async function getData() {
  const url = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getData2() {
  const url = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
