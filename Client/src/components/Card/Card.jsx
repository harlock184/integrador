import styles from "./Card.module.css"
import {Link} from "react-router-dom"

import React from 'react';
export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   
   return (
      
      <div className={styles.card}>
         <div className={styles.card}></div>
         <div className ={styles.buttonContainer}>
         <button onClick={() => onClose(id)} className={styles.button}
         >X</button>
         </div>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
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

// import React from 'react';  
// import styles from "./Card.module.css";
// import { Link } from "react-router-dom";

// export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
//   return (
//     <div className={styles.card}>
//       <div className={styles.card}></div>
//       <div className={styles.buttonContainer}>
//         <button onClick={() => onClose(id)} className={styles.button}>
//           X
//         </button>
//       </div>
//       <Link to={`/detail/${id}`}>
//         <div className={styles.imageContainer}>
//           <img src={image} alt="Not found" />
//           <h2 className={styles.name}>{name}</h2>
//         </div>
//       </Link>
//       <div className={styles.propsContainer}>
//         <h2>{species}</h2>
//         <h2>{gender}</h2>
//       </div>
//     </div>
//   );
// }
