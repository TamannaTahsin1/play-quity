import { IoMdSearch } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar fixed bg-base-100 ">
    <div className="navbar-start z-10">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        <li>
            <a>Home</a>
          </li>
          <li>
            <a>Model</a>
          </li>
          <li>
            <a>Philosophy</a>
          </li>
          <li>
            <a>Project Partner</a>
          </li>
          <li>
            <a>Join us</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Supporters</a>
          </li>
          <li className="text-center text-2xl">
            <a>
              <IoMdSearch />
            </a>
          </li>
        </ul>
      </div>
      <a className="pl-4 text-orange-600 text-3xl">play<span className="text-purple-800">quity</span></a>
    </div>
    <div className="navbar-end hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li>
            <a>Home</a>
          </li>
          <li>
            <a>Model</a>
          </li>
          <li>
            <a>Philosophy</a>
          </li>
          <li>
            <a>Project Partner</a>
          </li>
          <li>
            <a>Join us</a>
          </li>
          <li>
            <a>Team</a>
          </li>
          <li>
            <a>Supporters</a>
          </li>
          <li className="text-center text-2xl">
            <a>
              <IoMdSearch />
            </a>
          </li>
      </ul>
    </div>
  </div>
  );
};

export default Navbar;
