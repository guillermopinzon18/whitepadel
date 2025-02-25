"use client";

import React, { useState } from "react";
import { useAuth } from "@/app/AuthContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const ProfileComponent = () => {
  const { logout } = useAuth(); // Obtén el estado de autenticación y la función de logout
  const router = useRouter();

  // Simulación de datos del usuario (deberías obtenerlos desde tu backend)
//   useEffect(() => {
//     if (isAuthenticated) {
//       // Aquí harías una solicitud al backend para obtener los datos del usuario
//       const fetchUserData = async () => {
//         try {
//           const response = await fetch("https://whitepadel.onrender.com/auth/profile", {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${localStorage.getItem("token")}`, // Envía el token de autenticación
//             },
//           });

//           if (response.ok) {
//             const data = await response.json();
//             setUserData(data); // Guarda los datos del usuario en el estado
//           } else {
//             console.error("Error al obtener los datos del usuario");
//           }
//         } catch (error) {
//           console.error("Error:", error);
//         }
//       };

//       fetchUserData();
//     } else {
//       router.push("/login"); // Redirige al login si no está autenticado
//     }
//   }, [isAuthenticated, router]);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout(); // Cierra la sesión
    localStorage.removeItem("token"); // Elimina el token de localStorage
    router.push("/login"); // Redirige al login
  };

//   if (!userData) {
//     return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen los datos
//   }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Perfil de Usuario</h1>

        {/* Información del usuario */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">Email:</span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">Puntos:</span>
          </div>
        </div>

        {/* Botón de cerrar sesión */}
        <Button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white hover:bg-red-600"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default ProfileComponent;