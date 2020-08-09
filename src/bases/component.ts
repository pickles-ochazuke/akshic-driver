import { Actor } from "./actor";

export abstract class Component {

	protected actor: Actor;

	// （このコンポーネントが登録されている）アクターが登録されているシーンを取得する
	get scene(): g.Scene {
		return this.actor.scene;
	}

	constructor(actor: Actor) {
		this.actor = actor;
	}

	/**
   * updateメソッドは、登録しているアクターから呼び出される
   */
	abstract update(): void;
}
