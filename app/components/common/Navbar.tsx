'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between" role="navigation" aria-label="Main navigation">
      <div className="text-lg font-bold hidden lg:block">Book Your Doctor</div>
      <div className="flex gap-4">
        <Link href="/">
          <button
            onClick={() => handleTabClick("doctors")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "doctors" ? "bg-white/15" : "hover:bg-white/15"
            }`}
            aria-label="Go to home page"
          >
            Doctors List
          </button>
        </Link>
        <Link href="/my-appointments">
          <button
            onClick={() => handleTabClick("appointments")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "appointments" ? "bg-white/15" : "hover:bg-white/15"
            }`}
            aria-label="Go to my appointments page"
          >
            My Appointments
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;