const fs = require('fs')
const readLine = require('readline')


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

    let objeto = {}
    rl.question('Introduce un valor para name' + "\n", (nombre) => {
        objeto.name = nombre
        rl.question('Introduce un valor para surname' + "\n", (apellido) => {
            objeto.surname = apellido
            rl.question('Introduce un valor para age' + "\n", (edad) => {
                objeto.age = edad

                fs.writeFile("objeto.json", JSON.stringify(objeto), (err) => {
                    if (err) {
                        console.error("No se ha podido crear el archivo", err)
                    }
                    console.log("Archivo creado");

                    fs.readFile("objeto.json", 'utf8', (err, contenido) => {
                        if (err) {
                            console.error("No se puede leer el archivo", err)
                        }
                        console.log("Imprimiendo el archivo" + "\n", contenido);
                        rl.close()
                    })
                })
            })
        })
    })