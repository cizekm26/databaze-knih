import BookContainer from "./BookContainer";
import Filter from "./Filter";
import { useState } from "react";


function BookContainerFilter({books, deleteBook}) {

    const [filterInput, setFilterInput] = useState(null);

    
    function setFilter(input){
        const name = input.name;
        const value = input.value;
        setFilterInput((values) => ({ ...values, [name]: value }));
    }

    function removeFilter(){
        setFilterInput(null);
    }

    return ( 
        <>
            <details>
                <summary>Filtrovat</summary>
                <Filter filterInput={filterInput} onFilterChange={setFilter} onRemoveFilter={removeFilter}/>
            </details>
            <BookContainer books={books} onDelete={deleteBook} filterInput={filterInput}/>
        </>

     );
}
 
export default BookContainerFilter;