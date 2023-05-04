import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Detail from './components/Detail/Detail';
import About from "./components/About/About"



const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charatersFiltered = characters.filter(character => character.id !== Number(id));
      setCharacters(charatersFiltered);
   };

   return (
      <div className='App'>
         <Router>
            <Nav onSearch={onSearch} />
            <Routes>
               <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
