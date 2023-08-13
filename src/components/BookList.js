import BookContainerFilter from "./BookContainerFilter";
import { useEffect, useState } from "react";
import axios from "axios"


function BookList() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        getBooks();
    }, []);

    function getBooks() {
        axios.get('http://localhost:80/api/books/').then(function(response) {
            console.log(response.data);
            setBooks(response.data);
        })
    }

    function deleteBook(id){
        axios.delete(`http://localhost:80/api/book/${id}/delete`).then(function(response) {
            getBooks();
         });
    }
    return ( 
        <>
            <h2>Seznam knih</h2>
            <BookContainerFilter books={books} deleteBook={deleteBook}/>
        </>
     );
}
 
export default BookList;