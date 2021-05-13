var url = "https://covid19-japan-web-api.vercel.app/api/v1/prefectures";

export async function getData() {
    const response = await fetch(
        `https://covid19-japan-web-api.vercel.app/api/v1/prefectures`
    );
    const data = await response.json();
    return data;
}