import { fetchAPI } from "https://code4fukui.github.io/ai_chat/openai.js";

//const defmodel = "text-moderation-latest";
const defmodel = "gpt-5.2";

export const fetchTranslation = async (text, tolang = "en", model = defmodel) => {
  const input = "下記の文章を " + tolang + " に編訳して、翻訳したものだけをテキストで出力して\n" + text;

  const res = await fetchAPI("https://api.openai.com/v1/responses", {
    model,
    input,
  });
  return res.output[0]?.content[0]?.text;
};
