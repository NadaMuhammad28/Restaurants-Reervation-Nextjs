import MenuCard from "../components/MenuCard";
import ResNavbar from "../components/Navbar";
const Menu = () => {
  return (
    <section className="bg-white w-[100%] rounded p-3 shadow">
      <ResNavbar />
      <section className="bg-white mt-5">
        <div>
          <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl">Menu</h1>
          </div>
          <div className="flex flex-wrap justify-between">
            <MenuCard />
          </div>
        </div>
      </section>
      {/* MENU */}
    </section>
  );
};

export default Menu;
