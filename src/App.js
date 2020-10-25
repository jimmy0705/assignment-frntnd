import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import {Route,Redirect} from 'react-router-dom'


import './App.css';
import MyHomePage from './components/Myhome/Index';

function App() {
  return (
    <div className="App">
     <Header/>
     <Route path="/" exact>
      <Main/>
     </Route>
     
     <Route path="/myhome" >
     <MyHomePage/>
        </Route>
      

    </div>
  );
}

export default App;
