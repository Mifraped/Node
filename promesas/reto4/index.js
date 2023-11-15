const wR = require('./writeAndReadObject')
const rC = require('./readConsole')

rC.readConsole(obj => wR.writeAndRead("./objeto.json", obj))