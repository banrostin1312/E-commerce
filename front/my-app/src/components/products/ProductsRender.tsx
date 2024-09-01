  "use client"
  
  //types
  import { IProduct } from '@/types/IProduct';
  //component
  import Product from '../product/product';
  import SkeletonProduct from '../skeletonProducts/SkeletonProducts';
  //styles
  import styles from './Products.module.css'
  //vendors
  import axios from 'axios';
  import { useEffect, useState } from 'react';



function ProductsRender() {
   const [products,setProducts] = useState<IProduct[]>([]);
   const[loading,setLoading] = useState(true);


   const fetchAllProducts = async () => {
 try {
  const response =  await axios.get("http://localhost:3001/products");
  const data =  response.data;

  setProducts(data);
  setLoading(false);

 } catch (error) {
    throw new Error(`error fetching data:${error}`) }
   }



   useEffect(() => {
   fetchAllProducts();
   },[])


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
    <div className={styles.productsContainer}>
      {products.map((product)=> 
      <Product
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      image={product.image}
      price={product.price}
      stock={product.stock}
      />)}
    </div>
  )
}

export default ProductsRender;
