const chalk = require("chalk");

exports.greetingEnglish = function() {
  console.log(chalk.white("Hello"));
};

exports.greetingJapanese = function() {
  console.log(chalk.red("Konichiwa"));
};

exports.greetingSpanish = function() {
  console.log(chalk.yellow("Hola"));
};

exports.greetingIcelandic = function() {
  console.log(chalk.cyan("Halló"));
};
