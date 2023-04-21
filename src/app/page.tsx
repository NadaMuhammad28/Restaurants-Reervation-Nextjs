import Resturants from "./components/home/Resturants";
import { PrismaClient } from "@prisma/client";
import { Restaurant } from "./models/interfaces";
import Hero from "./components/home/Hero";

const prisma = new PrismaClient();
const fetchData = async () => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      slug: true,
      price: true,
      cuisine: { select: { name: true } },
      location: { select: { name: true } },
    },
  });

  return restaurants;
};
export default async function Home() {
  const restaurants: Restaurant[] = await fetchData();
  return (
    <main>
      <Hero />
      <Resturants restaurants={restaurants} />
      {/* CARDS */}
    </main>
  );
}
