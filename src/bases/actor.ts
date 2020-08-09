import { Component } from "./component";

export abstract class Actor {
	// このアクターで毎フレーム更新するために必要
	// 描画のためのコンポーネントは、このエンティティに登録する
	protected _entity: g.E;

	// このアクターが登録されているシーン
	get scene() {
		return this._scene;
	}

	// このアクターに登録されているコンポーネントたち
	components: Component[] = [];

	constructor(private _scene: g.Scene) {
		// シーンに登録するために、必ず g.E のインスタンスが必要
		this._entity = new g.E({ scene: this.scene });

		// 更新処理を登録する（ラムダ式にしてるのは、このインスタンスをクロージャで保持するため）
		this._entity.update.add(() => this.update());

		// シーンに追加する（エンティティを登録することは、このインスタンスを登録することを意味する）
		this.scene.append(this._entity);
	}

	/**
   * アクターにコンポーネントを追加する
   * @param component このアクターに追加したいコンポーネント
   */
	addComponent(component: Component): void {
		this.components.push(component);
	}

	/**
   * アクターの更新処理を行う
   * 登録されているコンポーネントの更新処理も呼び出す
   * このメソッドはオーバライドしてはいけない
   */
	private update(): void {
		this.updateComponents();
		this.updateActor();
		this._entity.modified();
	};

	/**
   * 登録されているコンポーネントを全て更新する
   * このメソッドをオーバライドしてはいけない
   */
	private updateComponents(): void {
		this.components.forEach(component => component.update());
	};

	/**
   * 描画関係のコンポーネントは、このメソッドを使ってエンティティを登録する
   * このメソッドをオーバライドしてはいけない
   * @param e 追加するエンティティ
   */
	appendEntity(e: g.E) {
		this._entity.append(e);
	}

	/**
   * アクターが毎フレームで行うべき更新処理は、ここに実装する
   */
	abstract updateActor(): void;
}
