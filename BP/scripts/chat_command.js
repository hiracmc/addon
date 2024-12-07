import { world } from "@minecraft/server";

world.beforeEvents.chatSend.subscribe((ev) => {
	const message = ev.message;
			if (message = "!cheat") {
        ev.cancel = true;
	//実行するコマンド
        player.runCommandAsync('give @s diamond 64');
			break;
	}
});
