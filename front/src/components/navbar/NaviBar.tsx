
"use client";
//Styles
import styles from './Navbar.module.css'
//vendors
import Link from "next/link";
import { Navbar } from "flowbite-react";
import { useRouter } from 'next/navigation';
import { VscAccount } from "react-icons/vsc";
//contexts
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
//components


export function NaviBar() {
  const {token,logout} = useAuth();
  const router = useRouter();
  const {setOpenCart, clearCart} = useCart();

  const handleLogOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
   e.preventDefault();
   logout();
   clearCart();
  }


  const handleOpenCart = () => {
  setOpenCart(true);
  };


  return (
    
      <div>
       <Navbar fluid rounded className='fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-md'>
       <Navbar.Brand as={Link} href="/">
 
       <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white text-red-600">Teacheaven</span>
       </Navbar.Brand>
       <Navbar.Toggle />
       <Navbar.Collapse>
       <Navbar.Link href="/" active className={styles.linksNavbar}>Home</Navbar.Link>
       
       {token ? <Navbar.Link href="/login" active className={styles.linksNavbar} onClick={handleLogOut}>Log Out</Navbar.Link>:null}
       {!token ? <Navbar.Link href="/register" active className={styles.linksNavbar}>Register</Navbar.Link>: null}
       {!token ? <Navbar.Link href="/login" active className={styles.linksNavbar}>Login</Navbar.Link>: null}
 
      {!token ? null:<Navbar.Link href="/products" active className={styles.linksNavbar}>Products</Navbar.Link>}
       
      
       
       
       <Navbar.Link href="/contact" className={styles.linksNavbar}>Contact</Navbar.Link>

      {token ? <Navbar.Link href="/dashboard" active className={styles.linksNavbar}><VscAccount className='w-8 h-8'/></Navbar.Link>:null}

       {!token ? null: <button><img src="/assets/carrito.png" alt="Shop Cart" className={styles.cartImage} onClick={handleOpenCart}/></button>}
       
       
       </Navbar.Collapse>
       </Navbar>
       <div className="h-16"></div>
     
 
    
   
      
    </div>
   );

};

  

