import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 15 pro",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 15 pro: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image:
      "/assets/carousel/iphone15pro.png",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "/assets/carousel/macbookair.png",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "/assets/carousel/ipadpro.png",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Series 9",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 9: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "/assets/carousel/applewatchs9.png",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "/assets/carousel/airpods.png",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Apple Tv 4k",
    price: 129,
    description:
      " The Apple TV 4K delivers an immersive viewing experience, bringing your favorite movies, TV shows, and streaming content to life in stunning detail. With support for 4K resolution and High Dynamic Range (HDR), it offers incredibly sharp and vibrant visuals, making every scene look more realistic than ever before.Powered by the A12 Bionic chip, the Apple TV 4K ensures smooth performance and lightning-fast navigation, allowing you to seamlessly browse through apps, games, and menus. Its intuitive interface makes it easy to discover new content and access your favorite apps, such as Apple TV+, Netflix, Hulu, and more.",
    image:
      "/assets/carousel/appletv.png",
    categoryId: 6,
    stock: 15,
  },
  {
    name: "Samsung Galaxy S22 Ultra",
    price: 1099,
    description: "Experimenta el poder y la innovación con el Samsung Galaxy S22 Ultra. Equipado con una cámara versátil de 108 MP, un rendimiento excepcional y una pantalla Dynamic AMOLED 2X, el Galaxy S22 Ultra lleva tu experiencia móvil al siguiente nivel.",
    image: "/assets/carousel/samsungalaxy22.png",
    categoryId: 1,
    stock: 10,
  },

];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
