const chalk = require("chalk");

exports.goodbyeEnglish = function() {
  console.log(chalk.white("Goodbye"));
};

exports.goodbyeJapanese = function() {
  console.log(chalk.red("Sayōnara"));
};

exports.goodbyeSpanish = function() {
  console.log(chalk.yellow("Adiós"));
};

exports.goodbyeIcelandic = function() {
  console.log(chalk.cyan("Bless"));
};
