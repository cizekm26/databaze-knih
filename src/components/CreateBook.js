import BookForm from './BookForm.js';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreateBook = () => {
    const navigate = useNavigate();
    const [bookInfo, setBookInfo] = useState(
        {
            title: '',
            author: '',
            genre: '',
            year: 0,
            pages: 0,
            image: '',
            read: false
        }
    );

    function handleInputChange(input) {
        setBookInfo((bookInfo) => ({...bookInfo, [input.name]: input.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/api/books/save', bookInfo).then(function(response){
        console.log(response.data);
        navigate('/');
    });
    }

    return ( 
        <>
            <h2>Přidat knihu</h2>
            <BookForm bookInfo={bookInfo} onSubmit={handleSubmit} onInputChange={handleInputChange} />
        </>
     );
}
 
export default CreateBook;