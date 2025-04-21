'use client'
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("doctors");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-blue-500 text-white py-4 px-8 flex justify-between">
      <div className="text-lg font-bold">Book Your Doctor</div>
      <div className="flex gap-4">
        <Link href="/">
          <button
            onClick={() => handleTabClick("doctors")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "doctors" ? "bg-blue-700" : "hover:bg-blue-600"
            }`}
          >
            Doctors List
          </button>
        </Link>
        <Link href="/my-appointments">
          <button
            onClick={() => handleTabClick("appointments")}
            className={`py-2 px-4 rounded cursor-pointer ${
              activeTab === "appointments" ? "bg-blue-700" : "hover:bg-blue-600"
            }`}
          >
            My Appointments
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;