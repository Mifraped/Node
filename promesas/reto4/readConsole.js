const readLine = require('readline')

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {
        const rl = readLine.createInterface({
            input: process.stdin,
            output: process.stdout
        })
        rl.question(pregunta, (respuesta) => {
            resolve(respuesta)
            rl.close();
        })
    })
    return question
}

// function readConsole(callback){
//     let objeto = {}
//     pregunta("Introduce tu nombre:" + "\n")
//     .then(data => {
//         objeto.name = data
//         return pregunta("Introduce tu apellido:" + "\n")
//     })
//     .then(data => {
//         objeto.surname = data
//         return pregunta("Introduce tu edad:" + "\n")
//     })
//     .then(data => {
//         objeto.age = data
//         return callback(objeto)
//     })
//     .catch(err => console.log(err))
// }

async function readConsole(callback) {

    try {

        let objeto = {}

        objeto.name = await pregunta("Introduce tu nombre:" + "\n")
        objeto.surname = await pregunta("Introduce tu apellido:" + "\n")
        objeto.age = await pregunta("Introduce tu edad:" + "\n")

        return callback(objeto)
    } catch (err) {
        console.log(err);
    }
}

module.exports = { readConsole }