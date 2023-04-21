import Link from "next/link";
import { RestaurantsProps } from "@/app/models/interfaces";
import Price from "../Price";
export default function Resturants(props: RestaurantsProps) {
  const { restaurants } = props;
  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      {restaurants.map((el) => {
        return (
          <Link href={`/restaurant/${el.slug}`} key={el.id}>
            <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer ">
              <img src={el.main_image} alt={el.name} className="w-full h-36" />
              <div className="p-2">
                <h3 className="font-bold text-2xl mb-2">{el.name}</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">{el.cuisine.name}</p>
                  <Price price={el.price} />
                  <p>{el.location.name}</p>
                </div>
                <p className="text-sm mt-1 font-bold ">Booked 3 times today</p>
              </div>
            </div>

            {/* CARD */}
          </Link>
        );
      })}
      {/* CARD */}
    </div>
  );
}
