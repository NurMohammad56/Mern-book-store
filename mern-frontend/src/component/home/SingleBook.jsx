import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
    const book = useLoaderData();
    // const book = useLoaderData() || { _id: "12345", title: "Test Book" };


    if (!book) {
        return <div>Loading.......</div>;
    }

    return (
        <div>
            <h1>Single Book Details : {book.data._id}</h1>

        </div>
    );

};

export default SingleBook;
