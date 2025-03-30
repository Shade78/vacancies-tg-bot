import { session, Telegraf } from "telegraf";
import { getConfig } from "./config.js";
import { HelpCommand } from "./commands/help.js";
import { SearchCommand } from "./commands/search.js";
import { SetupCommand } from "./commands/setup.js";
import { StartCommand } from "./commands/start.js";
import { SetupStage } from "./stages/setup/index.js";

class Bot {
  constructor() {
    this.config = getConfig();
    this.bot = new Telegraf(this.config.tg_token);

    this.bot.use(session());
    this.bot.use(SetupStage.middleware());

    this.bot.catch((err, ctx) => {
      console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
    });
  }

  init() {
    this.commands = [
      new StartCommand(this.bot),
      new HelpCommand(this.bot),
      new SetupCommand(this.bot),
      new SearchCommand(this.bot),
    ];

    for (const command of this.commands) {
      command.exec();
    }

    this.bot.launch();
  }
}

const bot = new Bot();
bot.init();

console.log("Bot has been started!");
