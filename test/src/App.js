import React from 'react'

import { Header, Footer } from './containers'
import { Navbar, Cover } from './components'

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Cover />
            <Footer />
        </div>
    )
}

export default App
