import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
        <div className="App">
            <Header/>
            <Home/>
            <Footer/>
        </div>
  );
}

export default App;
