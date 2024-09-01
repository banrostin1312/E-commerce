'use client'

//components
import ProductsView from "@/components/productsView/ProductsView"
import Product from "@/components/product/product"
import SkeletonProduct from "@/components/skeletonProducts/SkeletonProducts"
//vendors
import axios from "axios"
import { useEffect, useState } from "react"
//types
import { IProduct } from "@/types/IProduct"


const Producst:React.FC= () => {
   const [filterdProducts,setfilterdProducts] = useState<IProduct[]>([])
   const [products,setProducts] = useState<IProduct[]>([])
   const[loading,setLoading] = useState(true);

   // conseguir todos los productos desde un principio
   const fetchAllProducts = async () => {
  try {
    
    const response =  await axios.get('http://localhost:3001/products')
    const data = response.data;

    setProducts(data);
    setfilterdProducts(data);
    setLoading(false);
    
  } catch (error) {
    console.error("Error fetching products:", error)
  }

   
   }
    useEffect(() => {
    fetchAllProducts()
    },[])
  
      //filtrar productos por categoria
    const filterProductByCategory = (categoryId:number) => {
    if(categoryId === null){
      setfilterdProducts(products);
    }
    const filtered = products.filter((product) => product.categoryId === categoryId)
    setfilterdProducts(filtered);
    }
    
 //skeleton de los productos antes de conseguir los datos.
    if(loading){
      return (
        <div className="flex gap-4 flex-row flex-wrap justify-center">
          {Array.from({ length: 6}).map((_, index) => (
            <SkeletonProduct key={index} />
          ))}
        </div>
      )
     }

  return (
    
    <div>
      <ProductsView filterProductByCategory={filterProductByCategory}
      fetchAllProducts={fetchAllProducts}
      />
    <div className="flex gap-4 flex-row flex-wrap justify-center">
    {filterdProducts.map((product) => 
      <Product
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.image}
      stock={product.stock}
      />
      )}
    </div>
    </div>
  )
}

export default Producst
