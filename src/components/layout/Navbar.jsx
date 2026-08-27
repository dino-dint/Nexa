import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  ShoppingBasket,
  ListSortAscending,
  UserRound,
  ChevronDown,
} from "lucide-react";
import nexaLogo from "../../assets/nexa-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [isActive, setIsActive] = useState("Home");
  const navItems = ["Home", "Products", "Shopping", "Brands", "Contact"];
  const handleNavClick = (itemName) => {
    setIsActive(itemName);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black">
      <nav className=" text-white px-3 py-3 relative z-40">
        <div className="flex justify-between items-center bg-black h-14 px-3 rounded-3xl shadow-2xl">
          {/* 1. LEFT: Logo */}
          <div className="shop-logo text-xl font-bold text-white flex items-center gap-3">
            <button
              className="hover:text-slate-500 cursor-pointer"
              onClick={() => handleNavClick("Home")}
            >
              <span>Nexa</span>
            </button>
          </div>

          {/* 2. CENTER: Desktop Links (flex-1 keeps links centered) */}
          <div className="hidden md:flex flex-1 justify-center space-x-10 items-center ">
            {navItems.map((item) => {
              const active = isActive === item;
              if (item === "Products") {
                return (
                  <div key={item} className="relative">
                    <button
                      type="button"
                      onClick={() => {
                        handleNavClick("Products");
                        setProductsOpen(!productsOpen);
                      }}
                      className="{`relative py-1 flex items-center gap-1 transition-colors duration-300 cursor-pointer ${
                      active ? 'text-white font-medium' : 'text-gray-300 hover:text-slate-400'}`}"
                    >
                      Products
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          productsOpen ? "rotate-180" : ""
                        }`}
                      />
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                          active ? "w-full" : "w-0"
                        }`}
                      ></span>
                    </button>
                    {productsOpen && (
                      <div className="absolute top-10 left-0 w-40 bg-zinc-950 rounded-lg shadow-lg border border-zinc-800 z-50">
                        <ul className="py-2 text-sm">
                          {[
                            "Laptops",
                            "Smartphones",
                            "Headphones",
                            "Accessories",
                          ].map((subItem) => (
                            <li key={subItem}>
                              <button
                                type="button"
                                className="w-full text-left px-4 py-2 text-gray-300 hover:text-slate-400 hover:bg-zinc-900 transition-colors cursor-pointer"
                                onClick={() => {
                                  handleNavClick("Products");
                                  setProductsOpen(false);
                                }}
                              >
                                {subItem}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    handleNavClick(item);
                    setProductsOpen(false);
                  }}
                  className={`relative py-1 transition-colors duration-300 cursor-pointer ${
                    active
                      ? "text-white font-medium"
                      : "text-gray-300 hover:text-slate-400"
                  }`}
                >
                  {item}
                  {/* Animated Active Indicator */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      active ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-4">
              <button className="hidden md:block p-2 text-gray-300  hover:text-white rounded-full hover:bg-zinc-800 transition-colors cursor-pointer">
                <ShoppingCart size={22} />
              </button>
              <button type="button" className="hidden md:block p-2 text-zinc-800  rounded-full bg-cyan-300  hover:bg-cyan-200 transition-colors cursor-pointer">
                <UserRound size={22}/>
              </button>
            </div>

          {/* 3. RIGHT: Menu Button for Mobile */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="block md:hidden p-2 text-white hover:text-slate-400 focus:outline-none relative z-50"
              onClick={() => setIsOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          // this is for mobile
          className={`fixed top-0 right-0 h-full w-64 bg-black shadow-2xl p-6 transition-transform duration-300 ease-in-out md:hidden z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white hover:text-slate-400"
            >
              <X size={26} />
            </button>
          </div>

          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="py-2 flex gap-4 text-white hover:text-slate-400 rounded px-2"
            >
              <Home size={22} className="home-logo" /> Home
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-white hover:text-slate-400 rounded px-2"
            >
              <ShoppingBasket size={22} className="shopping-logo" /> Products
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-white hover:text-slate-400 rounded px-2"
            >
              <ListSortAscending size={22} className="category" /> Categories
            </a>
            <a
              href="#"
              className="flex gap-4 py-2 text-white hover:text-slate-400 rounded px-2"
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
