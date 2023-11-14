const fs = require('fs')
const readLine = require('readline')


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function generaObj() {
    let objeto = {}
    rl.question('Introduce un valor para name' + "\n", (nombre) => {
        objeto.name = nombre
        rl.question('Introduce un valor para surname' + "\n", (apellido) => {
            objeto.surname = apellido
            rl.question('Introduce un valor para age' + "\n", (edad) => {
                objeto.age = edad

                fs.writeFile("objeto.json", JSON.stringify(objeto), (err) => {
                    if (err) {
                        console.error("Algo ha salido mal", err)
                    }
                    console.log("Archivo creado");

                    fs.readFile("objeto.json", 'utf8', (err, contenido) => {
                        if (err) {
                            console.error("Upsss!", err)
                        }
                        console.log("Impimiendo archivo", contenido);
                        rl.close()
                    })
                })
            })
        })
    })
}
generaObj()

