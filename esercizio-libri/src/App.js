import React from 'react';
import Home from './pages/Home';
import Book from './pages/Book';
import SavedBook from './pages/SavedBook';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header className="App-header" />
      <Routes>
        <Route exact path='/' element={<Home />} />,
        <Route path="/book/:id" element={<Book />} />,
        <Route path="/i-miei-libri" element={<SavedBook />} />
      </Routes>
    </div>

  );
}

export default App;
