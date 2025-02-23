class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    
    fix() {
        this.state = this._state * 1.5;
    }

    set state(num) {
        if (num < 0) {
          this._state = 0;
        } else if (num > 100) {
            this._state = 100;
        } else {
            this._state = num;
        }
      }

      get state() {
        return this._state;
      }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
            }
    }

    findBookBy(key, value) {
        for (let item of this.books){
            if (item[key] === value) {
                return item;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let i;
        let book = null;
        for (i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                book = this.books[i]
                break;
            }
        }
       if (book) {
        this.books.splice(i, 1);
       } 
       return book;
    }

}

// task 3

class Student {
    constructor(name){
        this.name = name;
        this.diary = {};
    }

    addMark(mark, subject) {
        if (2 <= mark && mark <= 5) {
            if (!(subject in this.diary)) {
                this.diary[subject] = [];
            }
            this.diary[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        let result = 0;
        if (subject in this.diary) {
            result = this.diary[subject].reduce((sum, current) => sum + current, 0) / this.diary[subject].length;
        }
        return result;
    }

    getAverage() {
        let sum = 0;
        let keys = Object.keys(this.diary);
        for (let key of keys) {
            sum += this.getAverageBySubject(key);
          }
          return sum / keys.length;
    }
}