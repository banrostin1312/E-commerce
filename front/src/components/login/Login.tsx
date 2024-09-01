
//vendors
import { ChangeEvent, FormEvent, useState } from "react"
import Link from "next/link";
import { useRouter } from "next/navigation";
//types
//Contexts
import { useAuth } from "@/contexts/AuthContext";


const Login:React.FC= () => {
const router = useRouter();
const {login,setErrorMessage,errorMessage} = useAuth();
const[userData,setUserData] = useState({
  email:'',
  password:'',
})

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
   const {name,value} = event.target;

   setUserData({...userData,[name]:value})

  }

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    try {
   await login(userData);
   router.push('/dashboard');
      

    } catch (error:any) {
      setErrorMessage(error.message);
      
      setTimeout(() => {
        setErrorMessage('');
      }, 2000);
    }

     
     setUserData({
      email:"",
      password:""
     })
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
  <form className="flex w-full max-w-lg flex-col gap-4 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-center text-lg font-semibold text-gray-700">¿Aun no tienes cuenta? <Link href='/register'>  <span className="text-indigo-600 hover:text-indigo-800 hover:underline ml-2">REGISTRAR</span></Link></h1>
    
     <div>
     <label htmlFor="email">Email:</label>
     <input type="email" 
     id="email"
     name="email"
     value={userData.email}
     onChange={handleChange}
     typeof="text"
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
     typeof="password"
     placeholder="Password"
     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
     />
     </div>
     <button type="submit" className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Login
        </button>
        {<p style={{color:'red'}}>{errorMessage}</p>}
    </form>

    </div>
  )
}

export default Login;
