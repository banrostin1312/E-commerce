"use client"
//types
import { IProduct } from '@/types/IProduct';
//vendors
import { useState } from 'react';


const Cart= () => {
  const [cartVisible,setCartVisible] = useState(false)
  const [cartItems,setCartItems] = useState<IProduct[]>([]);
 



  return (
    <div>
         {cartVisible && (
        <div className="fixed right-0 top-0 h-full w-1/3 bg-white shadow-lg p-4 z-50">
          <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 mr-4" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty</p>
          )}
          <button
            onClick={() => setCartVisible(false)}
            className="mt-4 rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart;
