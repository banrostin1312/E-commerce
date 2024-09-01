"use client"

//Types
import { IProduct } from "@/types/IProduct"
//vendors
import { Children, createContext, ReactNode, useContext, useState, useEffect} from "react";
import axios from "axios";
//swal
import Swal from "sweetalert2";
//contexts
import { useAuth } from "./AuthContext";


interface CartContextType {
    cartItems: IProduct[]
    addToCart: (product:IProduct) => void;
    removeFromCart: (id:number) => void;
    clearCart: () => void;
    productsByUserId: IProduct[];
    setOpenCart: (open:boolean) => void;
    openCart: boolean;
}

const cartContext = createContext<CartContextType|undefined> (undefined);

export const CartProvider:React.FC<{children:ReactNode}> = ({children}) => {
const [cartItems, setCartItems] = useState<IProduct[]>([]);
const {token} = useAuth();
const [productsByUserId, setProductsByUserId] = useState<IProduct[]>([]);
const [openCart, setOpenCart] = useState(false);


useEffect(() => {
const storedCartItems = localStorage.getItem("cartItems");
if(storedCartItems){
    setCartItems(JSON.parse(storedCartItems));
}

},[]);



const addToCart = (product: IProduct) => {
    setCartItems((prevItems) => {
        const isProductInCart = prevItems.some((item) => item.id === product.id);

        if (isProductInCart) {
            Swal.fire({
                icon: "warning",
                title: "Product already in cart",
                text: "This product is already in your cart.",
            });
            return prevItems;
        }

        // Si el producto no está en el carrito, lo agregamos
        const updatedCart = [...prevItems,product];
        localStorage.setItem("cartItems",JSON.stringify(updatedCart))
        return updatedCart;
    });
};


const removeFromCart = (id:number) => {

    setCartItems((prevItems) => {
        const updatedCart = prevItems.filter((item) => item.id !== id);
        localStorage.setItem("cartItems",JSON.stringify(updatedCart));
        return updatedCart;
    })
};

const clearCart = () => {
setCartItems([]);
localStorage.removeItem("cartItems");


};




return(
<cartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart,productsByUserId,
    openCart,setOpenCart
}}>
{children}
</cartContext.Provider>

)
};

export const useCart = () => {
const context = useContext(cartContext);
if(!context){
    throw new Error('useCart must be used within a CartProvider');
}
   
return context;


};

