import { Link } from "@tanstack/react-router";
import { FloatingNav } from "../ui/floating-navbar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About ", link: "/about/aboutUs" },
  { name: "Product", link: "/about/aboutProduct" },
  { name: "Shop", link: "/shop" },
  // { name: "Login", link: "/login" },
  { name: "akun", link: "/user/account" },
];

const NavbarMobile = () => (
  <div className="relative w-full lg:hidden">
    <FloatingNav navItems={navItems} />
  </div>
);

const NavbarPc = () => (
  <nav className="py-3 border-b-2 hidden lg:flex">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 ms-5">
        <Link to="/" className="flex items-center gap-3 font-semibold">
          <h3>BC HNI BUKITTINGGI 3</h3>
        </Link>
      </div>

      {/* Navbar Items */}
      <div className="hidden lg:flex items-center space-x-6">
        {navItems.map(({ name, link }) => (
          <Link key={link} to={link} className="px-5 py-2 rounded-full">
            {name}
          </Link>
        ))}
      </div>
    </div>
  </nav>
);

export const Navbar = () => (
  <>
    <NavbarPc />
    <NavbarMobile />
  </>
);
