## Tenkir

[Tenkir（テンキル）](https://tenkir.fly.dev/) はオンラインでプランニングポーカーを楽しめるツールです。チームメンバーでわいわい使ってね。

## Getting Started

```bash
yarn install
yarn dev
open http://localhost:3000
```

or

```bash
docker compose run app yarn install
docker compose up
```

## test

```bash
docker compose run playwright yarn
docker compose build playwright
docker compose run playwright yarn test
```

## code formatter

```bash
docker compose run app yarn format:fix
```
