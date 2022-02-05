
export const validate = (data, type) => {

let errors = {}



//email
if (!data.email){
    errors.email = "Email required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)){
    errors.email = "Invalid Email"
}else {
    delete errors.email
}

//password
if(!data.password){
    errors.password = "Password required"
}else if (data.password.length < 8){
    errors.password = "Your password must be 8 character or more"
}else {
    delete errors.password 
}



if (type === "signUp"){
//username
if (!data.username.trim()) {
    errors.username = "Username required"
}else{
    delete errors.username
}

//confirm password

if (!data.confirmPassword){
    errors.confirmPassword = "Confirm the password "
}else if (data.confirmPassword !== data.password){
    errors.confirmPassword = "Password do not match"
}else {
    delete errors.confirmPassword
}
}

return errors
};


