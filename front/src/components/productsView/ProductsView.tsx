

interface iProductsViewProps{
  filterProductByCategory: (categoryId:number) => void
  fetchAllProducts:() => void
}


const ProductsView:React.FC<iProductsViewProps> = ({filterProductByCategory,fetchAllProducts}) => {

 


  return (
    <div>
      
        <div className='mt-4 mb-4 flex flex-wrap items-center justify-center gap-4 font-bold'>
        <button className="hover:text-blue-500  w-full sm:w-auto" onClick={() => fetchAllProducts()}>All</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(1)}>Smarthphones</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(2)}>Laptops</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(3)}>Tablets</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(4)}>SmartWatchs</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(5)}>HeadPhones</button>
        <button className='hover:text-blue-500  w-full sm:w-auto' onClick={() => filterProductByCategory(6)}>Others</button>
        </div>
      
    </div>
  )
}

export default ProductsView
