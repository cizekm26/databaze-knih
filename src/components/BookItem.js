import { Link } from "react-router-dom";
import "./BookItem.css";

function BookItem ({book, onDelete, onTitleClick}) {
    const bookImage = (book.image) ? book.image : "book-icon.png";
    return ( 
        <div className="card" style={{width: "12rem"}}>
            <img className="card-img-to book-icon mx-auto" src={bookImage} alt={book.title} />
            <div className="card-body">
                <h4 className="book-title" onClick={() => onTitleClick(book)}>{book.title}</h4>
                <Link className="btn" to={`book/${book.book_id}/edit`}>Editovat</Link>
                <button className="btn" onClick={() => onDelete(book.book_id)}>Smazat</button>
            </div>
        </div>
     );
}
 
export default BookItem;