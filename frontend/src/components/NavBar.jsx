import { TbBrandAbstract } from "react-icons/tb";

const NavBar = () => {
  return (
    <nav className="bg-black text-white py-4 flex justify-around absolute top-1 left-0 right-0 rounded-tl-xl rounded-tr-xl">
      <div className="flex items-center">
        <TbBrandAbstract size={20} />
        <h3 className="ml-1">
          Abstract | <span>Help Center</span>
        </h3>
      </div>
      <button className="bg-transparent text-white border border-white px-4 py-2 rounded">
        Submit a request
      </button>
    </nav>
  );
};

export default NavBar;
