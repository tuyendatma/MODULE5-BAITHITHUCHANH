"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookListComponent = void 0;
var core_1 = require("@angular/core");
var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService) {
        var _this = this;
        this.bookService = bookService;
        this.bookList = [];
        this.getAllBooks = function () {
            _this.bookService.getAllBooks().subscribe(function (res) {
                _this.bookList = res;
                _this.bookLength = _this.bookList.length;
                // console.log(res);
            });
        };
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.getAllBooks();
    };
    BookListComponent.prototype.deleteBookById = function (id) {
        var _this = this;
        if (confirm('Bạn muốn xóa?')) {
            this.bookService.deleteBookById(id).subscribe(function (res) {
                window.alert("Xóa thành công");
                _this.getAllBooks();
                // console.log(res);
            });
        }
    };
    BookListComponent = __decorate([
        core_1.Component({
            selector: 'app-book-list',
            templateUrl: './book-list.component.html',
            styleUrls: ['./book-list.component.css']
        })
    ], BookListComponent);
    return BookListComponent;
}());
exports.BookListComponent = BookListComponent;
