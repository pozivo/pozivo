import React from 'react';
import '../style/Result/Result.css'
import SingleResult from './SingleResult';
import { Link } from 'react-router-dom';

const Result = ({ data }) => {
    const myData = data.items;
    console.log('dati', data);

    const renderElement = () => {

        return myData.map((book) => {

            return (
                <Link key={book.id} to={`book/${book.id}`}>
                    <SingleResult
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                        titolo={book.volumeInfo.title}
                        descrizione={book.volumeInfo.description}
                    />
                </Link>
            )
        })
    }

    return (
        <div>

            <div className='result__container'>
                {renderElement()}
            </div>

        </div>
    )
}

export default Result;
