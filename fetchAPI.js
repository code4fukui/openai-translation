
const APIKEY = Deno.env.get("OPENAI_APIKEY");

export const fetchAPI = async (url, req) => {
  const opt = {
    method: req ? "POST" : "GET",
    mode: "cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + APIKEY,
    },
    body: req ? JSON.stringify(req) : undefined,
  };
  const res = await (await fetch(url, opt)).json();
  return res;
};
