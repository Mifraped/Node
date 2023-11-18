import { Component, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  constructor(public bookService: BooksService, private toastr: ToastrService){}

  public anyade(titulo: HTMLInputElement, genero: HTMLInputElement, autor: HTMLInputElement, precio: HTMLInputElement, url: HTMLInputElement, idLibro: HTMLInputElement,){
    if(titulo.value && genero.value && autor.value && precio.value && url.value && idLibro.value){
      let nuevoLibro = new Book(titulo.value, genero.value, autor.value, Number(precio.value), url.value, Number(idLibro.value))
      this.bookService.add(nuevoLibro)
      titulo.value = ""
      genero.value = ""
      autor.value = ""
      precio.value = ""
      url.value = ""
      idLibro.value = ""
      if(this.bookService.getAll()[this.bookService.getAll().length -1] === nuevoLibro) this.toastr.success(`Se añadio correctamente "${nuevoLibro.title}"`)
    }else this.toastr.error("Faltan campos por rellenar")
          
  }

}
