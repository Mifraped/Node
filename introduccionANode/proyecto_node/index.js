const wR = require("./writeAndReadObject")
const rC = require("./readConsole")

rC.readConsole(objeto => wR.writeAndRead("objeto.json", objeto))