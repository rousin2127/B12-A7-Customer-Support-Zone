import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">

      <nav className=" py-4 flex justify-between items-center w-[1140px] mx-auto">
        <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
        <div className="md:flex hidden items-center gap-6">
          <a href="#" className="text-gray-600">
            Home
          </a>
          <a href="#" className="text-gray-600">
            FAQ
          </a>
          <a href="#" className="text-gray-600">
            Changelog
          </a>

          <a href="#" className="text-gray-600">
            Blog
          </a>
          <a href="#" className="text-gray-600">
            Download
          </a>
          <a href="#" className="text-gray-600">
            Contact
          </a>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:cursor-pointer">
            + New Ticket
          </button>
        </div>
        <div className="block md:hidden">
          <MdOutlineMenu />
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
