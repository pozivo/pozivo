import React from 'react'
import { Link } from 'react-router-dom';
import '../style/SingleResult/SingleResult.css'

function SingleResult({ titolo, thumbnail }) {
    return (
        
            <div className='container__sr'>
                <div className="book__container">
                    <img src={thumbnail} alt="" className='img__copertina' />
                    <h4 className='titolo__container'>{titolo}</h4>
                </div>
            </div>
        
    )
}

export default SingleResult
