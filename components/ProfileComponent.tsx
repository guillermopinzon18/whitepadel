"use client";

import React from "react";
import { useAuth } from "@/app/AuthContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react"; // Asegúrate de tener lucide-react instalado

const ProfileComponent = () => {
  const { logout } = useAuth(); // Obtén el estado de autenticación y la función de logout
  const router = useRouter();

  // Recuperar la información del usuario desde localStorage
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  // Datos iniciales
  const ranking = 0; // Ranking inicial
  const matchesPlayed = 0; // Partidos jugados
  const matchesWon = 0; // Partidos ganados

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    logout(); // Cierra la sesión
    localStorage.removeItem("token"); // Elimina el token de localStorage
    localStorage.removeItem("user"); // Elimina la información del usuario de localStorage
    router.push("/login"); // Redirige al login
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        {/* Botón de regresar */}
        <div className="flex justify-start">
          <Link href="/">
            <Button variant="ghost" className="p-0 text-gray-600 hover:text-gray-900 mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              
            </Button>
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Image
            src="/logoazul.png"
            alt="Ícono de pádel"
            width={100}
            height={100}
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Perfil de Usuario</h1>

        {/* Información del usuario */}
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">Email:</span>
            <span className="text-gray-900">{user.email}</span>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">Puntos:</span>
            <span className="text-gray-900">{user.puntos}</span>
          </div>
        </div>

        {/* Sección de Ranking */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Ranking</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <span className="text-gray-700 font-medium">Posición en el ranking:</span>
            <span className="text-gray-900 ml-2">{ranking}</span>
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Estadísticas</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700 font-medium">Partidos jugados:</span>
              <span className="text-gray-900 ml-2">{matchesPlayed}</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <span className="text-gray-700 font-medium">Partidos ganados:</span>
              <span className="text-gray-900 ml-2">{matchesWon}</span>
            </div>
          </div>
        </div>

        {/* Sección de Últimos Torneos */}
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Últimos Torneos Jugados</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            {/* {lastTournaments.length > 0 ? (
              lastTournaments.map((tournament, index) => (
                <div key={index} className="text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">{tournament.name}</span>
                    <span className="text-gray-900">Posición: {tournament.position}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">Fecha: {tournament.date}</div>
                </div>
              ))
            ) : ( */}
              <span className="text-gray-700">No ha jugado ningún torneo</span>
            {/* )} */}
          </div>
        </div>

        {/* Botón de cerrar sesión */}
        <Button
          onClick={handleLogout}
          className="mt-6 w-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
};

export default ProfileComponent;