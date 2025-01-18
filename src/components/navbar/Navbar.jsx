import { useState } from "react";
import Link from "../link/Link";
import { FaBars } from 'react-icons/fa';
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav className="b-gray-300">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {
            open ? <IoClose /> 
            : <FaBars /> 
        }  
      </div>  
      <ul className={`md:flex gap-6 duration-1000 absolute md:static ${open ? 'top-10': '-top-60'} bg-white shadow border p-3 rounded-md`}>
        {
            routes.map((route) => <Link route={route} />)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
