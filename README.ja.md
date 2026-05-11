# openai-translation

OpenAI APIを使用したテキスト翻訳のためのシンプルなDenoモジュールです。

## 特徴

- 指定したターゲット言語（デフォルト: 英語）へテキストを翻訳します。
- 翻訳に使用するOpenAIモデルをカスタマイズ可能です。
- 任意のDenoプロジェクトへ簡単に組み込むことができます。

## 前提条件

- [Deno](https://deno.land/) ランタイムのインストール
- OpenAI APIキー

## セットアップ

1. プロジェクトのルートディレクトリに `.env` ファイルを作成します。
2. ファイルにOpenAI APIキーを追加します。
    ```sh
    OPENAI_APIKEY="sk-..."
    ```

## 使い方

### モジュールとして

Denoプロジェクトで `fetchTranslation` 関数を直接インポートして使用します。

```javascript
import { fetchTranslation } from "https://code4fukui.github.io/openai-translation/fetchTranslation.js";

// 英語（デフォルト）に翻訳
const en_translation = await fetchTranslation("元気？");
console.log(en_translation); // "How are you?"

// 特定の言語（例: 中国語）に翻訳
const zh_translation = await fetchTranslation("元気？", "中国語");
console.log(zh_translation); // "你好吗？"
```

### サンプルの実行

同梱のサンプルスクリプト [`fetchTranslation.example.js`](fetchTranslation.example.js) を実行するには、以下のコマンドを使用します。

```sh
deno run --allow-net --allow-env fetchTranslation.example.js
```

## API

### `fetchTranslation(text, tolang = "en", model = "gpt-5.2")`

- `text`: 翻訳する文字列。
- `tolang`: ターゲット言語（例: `"en"`, `"Chinese"`, `"日本語"`）。デフォルトは `"en"`。
- `model`: 使用するOpenAIモデル。デフォルトは `"gpt-5.2"`。

この関数は `https://api.openai.com/v1/responses` エンドポイントにリクエストを送信します。APIの利用料金については、公式の [OpenAI Pricing](https://openai.com/pricing) ページを参照してください。

## ライセンス

MIT License の下で公開されています。
