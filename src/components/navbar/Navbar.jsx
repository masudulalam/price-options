import Link from "../link/Link";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav>
      <ul className="md:flex gap-6">
        {
            routes.map((route) => <Link route={route} />)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
