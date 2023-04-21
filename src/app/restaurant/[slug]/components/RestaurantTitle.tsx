export default function RestaurantTitle(props: { title: string }) {
  return (
    <div className="mt-4 border-b pb-6">
      <h3 className="font-bold text-6xl">{props.title}</h3>
    </div>
  );
}
