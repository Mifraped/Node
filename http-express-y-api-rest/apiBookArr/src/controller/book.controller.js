const Book = require("../models/book");

// let libros = [];
let libros = [
  new Book(
    "La conjura de los necios",
    "Tragicomedia",
    "John Kennedy-Tool",
    23,
    "https://m.media-amazon.com/images/I/81mpMgOqXBL._SY466_.jpg",
    1,
    1
  ),
  new Book(
    "Momo",
    "Novela",
    "Michael Ende",
    18,
    "https://m.media-amazon.com/images/I/A1GUNgur6+L._SY466_.jpg",
    2,
    1
  ),
  new Book(
    "Crimen y castigo",
    "novela",
    "Fiodor Dostoyevski",
    25,
    "https://m.media-amazon.com/images/I/41hWRB-H+aL._AC_UY327_FMwebp_QL65_.jpg",
    3,
    1
  ),
];

function getStart(req, res) {
  let respuesta = { error: false, codigo: 200, message: "Punto de inicio" };
  res.send(respuesta);
}

function getBooks(req, res) {
  let id = req.query.id;
  let respuesta;
  if (id) {
    if (libros.some((libro) => libro.id_book == id)) {
      respuesta = {
        error: false,
        codigo: 200,
        data: libros.find((libro) => libro.id_book == id),
      };
    } else {
      respuesta = {
        error: true,
        codigo: 200,
        message: "No hay ningun libro con esa referencia",
      };
    }
  } else if (!id) {
    if (libros.length > 0) {
      respuesta = { error: false, codigo: 200, data: libros };
    } else {
      respuesta = { error: true, codigo: 200, message: "No hay ningun libro" };
    }
  }
  res.send(respuesta);
}

function addBook(req, res) {
  let newLibro = new Book(
    req.body.title,
    req.body.type,
    req.body.author,
    req.body.price,
    req.body.photo,
    req.body.id_book,
    req.body.id_user
  );
  libros.push(newLibro);
  let respuesta = {
    error: false,
    codigo: 200,
    message: `Añadido ${newLibro.title}`,
  };
  res.send(respuesta);
}

function editBook(req, res) {
  let id = req.query.id;
  let respuesta;
  if (libros.some((libro) => libro.id_book == id)) {
    let indice = libros.indexOf(libros.find((libro) => libro.id_book == id));
    libros[indice].title = req.body.title;
    libros[indice].type = req.body.type;
    libros[indice].author = req.body.author;
    libros[indice].price = req.body.price;
    libros[indice].photo = req.body.photo;
    libros[indice].id_book = req.body.id_book;
    libros[indice].id_user = req.body.id_user;
    respuesta = {
      error: false,
      codigo: 200,
      message: `Modificada la referencia ${id}`,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      message: `No hay ningun libro con esa referencia`,
    };
  }

  res.send(respuesta);
}

function deleteBook(req, res) {
  let id = req.query.id;
  let respuesta;
  if (libros.some((libro) => libro.id_book == id)) {
    libros.splice(
      libros.indexOf(libros.find((libro) => libro.id_book == id)),
      1
    );
    respuesta = {
      error: false,
      codigo: 200,
      message: `Eliminada la referencia ${id}`,
    };
  } else {
    respuesta = {
      error: true,
      codigo: 200,
      message: `No hay ningun libro con esa referencia`,
    };
  }
  res.send(respuesta);
}

module.exports = { getStart, getBooks, addBook, editBook, deleteBook };
