export default function RestaurantDescription(props: { description: string }) {
  return (
    <div className="mt-4">
      <p className="text-lg font-light">{props.description}</p>
    </div>
  );
}
