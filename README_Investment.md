# 投資シミュレーター

リスクとリターンを学ぶ教育的なWebアプリケーションです。

## 機能

- **基礎知識**: 投資の基本的な概念を学習
- **シミュレーター**: 仮想マネーで投資体験
- **クイズ**: 知識確認のためのクイズ
- **プランナー**: 個人的な投資プランの作成
- **ミニゲーム1**: おつかいマスター（お金の使い方を学ぶ）
- **ミニゲーム2**: マネーソーター（お金の種類を学ぶ）

## 技術スタック

- Vanilla JavaScript (ES6+)
- Bootstrap 5
- Bootstrap Icons
- HTML5 / CSS3

## セットアップ

1. このリポジトリをクローンまたはダウンロード
2. ターミナルでプロジェクトディレクトリに移動
3. ローカルサーバーを起動:

```bash
# Python 3の場合
npm start
# または
python3 -m http.server 8000

# Python 2の場合
python -m SimpleHTTPServer 8000
```

4. ブラウザで http://localhost:8000 にアクセス

## ファイル構成

```
investment-simulator/
├── index.html              # メインHTMLファイル
├── package.json            # プロジェクト設定
├── README.md              # このファイル
└── src/
    ├── app.js             # メインアプリケーション
    ├── styles/
    │   └── main.css       # メインスタイル
    ├── utils/
    │   └── router.js      # SPAルーター
    └── components/
        ├── navbar.js      # ナビゲーション
        ├── home.js        # ホームページ
        ├── knowledge.js   # 基礎知識ページ
        ├── simulator.js   # 投資シミュレーター
        ├── quiz.js        # クイズ機能
        ├── planner.js     # 投資プランナー
        ├── minigame1.js   # おつかいマスター
        └── minigame2.js   # マネーソーター
```

## 使い方

1. **基礎知識**: 投資の基本概念について学習できます
2. **シミュレーター**: 100万円の仮想マネーで様々な投資商品を体験
3. **クイズ**: 5問のクイズで理解度をチェック
4. **プランナー**: 個人の状況に応じた投資プランを作成
5. **ミニゲーム**: 楽しくお金について学習

## ライセンス

MIT License
