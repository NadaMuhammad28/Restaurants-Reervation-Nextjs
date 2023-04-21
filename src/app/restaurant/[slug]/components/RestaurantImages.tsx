export default function RestaurantImages(props: { images: string[] }) {
  return (
    <div>
      <h5 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {props.images.length} photo{props.images.length > 1 ? "s" : ""}
      </h5>
      <div className="flex flex-wrap">
        {props.images &&
          props.images.map((img) => {
            return (
              <img key={img} className="w-56 h-44 mr-1 mb-1" src={img} alt="" />
            );
          })}
      </div>
    </div>
  );
}
