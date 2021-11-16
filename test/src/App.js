import React from 'react'

import { Header, Footer } from './containers'
import { Navbarx, Cover, Section_1, Section_2 } from './components'

import './App.css';

const App = () => {
    return (
        <div className="App" expand="lg">
            <div className="gradient__bg">
                <Navbarx />
            </div>
                <Cover />
                <Section_1 />
                <Section_2 />
                
        </div>
    )
}

export default App
