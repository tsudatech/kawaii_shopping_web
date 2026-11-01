# かわいい買い物メモ — 紹介ページ

かわいい買い物メモ（ホーム画面の表示名は「かいものメモ」・英語名 Shopping Memo・iPhone 向けの買い物リストアプリ）の紹介ページ。HTML / CSS / Vanilla JS だけの静的サイトで、GitHub Pages 等にそのままデプロイできる。

パズルちゃんの紹介ページ（`tsudatech/puzzle_chan_web`）・かわいい体重きろくの `web/` の構成を踏襲し、配色をアプリの色（`Shared/Palette.swift`）に合わせてある（アクセントはミント）。
体重きろくの「体重でかわる14の表情」の節は、このアプリでは「キャラが いっしょに 反応」（どんなときに どの顔になるか）の節にしている。スクリーンショットの節は置いていない。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | セマンティック HTML。各テキストは `data-i18n-key` で多言語化対応 |
| `styles.css` | 配色・レイアウト・レスポンシブ。地は `#FFF9F3`、文字は `#4A3020`、アクセントは `#3E8E7C` |
| `script.js` | 言語切替 (ja / en) ／ scroll ヘッダ ／ fade-in ／ ripple ／ lazy load ／ parallax |
| `images/faces/` | 白ねこの表情。アプリの `Shared/Characters.xcassets` と同じもの（320px に縮小） |
| `images/icon.png` | アプリのアイコン（256px）。ロゴ・ファビコンに使う |

文字はデモと同じ Zen Maru Gothic（本文）と Baloo 2（数字）を Google Fonts から読む。

## 文言

- 日本語は `index.html` に直接書いてあり、`script.js` の `translations.ja` にも同じものを持っている（言語を切りかえて戻すため）。
  文言を変えたら両方を直すこと。
- 英語の呼び名（Shopping Memo / Buddy / Faces / Running low? / Done shopping など）は、アプリの `Shared/en.lproj/Localizable.strings` に合わせてある。
- キャラが反応する場面は、アプリの判定（`AppStore` の `addItem`・`toggle`・`greet` など）どおりに書いてある。条件を変えたら、こちらも直すこと。

## 公開する前に直すところ

- App Store のリンク（`#download` の「App Store でダウンロード」）を、公開後の実際の URL に差しかえる。
- アプリの名前（「かわいい買い物メモ」/ Shopping Memo）は、App Store の名前が決まったら合わせる（ASO の資料）。
- 対応 iOS（「iOS 18.0 以降」）は、いまのプロジェクトの設定（アプリ本体・ウィジェットとも 18.0）に合わせてある。対応 iOS を変えたら直す。
- 広告（AdMob のバナーと、「おかいもの おわり」のあとの全画面広告）を入れたので、システム要件は「App内課金なし（広告あり）」、プライバシーポリシーには「広告について」がある。
  広告の種類や出し方を変えたら、「広告について」・要件・お子さまの利用・外部との通信を直すこと。

## 手元で見る

```bash
cd web
python3 -m http.server 8765
# http://localhost:8765/ を開く。?lang=en で英語
```
# kawaii_shopping_web
