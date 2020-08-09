import { Actor } from "./actor";

export abstract class Component {

	// （このコンポーネントが登録されている）アクターが登録されているシーンを取得する
	get scene(): g.Scene {
		return this.actor.scene;
	}

	constructor(protected actor: Actor) {}

	/**
   * updateメソッドは、登録しているアクターから呼び出される
   */
	abstract update(): void;
}
