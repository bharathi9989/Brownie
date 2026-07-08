import React from "react";



function NavBar() {
  return (
    <>
      <nav className="relative z-20 flex justify-between items-center text-white">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Brownie</h1>
        {/* Navigation Link */}
        <ul className=" flex gap-6 text-2xl ">
          <li className="cursor-pointer hover:text-amber-600">Brownie</li>
          <li className="cursor-pointer hover:text-amber-600">BirthdayCake</li>
          <li className="cursor-pointer hover:text-amber-600">ABC</li>
        </ul>
        {/* Authendication */}
        <div className="flex gap-4 text-2xl">
          <button className="cursor-pointer">Sign up</button>
          <button className="bg-amber-600 text-white px-5 py-2 rounded-lg hover:bg-amber-700 transition">Sign In</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
