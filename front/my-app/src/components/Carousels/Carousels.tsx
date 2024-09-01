
"use client";
import { Carousel } from "flowbite-react";
//styles
import styles from './Carousel.module.css'
//Components
import Image from "next/image";

export function Carousels() {
  return (
    <div className={`border border-gray-300 rounded-md`} >
      <div className="h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-[500px]" >
      <Carousel slideInterval={5000} 
      rightControl={<img src="/assets/carousel/rightarrow.svg" className={styles.arrowSize}></img>}
      leftControl={<img src="/assets/carousel/leftarrow.svg" className={styles.arrowSize}></img>}
      >
        <div className="relative flex justify-center items-center " >
             <Image src="/assets/carousel/iphone15pro.png" alt="iPhone 15 Pro" width={500} height={500} className={"object-contain"}></Image>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold  text-gray-900">iPhone 15 Pro</h2>
              <p>The latest in smartphone technology.</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image src="/assets/carousel/macbookair.png" alt="MacBook Air" width={500} height={500} className={"object-contain"}></Image>
            <div className="absolute bottom-7 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold  text-gray-900">MacBook Air</h2>
              <p>Lightweight and powerful.</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image src="/assets/carousel/ipadpro.png" alt="iPad Pro" width={400} height={400} className={"object-contain"}></Image>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold  text-gray-900">iPad Pro</h2>
              <p>Unleash your creativity.</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image src="/assets/carousel/applewatchs9.png" alt="Apple Watch Series 9" width={400} height={400} className={"object-contain"}></Image>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold  text-gray-900">Apple Watch Series 9</h2>
              <p>Stay connected and healthy.</p>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <Image src="/assets/carousel/airpods.png" alt="AirPods" width={400} height={400} className={"object-contain"}></Image>
            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
              <h2 className="text-xl font-bold  text-gray-900">AirPods</h2>
              <p>Immersive sound experience.</p>
            </div>
          </div>
      </Carousel>
    </div>
    </div>
    
  );
}
