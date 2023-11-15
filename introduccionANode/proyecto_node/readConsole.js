const readLine = require('readline')


function readConsole(callback){

    const rL = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let objeto = {}

    rL.question("Introduce tu nombre:" + "\n", (nombre) => {
        objeto.name = nombre
        rL.question("Introduce tu apellido:" + "\n", (apellido) => {
            objeto.surname = apellido
            rL.question("Introduce tu edad:" + "\n", (edad) => {
                objeto.age = edad
                rL.close()
                return callback(objeto)
            })
        })
    })
}
module.exports = {readConsole}