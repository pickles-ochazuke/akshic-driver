import { RectActor } from "./actors/rect_actor";

function main(param: g.GameMainParameterObject): void {

	const scene = new g.Scene({game: g.game});

	scene.loaded.add(() => {

		new RectActor(scene);

	});

	g.game.pushScene(scene);
}

export = main;
