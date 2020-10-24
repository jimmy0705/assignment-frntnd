import React from 'react';
import FloorplanArea from './components/FloorplanArea/Index';
import Header from './components/Header';
import MaininputArea from './components/MainInputArea/Index';
import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <MaininputArea/>
     <FloorplanArea/>
    </div>
  );
}

export default App;
