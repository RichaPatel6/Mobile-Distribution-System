function validation(values){
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const password_pattern = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[a-zA-Z]).{8,}$/

  if(values.name === ""){
    error.email_pattern="Email field is required"
  }else{
    error.name = ""
  }


  if(values.email_pattern === ""){
    error.email_pattern="Email field is required"
  }
  else if(!email_pattern.test(values.email)){
    error.email = "Email didn't match"
  }else{
    error.email = ""
  }

  if(values.password_pattern === ""){
    error.password_pattern="Password field is required"
  }
  else if(!password_pattern.test(values.password)){
    error.password = "Password didn't match"
  }else{
    error.password = ""
  }

  return error;

  
};
export default validation;