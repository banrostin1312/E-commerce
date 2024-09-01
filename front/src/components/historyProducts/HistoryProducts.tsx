import { orders } from "@/utils/orders";
//types
import { IProduct } from "@/types/IProduct";

const HistoryProducts: React.FC<IProduct> = ({id,name,description,image,stock,price}) => {
  
  
    return (
      <div className='container mx-auto p-4'>
        <div className='grid gap-4'>
           
            <div key={id} className='rounded-lg bg-white shadow-md p-4'>
              <div className='flex justify-between items-center'>
                <div>
                <img src={image} alt={name} className="w-16 h-auto" />
                  <p className='font-semibold'>
                    Product: <span >{name}</span>
                  </p>
                  <p className='text-gray-600'>Price: ${price}</p>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    );
  };

export default HistoryProducts
