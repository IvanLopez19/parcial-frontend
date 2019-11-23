import React from 'react';
//import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegacion from './components/Navegacion';
import Createfruta from './components/Createfruta';
import NoteList from './components/NotesList';

function App() {
  return (
  <BrowserRouter>
  <Navegacion/>
    
    <Route path="/" exact component={NoteList}/>
    <Route path="/edit/:id" exact component={Createfruta}/>
    <Route path="/create" exact component={Createfruta}/>
  </BrowserRouter>
  );
}

export default App;
