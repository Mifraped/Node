let fs = require('fs/promises')
const path = require('path')

// function writeAndRead(path, obj){
//     fs.writeFile(path, JSON.stringify(obj))
//         .then(() => fs.readFile(path, "utf-8"))
//         .then(data => console.log(JSON.parse(data)))
//         .catch(err => console.log(err))
// }

async function writeAndRead(path, obj){
    await fs.writeFile(path, JSON.stringify(obj))
    let data = await fs.readFile(path, "utf-8")
    console.log(JSON.parse(data));
}

module.exports = {writeAndRead}