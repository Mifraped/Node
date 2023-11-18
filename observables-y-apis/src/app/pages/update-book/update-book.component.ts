import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {

  constructor(public bookService: BooksService, private toastr: ToastrService){}

  public modifica(titulo: HTMLInputElement, genero: HTMLInputElement, autor: HTMLInputElement, precio: HTMLInputElement, url: HTMLInputElement, idLibro: HTMLInputElement){
    if(titulo.value && genero.value && autor.value && precio.value && url.value && idLibro.value){
      let nuevoLibro = new Book(titulo.value, genero.value, autor.value, Number(precio.value), url.value, Number(idLibro.value))
    this.bookService.edit(nuevoLibro)
    titulo.value = ""
    genero.value = ""
    autor.value = ""
    precio.value = ""
    url.value = ""
    idLibro.value = ""
    if(this.bookService.getAll().includes(nuevoLibro)) this.toastr.success(`Se edito correctamente "${nuevoLibro.title}"`)
    }else this.toastr.error("Faltan campos por rellenar")
  }
}
