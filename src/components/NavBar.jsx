import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <h1 className="text-2xl font-bold">Event Acer</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/booking">Booking</Link>
      </div>
    </nav>
  );
};

export default NavBar;
