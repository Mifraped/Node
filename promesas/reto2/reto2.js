const fs = require('fs/promises')

let objeto = {
    name: "Julian",
    surname: "Perez",
    age: 49
}

fs.writeFile("./objeto.json", JSON.stringify(objeto))
    .then(() => fs.readFile("./objeto.json", "utf-8"))
    .then(data => console.log(JSON.parse(data)))
    .catch(err => console.log(err))
