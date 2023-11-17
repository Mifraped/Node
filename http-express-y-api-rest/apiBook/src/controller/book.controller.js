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
    respuesta = { error: true, codigo: 200, data: "El libro es null" };
  }
  res.send(respuesta);
}

function postBook(req, res) {
  let respuesta;
  if (!libro) {
    libro = {};
    libro.title = req.body.title;
    libro.type = req.body.type;
    libro.author = req.body.author;
    libro.price = req.body.price;
    libro.photo = req.body.photo;
    libro.id_book = req.body.id_book;
    libro.id_user = req.body.id_user;
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
    libro.title = req.body.title;
    libro.type = req.body.type;
    libro.author = req.body.author;
    libro.price = req.body.price;
    libro.photo = req.body.photo;
    libro.id_book = req.body.id_book;
    libro.id_user = req.body.id_user;
    respuesta = {
      error: false,
      codigo: 200,
      mensaje: "Libro modificado",
      data: libro,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      mensaje: "No hay ningun libro que editar",
    };
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
