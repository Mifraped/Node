const wR = require("./writeAndReadObject");
const rC = require("./readConsole");

rC.readConsole()
  .then((obj) => obj)
  .then((obj) => wR.writeAndRead("objeto.json", obj));
