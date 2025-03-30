import { Scenes } from "telegraf";
import { pickFilterScene } from "../scenes/pickFilter.js";
import { setRegionCodeScene } from "../scenes/setRegionCode.js";
import { setTextScene } from "../scenes/setText.js";

export const SetupStage = new Scenes.Stage([
  pickFilterScene,
  setTextScene,
  setRegionCodeScene,
]);
