"use client"
//contexts
import { useAuth } from '@/contexts/AuthContext';
import  { useCart } from '@/contexts/CartContext';
//swal
import Swal from 'sweetalert2';
//vendors
import axios from 'axios';



const GlobalCart = () => {
  const { cartItems, openCart, setOpenCart, clearCart, removeFromCart } = useCart();
  const {token } = useAuth();
  const handleCloseCart = () => {
    setOpenCart(false);
  };

  const handleBuy = async () => {
    if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Cart is empty",
        text: "Add some products to the cart before buying.",
      });
      return;
    }
    const productsId = cartItems.map((item) => item.id );
  
  try {
    const response = await axios.post("http://localhost:3001/orders",{products:productsId},
  {headers:{Authorization:`${token}`}}
    )
    console.log("Order placed successfully:", response.data);
  
     clearCart();
  
    Swal.fire({
      icon: "success",
      title: "Order placed successfully",
      text: "Check your dashboard to see your orders and orders!",
      timer: 2000
    });
    
    setOpenCart(false);
  
  } catch (error) {
    console.error("Error placing order:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to place order",
          text: "Please try again later.",
        });
  }
  
  
  }
const totalCartPrice = cartItems.reduce((total,item) => total + item.price,0);
  return (
    openCart && (
      <div className="fixed right-0 top-0 h-full w-1/3 bg-white opacity-100 shadow-lg z-50 overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <button className='ml-80' onClick={() => removeFromCart(item.id)}>❌</button>
              <img src={item.image} alt={item.name} />
              <p>Product: {item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Stock: {item.stock}</p>
            </div>
          ))}
          <button
            onClick={handleBuy}
            className="mt-4 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-gray-800 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Buy
          </button>
          <br />
          <button
            onClick={handleCloseCart}
            className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-gray-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Close Cart
          </button>
          <p className="font-bold mt-4 text-lg">Total: ${totalCartPrice.toFixed(2)}</p>
        </div>
      </div>
    )
  );
};

export default GlobalCart;
