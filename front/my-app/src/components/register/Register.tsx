"use client"
//sweetalert
import Swal from "sweetalert2";
//types
import { IRegister } from "@/types/IRegister";
//vendors
import { ChangeEvent, FormEvent, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

const Register:React.FC = () => {
  const router = useRouter();
 const[userData,setUserData] = useState<IRegister>({
  name:"",
  email:"",
  password:"",
  address:"",
  phone:""
 });

 const [errors,setErrors] = useState({});  
 const [errorMessage,setErrorMessage] = useState('');

//handlechange
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
   const {name,value} = event.target;

   setUserData({...userData,[name]: value});

  }


  //submit
  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

     const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;

     if(!userData.email || !userData.password ) {
      setErrorMessage("missing email, password or confirm password")
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
      return;
     }

     else if(!passwordRegex.test(userData.password)){
     setErrors({
      errors:"Error de password"
     })
     setErrorMessage("La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un carácter especial.")
     setTimeout(() => {
      setErrorMessage('')
     }, 2000);
     return;
     }

     
     
     
    await axios.post("http://localhost:3001/users/register",userData)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Register Success",
      showConfirmButton: false,
      timer: 1500
    });
    setErrors({});
    setErrorMessage('');
    
    setUserData({
      name:"",
      email:"",
      password:"",
      address:"",
      phone:""
    });

    router.push("/login")
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <form className="flex w-full max-w-lg flex-col gap-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
    <h1 className="text-2xl mb-4 text-center font-bold">Register</h1>
  <div>
     <label htmlFor="nombre">Name:</label>
     <input type="text" 
     id="name"
     name="name"
     value={userData.name}
     onChange={handleChange}
     placeholder="Name"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>

    <div>
     <label htmlFor="email">Email:</label>
     <input type="text" 
     id="email"
     name="email"
     value={userData.email}
     onChange={handleChange}
     placeholder="Email"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>

     <div>
     <label htmlFor="password">Password:</label>
     <input type="password" 
     id="password"
     name="password"
     value={userData.password}
     onChange={handleChange}
     placeholder="Password"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>


     <div>
     <label htmlFor="address">Address:</label>
     <input type="text" 
     id="address"
     name="address"
     value={userData.address}
     onChange={handleChange}
     placeholder="address"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>

     <div>
     <label htmlFor="phone">Phone:</label>
     <input type="text" 
     id="phone"
     name="phone"
     value={userData.phone}
     onChange={handleChange}
     placeholder="phone"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>
     
     <button type="submit" className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Register
        </button>
        {<p style={{color:'red'}}>{errorMessage}</p>}
    </form>

    </div>
  )
}

export default Register
