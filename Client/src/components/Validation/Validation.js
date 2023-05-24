const validation = (userData)=>{
    const errors ={}
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    .test(userData.email)){

        errors.email= "el correo no es válido"

    }
    if(!userData.email){
        errors.email = "debe ingresar un email."
    }
    if(userData.email.length>35){
        errors.email = "el email no debe superar los 35 caracteres"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "El password debe de contener al menos número"
        
    }
    if(userData.password.length<6 || userData.password.length >10){

        errors.password = "El password debe tener un tamaño entre 6 y 10 caracteres"
    }
    return errors;

};

export default validation;