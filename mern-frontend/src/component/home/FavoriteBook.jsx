import React, {useEffect, useState} from 'react';
import BookCard from "./BookCard.jsx";


const FavoriteBook = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/books/all-books")
            .then(response => response.json())

            .then(response => {

                if (response.data && Array.isArray(response.data)) {
                    setBooks(response.data);
                } else {
                    console.error('Expected an array but got:', data);
                }
                // console.log(response.data)
            })
            .catch(error => console.error('Error fetching books:', error));


    }, []);


    return (
        <div>
            <BookCard books={books} headline={"Best Seller Books"}/>
        </div>
    );
};

export default FavoriteBook;
