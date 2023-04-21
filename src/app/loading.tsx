import CardSkeleton from "@/skeletones/CardSkeleton";
import Hero from "./components/home/Hero";

export default function Loading() {
  return (
    <>
      <Hero />

      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {new Array(16).fill(null).map((card, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </>
  );
}
