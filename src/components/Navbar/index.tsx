import { Link } from "@tanstack/react-router";
export function Navbar() {
  return (
    <nav className=" py-3 border-b-2    ">
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 ms-5">
          <Link to="/" className="flex items-center gap-3 font-semibold">
            <h3>BC HNI BUKITTINGGI 3</h3>
          </Link>
        </div>

        {/* Navbar Items */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            Product
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            About Us
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            Service
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            Support
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            Find
          </Link>
          <Link
            to="/"
            className="flex items-center space-x-2  px-5 py-2 rounded-full "
          >
            Shop
          </Link>
        </div>
      </div>
    </nav>
  );
}
