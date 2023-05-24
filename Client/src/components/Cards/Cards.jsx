import React from 'react';
import Card from '../Card/Card';
import styled from "styled-components"  
const Div = styled.div `
display: grid;
grid-template-column: 20% 20% 20% 20%;
justify-content: space-evenly;
padding: 5px;
width: screen;
margin: auto;
height: full;
overflow: hidden;
`

export default function Cards({characters, onClose}) {//¿Por que se utiliza characters como nombre del array en vez de "default"?
   return(
      <Div>
         {
            characters.map(({id, name, status, species, gender, origin, image})=> {
               return(

                  <Card
                  key={id}//este id es para react
                  id={id}// este id es para el desarrollador
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose={onClose}

                  />
                  
               )

            })
         }


      </Div>
   )


}
   
