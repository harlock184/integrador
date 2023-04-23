import React from 'react';
import './App.css';
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards'
import SearchBar from './components/SearchBar/SearchBar'
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => alert(characterID)} />
         <Cards characters={characters} />
         <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Feder')}
         />
      </div>
   );
}

export default App;
