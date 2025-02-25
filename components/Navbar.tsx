"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useAuth } from "@/app/AuthContext";
import { useRouter } from "next/navigation"; // Para redirigir al usuario
import { User, LogOut } from "lucide-react"; // Importa los íconos de lucide-react
import Image from "next/image"; // Importa el componente Image de Next.js

const Navbar = () => {
  const [hovered, setHovered] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // Obtén el estado de autenticación y la función de logout
  const router = useRouter(); // Para redirigir al usuario

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout(); // Cierra la sesión
    router.push("/login"); // Redirige al usuario a la página de login
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo centrado con enlace al dashboard */}
      <div className="flex-1 flex justify-center ml-32">
        <Link href="/"> {/* Envuelve el logo en un Link */}
          <div className="relative w-32 h-24 cursor-pointer"> {/* Ajusta el tamaño del contenedor del logo */}
            <Image
              src="/logonegro.png"
              alt="Torneo de Pádel"
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              style={{ objectFit: "cover" }} // Asegura que la imagen no se corte
            />
          </div>
        </Link>
      </div>

      {/* Botón dinámico según el estado de autenticación */}
      {isAuthenticated ? (
        // Si el usuario está autenticado, muestra el ícono de perfil y el botón de cerrar sesión
        <div className="flex items-center gap-4">
          {/* Botón de salir (sin fondo) */}
          <Button
            variant="ghost" // Usa variant="ghost" para eliminar el fondo
            onClick={handleLogout}
            className="text-red-500 hover:bg-red-50 p-2" // Estilos personalizados
          >
            <LogOut className="h-10 w-10" /> {/* Ícono de cerrar sesión */}
          </Button>

          {/* Botón de perfil (sin cuadrado que lo rodee) */}
          <Link href="/profile">
            <Button
              variant="ghost" // Usa variant="ghost" para eliminar el fondo
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="text-red-500 hover:bg-red-50 p-2 mr-10" // Estilos personalizados
            >
              <User className="h-10 w-10" /> {/* Ícono de usuario */}
            </Button>
          </Link>
        </div>
      ) : (
        // Si el usuario no está autenticado, muestra el botón "Ingresar"
        <Link href="/login">
          <Button
            variant="outline"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`transition-all duration-300 ease-in-out 
              ${hovered ? 'bg-gradient-to-r from-gray-500 to-red-500 text-white shadow-lg scale-105' : 'bg-white text-red-500 border-2 border-red-500 hover:border-red-700'}
              py-2 px-6 mr-10 rounded-full font-semibold hover:bg-red-500 hover:text-white`}
          >
            Ingresar
          </Button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;