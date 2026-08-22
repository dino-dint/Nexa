import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  ShoppingBasket,
  ListSortAscending,
  UserRound,
} from "lucide-react";
import nexaLogo from "../../assets/nexa-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-slate-100 px-6 py-3 shadow-lg relative z-40">
        <div className="flex justify-between items-center">
          {/* 1. LEFT: Logo */}
          <div className="shop-logo text-xl font-bold text-zinc-800">
            <img
              src={nexaLogo}
              alt="Nexa-logo"
              className="w-10 h-10 object-contain rounded-xl"
            />
          </div>

          {/* 2. CENTER: Desktop Links (flex-1 keeps links centered) */}
          <div className="hidden md:flex flex-1 justify-center space-x-12 items-center">
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
            <a href="#" className="hover:text-blue-500">
              Products
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </div>

          {/* 3. RIGHT: Cart + Mobile Menu Button Grouped Together */}
          <div className="flex items-center space-x-2">
            <button className="hidden md:p-2 text-gray-700 hover:text-blue-600 rounded-full hover:bg-gray-200 ">
              <ShoppingCart size={22} />
            </button>

            <button
              type="button"
              className="block md:hidden p-2 text-gray-700 hover:text-black focus:outline-none relative z-50"
              onClick={() => setIsOpen(true)}
            >
               <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          // this is for mobile
          className={`fixed top-0 right-0 h-full w-64 bg-slate-100 shadow-2xl p-6 transition-transform duration-300 ease-in-out md:hidden z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-700 hover:text-black"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="py-2 flex gap-4 text-gray-700 hover:text-zinc-900 rounded px-2"
            >
              <Home size={22} className="home-logo" /> Home
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-gray-700 hover:text-zinc-900 rounded px-2"
            >
              <ShoppingBasket size={22} className="shopping-logo" /> Products
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-gray-700 hover:text-zinc-900 rounded px-2"
            >
              <ListSortAscending size={22} className="category" /> Categories
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-gray-700 hover:text-zinc-900 rounded px-2"
            >
              <UserRound size={22} className="profile" /> Profile
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
