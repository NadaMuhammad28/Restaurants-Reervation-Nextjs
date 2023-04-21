import { PRICE } from "@prisma/client";
export interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price: PRICE;
  slug: string;
  cuisine: { name: string };
  location: { name: string };
}

export interface RestaurantsProps {
  restaurants: Restaurant[];
}
export interface PriceProps {
  price: string;
}

export interface SingleRestaurant {
  id: number;
  name: string;
  main_image: string;
  images: string[];
  price: PRICE;
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  cuisine: { name: string };
  location: { name: string };
}
