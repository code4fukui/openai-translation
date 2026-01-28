import { fetchTranslation } from "./fetchTranslation.js";

const input = "学校の校舎の上に巨大ロボットが降り立っている";
const res = await fetchTranslation(input);
console.log(res);
