const fs = require('fs/promises')
const readLine = require('readline')

function pregunta(pregunta){
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

// async function creaGuardaObj(){
//     try{
//         let objeto = {}
//     objeto.name = await pregunta("Introduce tu nombre:" + "\n")
//     objeto.surname = await pregunta("Introduce tu apellido" + "\n")
//     objeto.age = await pregunta("Introduce tu edad" + "\n")

//     await fs.writeFile("./objeto.json", JSON.stringify(objeto))

//     let data = await fs.readFile("./objeto.json", "utf-8")
//     console.log(data);
//     }catch(err){
//         console.log(err)
//     } 
// }
// creaGuardaObj()



let objeto = {}
pregunta("Introduce tu nombre:" + "\n")
    .then(data => {
        objeto.name = data
        return pregunta("Introduce tu apellido:" + "\n")})
    .then(data => {
        objeto.surname = data
        return pregunta("Introduce tu edad:" + "\n")})
    .then(data => {
        objeto.age = data
        return fs.writeFile("objeto.json", JSON.stringify(objeto))})
    .then(() => {
        return fs.readFile("objeto.json", "utf-8")})
    .then(data => console.log(data))
    .catch(err => console.log(err))