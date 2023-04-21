import Header from "./components/Header";

export default function RestaurantLayout({
  children,
  params,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header title={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
}
