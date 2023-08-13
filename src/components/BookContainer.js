import './BookContainer.css'
import BookDialog from "./BookDialog";
import BookItem from './BookItem.js'
import {useState} from 'react';

function BookContainer({books, filterInput, onDelete}) {
    const bookItems = [];
    const [clickedBook, setClickedBook] = useState(null);
    const [isOpened, setIsOpened] = useState(false);

    
    function handleBookClick(book){
        setClickedBook(book);
        setIsOpened(true);
    }

    function handleCloseDialog(){
        setClickedBook(null);
        setIsOpened(false);
    }

    books.forEach((book) => {
        if(filterInput){
        if(filterInput.title && book.title.toLowerCase().indexOf(filterInput.title.toLowerCase()) === -1) 
            return;
        if(filterInput.author && book.author.toLowerCase().indexOf(filterInput.author.toLowerCase()) === -1)
            return;
        if(filterInput.genre && book.genre.toLowerCase().indexOf(filterInput.genre.toLowerCase()) === -1)
            return;
        }
        bookItems.push(
            <BookItem book={book} onDelete={onDelete} onTitleClick={handleBookClick} key={book.book_id} />
        )
    })
    return ( 
        <>
            <div className="book-container bg-secondary">
                {(bookItems.length > 0) ? bookItems : "V seznamu nejsou žádné knihy"}
            </div>
            <BookDialog book={clickedBook} isOpened={isOpened} onClose={handleCloseDialog}/>
        </>
    );
}
 
export default BookContainer;