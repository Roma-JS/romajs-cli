"use strict";
const open = require("open");

const locations = {
  website: "http://romajs.org",
  twitter: "https://twitter.com/roma_js",
  facebook: "https://www.facebook.com/romajs.org",
  youtube: "https://www.youtube.com/channel/UCFm8OPi5USbFybw9SaTLxeA",
  slack: "https://romajs.slack.com/",
  slackSignup: "https://romajs.herokuapp.com/",
  github: "https://github.com/Roma-JS",
  meetup: "http://www.meetup.com/RomaJS/",
};

exports.command = "open <location>";

exports.desc = `open in a browser one of the following locations ${Object.keys(
  locations,
)}`;

exports.builder = (yargs) => {
  yargs.option("location", {
    describe: "one of the RomaJS pages",
    choices: Object.keys(locations),
  });
};

exports.handler = async function (args) {
  await open(locations[args.location]);
};
