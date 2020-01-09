const writtenNumber = require("written-number");

const numWords = num => {
  if (isNaN(num)) return false;
  else return writtenNumber(num, { lang: "es" });
};

module.exports = { numWords };
