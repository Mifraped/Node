const Book = require("../models/book");

let libro = null;
// let libro = new Book(
//   "La conjura de los necios",
//   "tragicomedia",
//   "John Kennedy-Tool",
//   20,
//   "https://m.media-amazon.com/images/I/81mpMgOqXBL._SY466_.jpg",
//   1,
//   1
// );

function getStart(req, res) {
  let respuesta = { error: false, codigo: 200, mensaje: "Punto de inicio" };
  res.send(respuesta);
}

function getBook(req, res) {
  let respuesta;
  if (libro) {
    respuesta = { error: false, codigo: 200, data: libro };
  } else {
    respuesta = { error: true, codigo: 200, data: "El libro no existe" };
  }
  res.send(respuesta);
}

function postBook(req, res) {
  let respuesta;
  if (!libro) {
    libro = new Book(
      "Crimen y castigo",
      "Novela",
      "Fiodor Dostoyevski",
      30,
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Crime_and_Punishment-1.png/375px-Crime_and_Punishment-1.png",
      1,
      1
    );
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Libro creado",
      data: libro,
    };
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "Ya hay un libro" };
  }
  res.send(respuesta);
}

function putBook(req, res) {
  let respuesta;
  if (libro) {
    libro.title = "Momo";
    libro.type = "Novela";
    libro.author = "Michael Ende";
    libro.price = "25";
    libro.photo =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Momo_Figuur_Hannover.jpg/330px-Momo_Figuur_Hannover.jpg";
    libro.id_book = "1";
    libro.id_user = "1";
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Libro modificado",
      data: libro,
    };
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "No hay ningun libro" };
  }
  res.send(respuesta);
}

function delBook(req, res) {
  let respuesta;
  if (libro) {
    libro = null;
    respuesta = { error: false, codigo: 200, mensaje: "Libro eliminado" };
  } else {
    respuesta = { error: true, codigo: 200, mensaje: "No hay ningun libro" };
  }
  res.send(respuesta);
}

module.exports = { getStart, getBook, postBook, putBook, delBook };
