# flexmonster セットアップ

専用の CLI をインストールする必要があります.
CLI のインストールは Dockerfile に記載しています.
https://www.flexmonster.com/doc/integration-with-react/

Nextjs との統合
https://www.flexmonster.com/doc/integration-with-next-js/?r=gh_react

公式の Nextjs サンプル
https://github.com/flexmonster/pivot-react/blob/master/nextjs-ts/src/UIElements/PivotWrapper.tsx

# 注意

nextjs14 系にアップデートすると flexmonster.full.js が CRLF で作成されているためエラーとなる.
(LF に修正すると正常稼働するが公式が 14 系に対応するまでサンプルが提供されている 13 系でテストを行う)
