# openai-translation

## uage

set a file ".env"
```sh
OPENAI_APIKEY=???
```

in JavaScript/Deno with --env
```js
import { fetchTranslation } from "https://code4fukui.github.io/openai-translation/fetchTranslation.js";

console.log(await fetchTranslation("元気？"));
console.log(await fetchTranslation("元気？", "中国語"));
```

## price

https://platform.openai.com/docs/pricing#moderation
