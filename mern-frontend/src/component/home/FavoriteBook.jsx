import React, {useEffect} from 'react';


const FavoriteBook = () => {
    const [books, setBooks] = React.useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/books/all-books").then(res => res.json()).then(data => console.log(data))
    }, []);

    return (
        <div>FavoriteBook</div>
    );
};

export default FavoriteBook;
