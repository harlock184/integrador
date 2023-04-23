import styles from "./Card.module.css"

import React from 'react';
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   return (
      
      <div className={styles.card}>
         <div className={styles.card}></div>
         <div className ={styles.buttonContainer}>
         <button onClick={onClose} className={styles.button}
         >X</button>
         </div>
         <div className={styles.imageContainer}><img src={image} alt='Not found' />
         <h2 className={styles.name}>{name}</h2>
      </div>
      <div className={styles.propsContainer}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
      </div> 
         
        
         
         {/* <h2>{status}</h2>
        
         <h2>{origin}</h2> */}
         
      </div>
   );
}   
  
