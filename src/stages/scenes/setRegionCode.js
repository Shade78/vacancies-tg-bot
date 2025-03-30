import { Scenes } from "telegraf";

export const setRegionCodeScene = new Scenes.BaseScene("setRegionCode");

setRegionCodeScene.enter((ctx) => {
  return ctx.reply("Укажите код региона, например -- 77, 78, 64");
});

setRegionCodeScene.on("message", (ctx) => {
  ctx.session.newFilters.regionCode = ctx.message.text;

  ctx.reply(`Ок, код региона -- ${ctx.message.text}`);

  return ctx.scene.enter("pickFilter");
});
