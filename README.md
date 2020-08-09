# Akashic Driver

**akashic-driver** はAkashicで開発する複雑なゲームを簡単にするためのプロジェクトです。

## 利用方法

 `akashic-driver` を利用するにはNode.jsが必要です。

初回のみ、以下のコマンドを実行して、ビルドに必要なパッケージをインストールしてください。
この作業は `akashic-driver` を新しく生成するごとに必要です。

```sh
npm install
```

### ビルド方法

通常のAkashicのTypeScriptプロジェクトと同様、 `akashic-driver` はTypeScriptで書かれているため、以下のコマンドでJavaScriptファイルに変換する必要があります。

```sh
npm run build
```

`src` ディレクトリ以下のTypeScriptファイルがコンパイルされ、`script` ディレクトリ以下にJavaScriptファイルが生成されます。

`npm run build` は自動的に `akashic scan asset script` を実行するので、`game.json` の更新が行われます。

### 動作確認方法

以下のどちらかを実行後、ブラウザで `http://localhost:3000/game/` にアクセスすることでゲームを実行できます。

* `npm start`

* `npm install -g @akashic/akashic-sandbox` 後、 `akashic-sandbox .`

### このプロジェクトの使い方

* ベースは typescript-minimal です。
* `src/main.ts` を編集することでゲームの作成が可能です。
* 基本的な使い方は typescript テンプレートと同じですが、このテンプレートでは最低限のものしか記述されていないため以下のことは行われていません。
  * スプライトの表示
  * 音を鳴らす
  * タッチイベント定義
* このプロジェクト特有のクラスとして、Actor, Component や、それらを継承したRectActorやFilledRectComponentがあります。
  * シーンごとにアクターを継承したクラスや、コンポーネントを継承したクラスを使って、ゲームを作成します。

### 基本的なクラスについて
#### [Actor](./src/bases/actor.ts)

抽象クラスです。
アクターは、複数のコンポーネントを持っています。
継承先のアクタークラスやアクターが持っているコンポーネントの更新処理は、Actor.update()で呼ばれます。

Actor を継承したクラスは、updateActor()メソッドを実装する必要があります。

#### [Component](./src/bases/component.ts)

抽象クラスです。
継承したクラスは、update()メソッドを実装する必要があります。
コンポーネントが他のコンポーネントを必要とする場合、アクターを経由してコンポーネントを取得します。

#### [RendererComponent](./src/components/renderer_component.ts)

抽象クラスです。
描画に関するコンポーネントは、このクラスを継承します。

update()メソッドとgenerate()メソッドを実装する必要があります。
generate()メソッドは描画のためのエンティティを作成するメソッドです（開発者が実装する必要があります）。

### その他

基本的な使い方は、公式のAkashicのプロジェクトと同じです。
