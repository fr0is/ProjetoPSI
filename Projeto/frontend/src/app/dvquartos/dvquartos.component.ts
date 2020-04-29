import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

import { QuartoService } from "./../quarto.service";
import { Quarto } from "src/quarto";



@Component({
  selector: 'app-dvquartos',
  templateUrl: './dvquartos.component.html',
  styleUrls: ['./dvquartos.component.css']
})
export class DVQuartosComponent implements OnInit {
  
  valueMin;
  valueMax;
  
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.precoMuda(value);         
          return value + '€';
        case LabelType.High:
          this.precoMuda2(value);
          return value + '€';
        default:
          return '€' + value;
      }
    }
  }

  epoca = 0;
  EpBaixa(){
    this.epoca =1;
  }
  
  EpAlta(){
    this.epoca =0;
  }

  precoMuda(value){
    this.valueMin = value;
  }
  precoMuda2(value){
    this.valueMax = value;
  }



  constructor() { }

  ngOnInit(): void {
  }

}

/** 

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"]
})
export class BooksComponent implements OnInit {
  books: BookDisplay[] = [];

  constructor(
    private bookService: BookService,
    private authorService: AuthorService
  ) {}

  ngOnInit(): void {
    this.showBooks();
  }

  showBooks() {
    this.bookService.getBooks().subscribe(bookList => {
      const bookA = bookList as Book[];
      bookA.map((bookL) => {
        this.authorService.getAuthor(bookL.author).subscribe(author => {
          const bookD = new BookDisplay(bookL, author);
          this.books.push(bookD);
        });
      });
    });
  }
}

class BookDisplay {
  book: Book;
  author: Author;

  constructor(b: Book, a: Author) {
    this.book = b;
    this.author = a;
  }
}*/