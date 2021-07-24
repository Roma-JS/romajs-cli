#!/usr/bin/env node

const yargs = require("yargs");
const checkKit = require("check-kit");

(async () => {
  const { current, name, latest, updateAvailable } = await checkKit.check({
    pkg: require("../package.json"),
  });

  if (updateAvailable) {
    console.log(`New version of ${name} available! ${current} -> ${latest}`);
  } else {
    yargs
      .commandDir("../cmds")
      .wrap(yargs.terminalWidth())
      .showHelpOnFail(true)
      .demandCommand()
      .recommendCommands()
      .strict().argv;
  }
})();
