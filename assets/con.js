//  function Book(title,name){
    // this.name = name;
    // this.title = title;

//  }

//  const book = new Book ('The founder' ,'Nelson');

//  console.log(book.title);

  function bookBud(title,author,pages,status,info){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status
    this.info = function (){
        return `${this.title } by ${this.author } ${this.pages} ${this.status} `;
    }

}
const bookBuddy = new bookBud('The Founder','Nelson Kinyanjui','280 pages','read')

console.log(bookBuddy.info());

console.log(Object.getPrototypeOf(bookBuddy) === bookBud.prototype);

console.log(bookBuddy.__proto__ === bookBud.prototype);

// legacy code  bookbuddy[[prototype]]