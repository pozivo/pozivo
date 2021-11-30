import React from 'react'
import '../style/Header/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header__container'>
            <Link to="/">
                <FontAwesomeIcon className='Book__icon' size='2x' icon={faBookmark}></FontAwesomeIcon>
            </Link>
            <div className='Book__add'>
                <Link style={{textDecoration: 'none'}} to="i-miei-libri">
                    <p>i miei libri</p>
                </Link>
                <FontAwesomeIcon size='1x' icon={faPlusSquare} ></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default Header
