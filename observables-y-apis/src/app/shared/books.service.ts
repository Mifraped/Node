import { EventEmitter, Injectable } from '@angular/core';
import { Book } from '../models/book';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private books: Book[] = [new Book("1984", "Ficcion", "George Orwell", 25, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nineteen_Eighty-Four_cover_Soviet_1984.jpg/220px-Nineteen_Eighty-Four_cover_Soviet_1984.jpg", 1),
                            new Book("La conjura de los Necios", "Tragicomedia", "John Kennedy Toole", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLgLIlwGCT8NKGRwBHm8UKU3ehVmq0UfftQ&usqp=CAU", 2),
                            new Book("Sin noticias de Gurb", "Comedia", "Eduardo Mendoza", 19, "https://imagessl5.casadellibro.com/a/l/s7/55/9788432221255.webp", 3)]

  constructor(private toastr: ToastrService) { }

  public getAll(): Book[] {
    return this.books
  }

  public getOne(id_libro: number): Book {
    return this.books.find(elem => elem.id_book === id_libro)
  }

  public add(book: Book): void {
    this.books.push(book)
  }

  public edit(book: Book): boolean {
    if(this.books.some(elem => elem.id_book === book.id_book)){
      let libroASustituir = this.books.find(elem => elem.id_book === book.id_book)
      this.books.splice(this.books.indexOf(libroASustituir), 1, book)
    }else this.toastr.error(`La referencia ${book.id_book} no existe`)
    
    return true
  }

  public delete(id_libro: number): boolean{
    let libro = this.books.find(elem => elem.id_book === id_libro)
    this.books.splice((this.books.indexOf(libro)), 1)     
    return true
  }

}
