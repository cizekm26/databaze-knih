function BookDialog ({book, isOpened, onClose}) {
    const read = (book?.read) ? "ano" : "ne"; 
    return ( 
        <dialog id="book-dialog" open={isOpened}>
            <h3>{book?.title}</h3>
            <form method="dialog">
                <ul>
                    <li>Autor: {book?.author}</li>
                    <li>Žánr: {book?.genre}</li>
                    <li>Rok vydání: {book?.year}</li>
                    <li>Počet stran: {book?.pages}</li>
                    <li>Přečtena: {read}</li>
                </ul>
                <button type="submit" onClick={() => onClose()}>Zavřít</button>
            </form>
        </dialog>
     );
}
 
export default BookDialog;