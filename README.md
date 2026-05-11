# openai-translation

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple Deno module for text translation using the OpenAI API.

## Features

- Translate text to a specified target language (default: English).
- Customize the OpenAI model used for translation.
- Easy to integrate into any Deno project.

## Prerequisites

- [Deno](https://deno.land/) runtime installed.
- An OpenAI API key.

## Setup

1.  Create a `.env` file in your project's root directory.
2.  Add your OpenAI API key to the file:
    ```sh
    OPENAI_APIKEY="sk-..."
    ```

## Usage

### As a Module

Import and use the `fetchTranslation` function directly in your Deno project.

```javascript
import { fetchTranslation } from "https://code4fukui.github.io/openai-translation/fetchTranslation.js";

// Translate to English (default)
const en_translation = await fetchTranslation("元気？");
console.log(en_translation); // "How are you?"

// Translate to a specific language (e.g., Chinese)
const zh_translation = await fetchTranslation("元気？", "中国語");
console.log(zh_translation); // "你好吗？"
```

### Running the Example

To run the provided example script, [`fetchTranslation.example.js`](fetchTranslation.example.js):

```sh
deno run --allow-net --allow-env fetchTranslation.example.js
```

## API

### `fetchTranslation(text, tolang = "en", model = "gpt-5.2")`

-   `text`: The string to translate.
-   `tolang`: The target language (e.g., `"en"`, `"Chinese"`, `"日本語"`). Defaults to `"en"`.
-   `model`: The OpenAI model to use. Defaults to `"gpt-5.2"`.

This function sends a request to the `https://api.openai.com/v1/responses` endpoint. For API costs, refer to the official [OpenAI Pricing](https://openai.com/pricing) page.

## License

Licensed under the MIT License.