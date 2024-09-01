import { orders } from "@/utils/orders";
//types
import { IOrder } from "@/types/IOrders";

const Order: React.FC<IOrder> = ({id,status,date,products}) => {
    const getStatusStyle = (status: string) => {
      switch (status) {
        case 'pending':
          return 'text-yellow-500';
        case 'approved':
          return 'text-green-500';
        case 'rejected':
          return 'text-red-500';
        default:
          return '';
      }
    };
  
    return (
      <div className='container mx-auto p-4'>
        <div className='grid gap-4'>
           
            <div key={id} className='rounded-lg bg-white shadow-md p-4'>
              <div className='flex justify-between items-center'>
                <div>
                  <h2 className='text-xl font-semibold'>Orden #{id}</h2>
                  <p className='font-semibold'>
                    Estado: <span className={getStatusStyle(status)}>{status}</span>
                  </p>
                  <p className='text-gray-600'>Fecha:{date}</p>
                  
                </div>
              </div>
            </div>
          
        </div>
      </div>
    );
  };

export default Order
