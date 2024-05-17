function  validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/


    if(values.name === ""){
        error.name = "*Name required"
    }
    else{
        error.name = ""
    }
    
    if(values.email === ""){
        error.email = "*email required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "*Invalid email"
    }else{
        error.email = ""
    }

    if(values.password === ""){
       error.password = "*password required"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "*Invalid password"
    }else{
        error.password = ""
    }
    return error;
}
export default validation;