"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Sección de patrocinadores y contacto */}
        <div className="flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
          {/* Sección de patrocinadores */}
          <div className="flex flex-col items-center space-y-8 md:flex-row md:space-x-6 md:space-y-0">
            <div className="relative w-48 h-48">
              <Image
                src="/canguroo.avif"
                alt="Patrocinador 1"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-48">
              <Image
                src="/cinex.png"
                alt="Patrocinador 2"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-32">
              <Image
                src="/auraa.png"
                alt="Patrocinador 3"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Sección de contacto */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-2">Contacto</h3>
            <p className="text-sm mb-1">Teléfono: +58 424 1209990</p>
            <p className="text-sm mb-1">Email: whitepadel.ve@gmail.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;