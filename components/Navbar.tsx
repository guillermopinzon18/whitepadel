"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/app/AuthContext";
import { useRouter } from "next/navigation";
import { User, LogOut } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();

  //  Función para mantener despierto el backend
  useEffect(() => {
    const wakeUpServer = async () => {
      try {
        await fetch("https://whitepadel.onrender.com/auth/health");
        console.log("Servidor activado");
      } catch (error) {
        console.log("No se pudo activar el servidor", error);
      }
    };

    wakeUpServer(); // Se ejecuta al cargar la página

    const interval = setInterval(wakeUpServer, 5 * 60 * 1000); // Se ejecuta cada 5 minutos

    return () => clearInterval(interval); // Limpia el intervalo cuando se desmonta
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-900 to-blue-500 shadow-md">
      <div className="flex justify-center md:justify-start">
        <Link href="/">
          <div className="relative w-32 h-24 cursor-pointer">
            <Image
              src="/logoblanco.png"
              alt="Torneo de Pádel"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>
      </div>

      {isAuthenticated ? (
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="text-white hover:bg-blue-600 p-2"
          >
            <LogOut className="h-8 w-8 md:h-10 md:w-10" />
          </Button>
          <Link href="/profile">
            <Button
              variant="ghost"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="text-white hover:bg-blue-600 p-2 md:mr-10"
            >
              <User className="h-8 w-8 md:h-10 md:w-10" />
            </Button>
          </Link>
        </div>
      ) : (
        <Link href="/login">
          <Button
            variant="outline"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`transition-all duration-300 ease-in-out text-sm md:text-base
            ${
              hovered
                ? "bg-white text-blue-600 shadow-lg scale-105"
                : "bg-white text-blue-600 border-2 border-blue-600 hover:border-blue-700"
            }
            py-1 px-4 md:py-2 md:px-6 rounded-full font-semibold hover:bg-blue-100`}
          >
            Ingresar
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;