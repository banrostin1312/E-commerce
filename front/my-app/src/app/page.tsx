"use client"

//components
import { Carousels } from "@/components/Carousels/Carousels";
import dynamic from "next/dynamic";
//vendors
import { useState } from "react";
const ProductsRender = dynamic(() => import ("@/components/products/ProductsRender"));


export default function Home() {

  return (
   <div>
   <Carousels/>
    <hr />
     <ProductsRender/>
   </div>
  )
}
