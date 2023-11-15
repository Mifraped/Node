const fs = require('fs')

function writeAndRead(path, obj){
    fs.writeFile(path, JSON.stringify(obj), (err) => {
        if(err){
            console.error("No se ha podido crear el archivo", err)
        }
        fs.readFile(path, "utf-8", (err, contenido) => {
            if(err){
                console.error("No se puede leer el archivo", err)
            }
            console.log("Imprimiendo archivo" + "\n", contenido);
        })
    })
}
module.exports = {writeAndRead}