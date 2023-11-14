const fs = require('fs')

let objeto = {
    name: "Julian",
    surname: "Perez",
    age: 49
}

fs.writeFile("objeto.json", JSON.stringify(objeto), (err) => {
    if(err){
        console.error("Algo ha salido mal", err)
    } 
    console.log("Archivo creado");

    fs.readFile("objeto.json", 'utf8', (err, contenido) => {
    if(err){
        console.error("Upsss!", err)
    }
    console.log("Impimiendo archivo", contenido);
})

})

