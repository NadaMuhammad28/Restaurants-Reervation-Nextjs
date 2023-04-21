import "./cardskeleton.css";
export default function CardSkeleton() {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer ">
      <img className="w-full h-36 skeleton skeleton-card-img" />
      <div className="p-2 ">
        <h3 className="font-bold text-2xl mb-2 skeleton skeleton-card-title"></h3>
        <div className="flex items-start">
          <div className="flex mb-2 skeleton skeleton-card-stars"></div>
          <p className="ml-2 skeleton skeleton-card-reviews"></p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className=" mr-3 skeleton skeleton-card-p"></p>
          <p className="mr-3 skeleton skeleton-card-p"></p>
          <p className="skeleton skeleton-card-p"></p>
        </div>
        <p className="text-sm mt-1 font-bold skeleton skeleton-card-booking"></p>
      </div>
    </div>
  );
}
