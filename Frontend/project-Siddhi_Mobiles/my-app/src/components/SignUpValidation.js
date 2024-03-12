// function validation(formData){
//     const newErrors = {};
//     const [errors, setErrors] = ({});


//     if(!formData.name.trim()){
//         newErrors.name = "Name is required";
//     }
//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
//     ) {
//       newErrors.email = "Invalid email address";
//     }

//     // Password validation
//     if (!formData.password.trim()) {
//       newErrors.password = "Password is required";
//     } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) {
//       newErrors.password = "Password must be at least 8 characters";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // Proceed with the form submission logic here
//       console.log("Form submitted:", formData);
//     }
//   };
// export default validation;