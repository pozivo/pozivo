import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../style/Book/Book.css';

function Book(props) {
    const [bookData, setBookData] = useState([])
        useEffect(async() => {
            const bookID = props;
            const bookData = await axios.get(
         `https://www.googleapis.com/books/v1/volumes/${bookID}`
        );
    }, [])

        


    return (
        <div className='style__container'>
            <div className="style__info-container">
                <div>
                    <h2>Book</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quos, quaerat dicta tempora asperiores earum omnis commodi recusandae consequuntur ab saepe voluptas voluptatum doloremque optio excepturi praesentium beatae? Ipsum, omnis.</p>
                    <h4>Autore:</h4>
                </div>
                <div>
                    <img className='style__img' src="" alt="" />
                </div>

            </div>
            <div className="style__chapter">
                
            </div>


        </div>
    );
}

export default Book
