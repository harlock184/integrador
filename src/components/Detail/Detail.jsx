 import React, { useState, useEffect } from 'react';
 import axios from "axios";
 import {useParams,useNavigate} from "react-router-dom"


const Detail = ({onSearch}) => {
    const {id} = useParams()
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);
    const [character, setCharacter] = useState({})
return (

    <div>
        {
            character && <div>
                <h2>{character.name}</h2>
                <h2>{character.status}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.name}</h2>


            </div>
        }
    </div>
)
    
};

export default Detail;