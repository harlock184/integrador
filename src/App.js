import React from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from './components/Form/Form';

import Detail from './components/Detail/Detail';
import About from "./components/About/About"
// import { BrowserRouter } from 'react-router-dom';


const email = "harlock184@gmail.com"
const password = "feder1234"

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
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess]= useState(false);
   const navigate = useNavigate();
   const login =(userData)=>{
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   
      
   }
   useEffect(()=>{
      !access && navigate("/")

   }, [access])


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
      {
      location.pathname !=="/" && <Nav onSearch={onSearch} /> 
      }
  


      
          <Routes>
              <Route path="/"element={<Form login={login}/>}/>
              <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/about" element={<About />} />
          </Routes>
      
   </div>

     
   );
}

export default App;


