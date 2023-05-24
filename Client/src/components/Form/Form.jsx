import {useState} from "react";
import validation from "../Validation/Validation";

const Form =({login})=>{//revisar esto
    const [errors, setErrors]= useState({})
    const[userData, setuserData]=useState({
        email: "",
        password: ""
    });

    const handleChange = (event) =>{
        setuserData({

            ...userData,
            [event.target.name]:event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value

        }))


    }
    const handleSubmit =(event)=>{
        event.preventDefault();
        login(userData);
        // login(userData.email, userData.password)

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{color: "white"}}>Email: </label>
            <input type="email" name="email" value={userData.email} onChange={handleChange
            }/>
            {errors.email && <p style={{color: "white"}}>{errors.email}</p>}
            <hr/>

            <label htmlFor="password" style={{color: "white"}}>Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange
            }/>
            {errors.password && <p style={{color: "white"}}>{errors.password}</p>}
            <button>Submit</button>




        </form>



    )
}
export default Form;
