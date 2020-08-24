"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookInfoComponent = void 0;
var core_1 = require("@angular/core");
var BookInfoComponent = /** @class */ (function () {
    function BookInfoComponent(bookService, router, activatedRoute) {
        var _this = this;
        this.bookService = bookService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.bookId = +this.activatedRoute.snapshot.paramMap.get('id'); //dấu cộng để ép kiểu
        this.getBookById = function () {
            _this.bookService.getBookById(_this.bookId).subscribe(function (res) {
                _this.book = res;
                // console.log(this.book.title);
            });
        };
    }
    BookInfoComponent.prototype.ngOnInit = function () {
        this.getBookById();
        // console.log(this.bookId);
    };
    BookInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-book-info',
            templateUrl: './book-info.component.html',
            styleUrls: ['./book-info.component.css']
        })
    ], BookInfoComponent);
    return BookInfoComponent;
}());
exports.BookInfoComponent = BookInfoComponent;
