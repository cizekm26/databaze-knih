import BookForm from './BookForm.js';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditBook() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [bookInfo, setBookInfo] = useState([]);

    useEffect(() => {
        getBook();
    }, []);

    function getBook() {
        axios.get(`http://localhost:80/api/book/${id}`).then(function(response) {
            console.log(response.data);
            setBookInfo(response.data);
        });
    }

    function handleInputChange(input) {
        setBookInfo((bookInfo) => ({...bookInfo, [input.name]: input.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`http://localhost:80/api/book/${id}/edit`, bookInfo).then(function(response){
            console.log(response.data);
            navigate('/');
        });
    }

    return ( 
        <>
            <h2>Editovat knihu</h2>
            <BookForm bookInfo={bookInfo} onSubmit={handleSubmit} onInputChange={handleInputChange} />
        </>
     );
}
 
export default EditBook;