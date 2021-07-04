class Bookshelf {
    constructor(apiURL){
        this.apiURL = apiURL;
        this.books = [];
        // Initiate book data fetching
        this.loadBooks();
    }

    isFavoriteBook(bookName) {
        return bookName.includes("JS");
    }
    
    getFavoriteBooks(){
        if(this.books.length){
            console.log(
                "Favori kitaplarınız : " +
                this.books.filter( book =>{ 
                    return this.isFavoriteBook(book.toString())
                })
            ); 
        }
        else console.log("Kitaplar Yüklenmedi");
    }
    
    loadBooks(){
        getBooksFromFakeAPI(apiURL,books=>{
            this.books = books;
        });
    }
}

function getBooksFromFakeAPI(apiURL, onBooksLoad) {
    setTimeout(function() {
        onBooksLoad([
            "Otostopçunun galaksi rehberi",
            "Albaya mektup yok",
            "You don't know JS",
            "JS: the good parts",
            42, // Lets imagine we have corrupted data in back-end
            false // Lets imagine we have corrupted data in back-end
        ]);
    }, 300);
}


const API_URL = 'somefake.url/getBooks';
const benimkitapligim = new Bookshelf(API_URL);

// Initiate call
benimkitapligim.getFavoriteBooks();
// Fake-response delay (3s)
setTimeout(()=>{benimkitapligim.getFavoriteBooks();},3000);

