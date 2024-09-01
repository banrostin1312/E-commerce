
"use client";
//types
import { IProduct } from "@/types/IProduct";
//vendors
import Link from "next/link";

import { Card } from "flowbite-react";
import Image from "next/image";

 const Product =({id,name,price,description,image,stock}:IProduct) => {
  return (
    <Card
      className="max-w-sm mb-4 mx-2 bg-neutral-300"
      renderImage={() => <Link href={`/detalleproducto/${id}`}><Image width={300} height={300} src={image} alt={name} /></Link>}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <Link href={`/detalleproducto/${id}`}>{name}</Link>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
      
    </Card>
  );
}

export default Product;