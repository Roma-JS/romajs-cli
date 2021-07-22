#!/usr/bin/env node

const yargs = require("yargs");
const checkKit = require("check-kit");
const open = require("open");

const locations = {
  website: "http://romajs.org",
  twitter: "https://twitter.com/roma_js",
  facebook: "https://www.facebook.com/romajs.org",
  youtube: "https://www.youtube.com/channel/UCFm8OPi5USbFybw9SaTLxeA",
  slack: "https://romajs.slack.com/",
  "slack-signup": "https://romajs.herokuapp.com/",
  github: "https://github.com/Roma-JS",
  meetup: "http://www.meetup.com/RomaJS/",
};

(async () => {
  const { current, name, latest, updateAvailable } = await checkKit.check({
    pkg: require("../package.json"),
  });

  if (updateAvailable) {
    console.log(`New version of ${name} available! ${current} -> ${latest}`);
  } else {
    for (const [name, url] of Object.entries(locations)) {
      yargs.command({
        command: name,
        desc: `Open RomaJS ${name}`,
        handler: async () => {
          await open(url);
        },
      });
    }
    yargs
      .wrap(yargs.terminalWidth())
      .showHelpOnFail(true)
      .demandCommand()
      .recommendCommands()
      .strict().argv;
  }
})();
