import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import {Route,Redirect} from 'react-router-dom'

import MyHome from './components/Myhome/Myhome';
//import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <Route path="/" exact>
      <Main/>
     </Route>
     
     <Route path="/myhome" >
         <MyHome/>
        </Route>

    </div>
  );
}

export default App;
