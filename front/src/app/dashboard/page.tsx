"use client"

//icons
import { FaHistory, FaBoxOpen, FaUsers } from 'react-icons/fa';
//utils
import Order from '@/components/order/Order';
//context
import { useAuth } from '@/contexts/AuthContext';
import HistoryProducts from '@/components/historyProducts/HistoryProducts';
//Vendors
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Dashboard: React.FC = () => {
const {user,orders} = useAuth();
const router = useRouter();




return (
    
    <div className='container mx-auto p-4'>
      <div className='flex flex-wrap gap-4 justify-center'>

      <div className='rounded-lg bg-white shadow-md p-4 w-80'>
          <div className='flex items-center text-red-600 mb-2'>
            <FaUsers className='mr-2' />
            {user ?<h1 className='text-xl font-semibold'>Welcome: {user.name}</h1>:null}
          </div>
          <div className='text-gray-600'>
          {user ? (
              <div>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Address: {user.address}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ) : (
            <p>No user data available.</p>
          )}
          </div>
        </div>

        <div className='rounded-lg bg-white shadow-md p-4 w-80'>
          <div className='flex items-center text-red-600 mb-2'>
            <FaHistory className='mr-2' />
            <h1 className='text-xl font-semibold'>Buy History</h1>
          </div>
          {orders.length > 0 ? orders.map((order) => 
        order.products.map((product)=>
        <HistoryProducts
        key={product.id}
        id={product.id}
        price={product.price}
        name={product.name}
        description={product.description}
        stock={product.stock}
        image={product.image}
        />
        )  
        ):(<p>No Order History available for know</p>)}
        </div>
         
        <div className='rounded-lg bg-white shadow-md p-4 w-80'>
          <div className='flex items-center text-red-600 mb-2'>
            <FaBoxOpen className='mr-2' />
            <h1 className='text-xl font-semibold'>Orders</h1>
          </div>
          <div className='text-gray-600'>
            <div>
             {orders.length > 0 ? 
            (orders.map((order)=>
              <Order
            key={order.id}
            id={order.id}
            status={order.status}
            date={order.date}
            products={order.products}
            />
            )):(<p>No orders Avilable</p>)
            }

            

               
        
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
