const generateTitle = (slug: string): string => {
  const arr = slug.split("-");
  arr[arr.length - 1] = `(${arr[arr.length - 1]})`;
  return arr.join(" ");
};
export default function Header(props: { title: string }) {
  return (
    <header className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h2 className="text-7xl text-white captitalize text-shadow text-center">
          {generateTitle(props.title)}
        </h2>
      </div>
    </header>
  );
}
