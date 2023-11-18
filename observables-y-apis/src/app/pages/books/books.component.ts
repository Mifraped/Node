import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  public buscando: boolean = false
  public buscado: Book

  @ViewChild("ref") ref:ElementRef

  constructor(public bookService: BooksService, private toastr: ToastrService) { }

  public buscaLibro(inpRef: HTMLInputElement) {
    if(inpRef.value === "") this.buscando = false
    else if(this.bookService.getAll().some(elem => elem.id_book === Number(inpRef.value))){
      this.buscando = true
      this.buscado = this.bookService.getOne(Number(inpRef.value))}
    else this.toastr.error(`No existe la referencia ${inpRef.value}`)
  }

    public cambioBuscando(){
      this.buscando = false
      this.ref.nativeElement.value = ""
    }
}
