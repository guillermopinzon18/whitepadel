"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center hidden md:block">
        {/* <Image src="/file.svg" alt="Logo" className="h-10" /> */}
      </div>
      <Link href="/">
        <h1 className="text-4xl font-bold text-center ml-20 bg-gradient-to-r from-gray-500 to-red-500 bg-clip-text text-transparent animate-gradient cursor-pointer">
          White Pádel
        </h1>
      </Link>
      <Link href="/login">
        <Button
          variant="outline"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`transition-all duration-300 ease-in-out 
            ${hovered ? 'bg-gradient-to-r from-gray-500 to-red-500 text-white shadow-lg scale-105' : 'bg-white text-red-500 border-2 border-red-500 hover:border-red-700'}
            py-2 px-6 rounded-full font-semibold hover:bg-red-500 hover:text-white`}
        >
          Ingresar
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;