import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/containers/services/book/book.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
// import { Book } from 'src/app/containers/model/book/book';



@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  createBookForm: FormGroup;

  constructor(private bookService : BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.createBookForm = new FormGroup(
      {
        title: new FormControl(),
        author: new FormControl(),
        description: new FormControl()
      }
    )
  }

  createNewBook() {
    let data = this.createBookForm.value;
    // console.log(data)
      this.bookService.createNewBook(data).subscribe(res =>{
        window.alert("Thêm mới thành công!")
        this.router.navigate(['/books'])
      })
  }
}
