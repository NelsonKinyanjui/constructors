//  function Book(title,name){
    // this.name = name;
    // this.title = title;

//  }

//  const book = new Book ('The founder' ,'Nelson');

//  console.log(book.title);

 function Book (title ,author ,pages ,info){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function (){
        return `${book.title }, ${book.author }, ${book.pages}`;
    }

 }

 const book = new Book ('The Founder', 'Nelson' ,'278 pages');

console.log(book.info());
 