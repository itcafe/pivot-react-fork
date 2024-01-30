### Flexmonster を導入して Next.js + TypeScript で Pivot Table & Charts を使用する

## Introduction

公式サンプルのサイドメニューへ 1 メニュー追加し、追加ページにて Pivot Table と Chart の基本的な定義情報をまとめています
以下今回の対象の説明

nextjs-ts/src/UIElements/source/testdata_full_out.json
サンプルデータ
今回のサンプルでは API ではなくローカルの json を利用する想定でサンプルデータを追加

nextjs-ts/src/UIElements/SideMenu.tsx
サイドメニュー

nextjs-ts/src/app/pivot-table-demo-test/page.tsx
追加ページ

## 定義情報のまとめ

以下の項目について定義の概要のまとめ

```javascript
import { Report, Slice, DataSource, Options, Format } from "flexmonster";
```

# Report

Pivot Table で呼び出すレポートの基礎情報を定義

```javascript
const reportTest: Report = {
  dataSource: reportTestDatasource,
  slice: reportTestSlice,
  options: reportTestOptions,
  formats: [reportTestFormat],
};
```

# DataSource

データソースを定義

type：データソースのデータ型（API の場合は指定しない）
data：データソース
（filename：API の場合はこちらを使用）
mapping：データソースの項目の定義と型を記載

```javascript
const reportTestDatasource: DataSource = {
  type: "json",
  data: getData(),
  mapping: {
    customer_id: {
      type: "string",
    },
    device_id: {
      type: "string",
    },
    //
  },
};
```

# Slice

初期ロードで表示される集計単位を定義

```javascript
const reportTestSlice: Slice = {
  rows: [
    {
      uniqueName: "watch_start_time",
      sort: "asc",
    },
    {
      uniqueName: "gender",
      sort: "asc",
    },
    {
      uniqueName: "age",
      sort: "asc",
      filter: {
        query: {
          not_equal: -1,
        },
      },
    },
  ],
  columns: [
    {
      uniqueName: "[Measures]",
    },
  ],
  measures: [
    {
      uniqueName: "stay_time",
    },
    {
      uniqueName: "max_watch_duration",
    },
  ],
};
```

# Options

Pivot Table & Charts の表示形式を定義（チャートタイトルやレイアウト関連）

```javascript
const reportTestOptions: Options = {
  timePattern: "yyyy-MM-dd hh:mm:ss",
  chart: {
    type: "column_line",
    title: "Chart for SampleData",
  },
  grid: {
    type: "flat",
    grandTotalsPosition: "top",
  },
};
```

# Format

Pivot Table & Charts の表示形式を定義（数値の％表示やゼロサプレスなど）

```javascript
const reportTestFormat: Format = {
  thousandsSeparator: ",",
  decimalSeparator: ".",
  decimalPlaces: 0,
  textAlign: "right",
  isPercent: false,
};
```
