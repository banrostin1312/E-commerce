"use client"
//vendors

import axios from 'axios';
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
//types
import { IUser } from '@/types/IUser';
import { IOrder } from '@/types/IOrders';
//swal
import Swal from 'sweetalert2';
// AuthContext.tsx
import { AxiosResponse } from 'axios';

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  logout: () => void;
  login: (userdata:{email:string, password:string}) => Promise<void>;
  user: IUser| null
  setErrorMessage:(message:string) => void;
  orders:IOrder[];
  errorMessage:string
}



const AuthContext = createContext<AuthContextType | undefined>(undefined);



export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user,setUser] = useState<IUser|null>(null);
  const [errorMessage, setErrorMessage] = useState('')
  const [orders, setOrders] = useState<IOrder[]>([]);
  const router = useRouter();


   useEffect(() => {
   const storedUser = localStorage.getItem("user");
   const storedToken = localStorage.getItem("userToken");
   if(storedUser){
    setUser(JSON.parse(storedUser));
   }
  
   if(storedToken){
    setToken(storedToken);
   }
   },[]);


  const logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "LogOut!"
    }).then((result) => {
      if (result.isConfirmed) {
        setToken(null); 
        localStorage.removeItem('userToken'); 
        localStorage.removeItem('user'); 
        router.push('/login');
      }
    });

  };

  
  const login = async (userData:{email:string, password:string}) => {
     if(!userData.email || !userData.password){
      throw new Error('Email and password are required');
     }
    
   try {
     const response:AxiosResponse<{user:IUser, token:string}> = await axios.post( 'http://localhost:3001/users/login',
      userData
     )
    
     const {user,token} = response.data; 

     if(token){
      setToken(token);
      setUser(user);
      localStorage.setItem("userToken",token);
      localStorage.setItem("user",JSON.stringify(user));
     
      Swal.fire({
       position: "center",
       icon: "success",
       title: "Login Sucefully",
       showConfirmButton: false,
       timer: 1500
     });
     }else{
      throw new Error('Username or password incorrect');
    
    }
    

   } catch (error) {
    console.error('Login error:', error);
    throw new Error('Username or password incorrect');
   }
  };

  
 useEffect(() => {
  if(token){
    const getOrders = async () => {
      const response = await axios.get("http://localhost:3001/users/orders",{
        headers:{Authorization:`${token}`}
      })
        
      setOrders(response.data)
    };
   
  getOrders();
  }
 
 },[token]);

  return (
    <AuthContext.Provider value={{ token, setToken , logout, login,user,setErrorMessage,orders,errorMessage}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
