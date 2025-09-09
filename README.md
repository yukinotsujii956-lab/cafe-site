# Leaf & Latte – Café Website

多言語対応のカフェ公式サイト（デモ）。GitHub Pagesで公開。

## Features
- JP/EN 多言語 & hreflang
- OGP / 構造化データ（CafeOrCoffeeShop）
- 画像最適化（WebP + lazyload）
- 問い合わせフォーム（Formspree, JSリダイレクト）
- Sitemap / robots.txt / Favicon
- アクセス解析（Plausible or GA4）

## Tech Stack
- HTML / CSS（vanilla）
- JavaScript（必要最低限）
- Hosting: GitHub Pages

## Structure
/
├─ index.html / menu.html / about.html / contact.html / thanks.html / 404.html
├─ en/ (英語版4ページ)
├─ css/style.css
├─ js/app.js
├─ images/* （webp と jpg を併存）
├─ manifest.json / sitemap.xml / robots.txt

## Setup & Deploy
- GitHub に push → GitHub Pages が自動公開
- 変更反映が遅い場合は `?v=数字` を付与して更新
- 画像追加時は WebP も併せて作成すること

## Forms
- Endpoint: `https://formspree.io/f/xwpnwbeb`
- Success: JS で `thanks.html` に遷移（`_next` は未使用）
- Anti-spam: `_gotcha` / `required` / `type="email"`

## Analytics
- Plausible 推奨：
  ```html
  <script defer data-domain="yukinotsujii956-lab.github.io/cafe-site"
          src="https://plausible.io/js/script.js"></script>

