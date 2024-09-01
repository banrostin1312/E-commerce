//types
import { IProduct } from "@/types/IProduct";
//components
import AddProductCart from "@/components/addProductCart/AddProductCart";
//utils
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
//vendors
import axios from "axios";

interface ProductParams{
  params:Params
}




const fetchAllProduct = async ()=> {
  try {
  const response = await axios.get("http://localhost:3001/products");
  const data = response.data;
  return data;

  } catch (error) {
    throw new Error(`error fetching data:${error}`)
  }
}


const ProductExpand:React.FC<ProductParams> = async ({params}) => {
const products = await fetchAllProduct();

const productID = parseInt(params.id)


const productDetails:IProduct | undefined = products.find((product:IProduct) => product.id === productID)
  
  if(!productDetails){
    return <div>No se encontro el producto con el ID: {productID}</div>
  }  
    return (
      <div>
        <AddProductCart
        id={productDetails.id}
        name={productDetails.name}
        description={productDetails.description}
        price={productDetails.price}
        image={productDetails.image}
        stock={productDetails.stock}
        />
        <div>
          
        </div>
      </div>
    )
  }
 


export default ProductExpand;
