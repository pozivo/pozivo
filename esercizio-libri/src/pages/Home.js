import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import '../style/SearchBar/SearchBar.css'
import Result from '../components/Result';
// import SearchBar from '../components/SearchBar';



function App() {

    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (inputText.trim() === '') {
            return
        }

        await setLoading(true);
        const myData = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${inputText}`
        );

        await setData(myData.data);
        await setLoading(false);
    }

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    const showResults = () => {
        if (data.totalItems === 0) {
            return <p> Ricerca senza risultati</p>
        } else if (data.length === 0) {
            return <p>cerca qualcosa</p>
        } else {
            return loading ? <p>carico...</p> : <Result data={data} />
        }
    }


    return (
        <div className="App">
            
            <div className='container__sb'>
                <h1>Cerca un libro</h1>
                <div className='Cerca__container'>
                    <input value={inputText} onChange={handleInput} type='text' />
                    <button className='Cerca' onClick={fetchData}>Cerca</button>
                </div>
            </div>
            <h3>Results</h3>
            {showResults()}
        </div>
    );
}

export default App;
