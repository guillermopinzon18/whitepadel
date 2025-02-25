"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from "@/app/AuthContext";
import { useState, useEffect } from "react";

const Dashboard = () => {
    const router = useRouter();
    const { isAuthenticated } = useAuth(); // Obtén el estado de autenticación
    // const [userData, setUserData] = useState<{ matchesPlayed: Array<{ id: string; date: string; result: string }> } | null>(null);

    // Simulación de datos del usuario (deberías obtenerlos desde tu backend)
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         // Aquí harías una solicitud al backend para obtener los datos del usuario
    //         const fetchUserData = async () => {
    //             try {
    //                 const response = await fetch("https://whitepadel.onrender.com/auth/profile", {
    //                     method: "GET",
    //                     headers: {
    //                         Authorization: `Bearer ${localStorage.getItem("token")}`, // Envía el token de autenticación
    //                     },
    //                 });

    //                 if (response.ok) {
    //                     const data = await response.json();
    //                     // setUserData(data); // Guarda los datos del usuario en el estado
    //                 } else {
    //                     console.error("Error al obtener los datos del usuario");
    //                 }
    //             } catch (error) {
    //                 console.error("Error:", error);
    //             }
    //         };

    //         fetchUserData();
    //     }
    // }, [isAuthenticated]);

    // Función para manejar la redirección
    const handleRedirect = (path: string) => {
        if (isAuthenticated) {
            router.push(path);
        } else {
            router.push("/register");
        }
    };

    return (
        <div className="space-y-6">
            {/* Tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Tarjeta: Próximo Torneo */}
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <CardHeader>
                        <CardTitle>Próximo Torneo</CardTitle>
                        <CardTitle>No te pierdas el próximo evento</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold mb-4">Fecha: 15 de Noviembre</p>
                        <Button
                            onClick={() => handleRedirect("/tournament")}
                            className="bg-white text-blue-600 hover:bg-gray-100"
                        >
                            Ver Detalles
                        </Button>
                    </CardContent>
                </Card>

                {/* Tarjeta: Ranking */}
                <Card className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                    <CardHeader>
                        <CardTitle>Ranking</CardTitle>
                        <CardTitle>Top jugadores del torneo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {/* Lista de jugadores */}
                        <div className="space-y-2">
                            <p className="text-xl font-bold">1. Juan Pérez</p>
                            <p className="text-xl font-bold">2. María Gómez</p>
                            <p className="text-xl font-bold">3. Carlos López</p>
                        </div>

                        {/* Botón para ver el ranking completo */}
                        <Button
                            onClick={() => router.push("/ranking")} // Redirige a /ranking
                            className="w-full bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                            Ver Ranking Completo
                        </Button>
                    </CardContent>
                </Card>
                {/* Tarjeta: Partidos Jugados o Logo */}
                <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                    <CardHeader>
                        <CardTitle>
                            {isAuthenticated ? "Partidos Jugados" : "Bienvenido"}
                        </CardTitle>
                        <CardTitle>
                            {isAuthenticated ? "Tus últimos partidos" : "Inicia sesión para ver tus partidos"}
                        </CardTitle>
                    </CardHeader>
                    {/* <CardContent>
                        {isAuthenticated ? (
                            userData?.matchesPlayed?.length > 0 ? (
                                <div className="space-y-2">
                                    {userData.matchesPlayed.map((match) => (
                                        <div key={match.id} className="text-lg">
                                            <p>Fecha: {match.date}</p>
                                            <p>Resultado: {match.result}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-lg">No has jugado partidos aún.</p>
                            )
                        ) : (
                            <div className="relative w-full h-32">
                                <Image
                                    src="/logonegro.png"
                                    alt="Logo White Pádel"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        )}
                    </CardContent> */}
                </Card>
            </div>

            {/* Sección de la imagen con texto y botón */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
                <Image
                    src="/padel1.jpg"
                    alt="Torneo de Pádel"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-all duration-300 group-hover:bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
                    <h2 className="text-3xl font-bold text-center">¡Bienvenido al Torneo White Pádel!</h2>
                    <p className="text-lg text-center">Participa en el mejor torneo de pádel de la ciudad.</p>
                    <Button
                        onClick={() => handleRedirect(isAuthenticated ? "/tournament" : "/login")}
                        className="bg-white text-black hover:bg-gray-100"
                    >
                        {isAuthenticated ? "Ver Torneo" : "Inscríbete Ahora"}
                    </Button>
                </div>
            </div>

            {/* Sección de imagen y texto */}
            <div className="w-full flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden group h-96 md:h-[30rem] bg-white">
                {/* Imagen - Se oculta en pantallas pequeñas */}
                <div className="relative w-full md:w-1/2 h-full hidden md:block bg-transparent">
                    <Image
                        src="/padel12.webp"
                        alt="Torneo de Pádel"
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Texto con fondo gris clarito */}
                <div className="relative w-full md:w-1/2 h-full flex items-center justify-center px-8 space-y-4 bg-white backdrop-blur-md">
                    <div className="space-y-4 text-center">
                        {/* Título con gradiente animado */}
                        <h2
                            className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-gray-500 to-red-500 bg-clip-text text-transparent animate-gradient"
                        >
                            ¡Bienvenido al Torneo White Pádel!
                        </h2>
                        {/* Párrafo con efecto hover moderno */}
                        <p className="text-lg transition-all duration-300 text-gray-800 hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-blue-400 via-gray-500 to-red-500">
                            Participa en el mejor torneo de pádel de la ciudad.
                        </p>
                        <Button
                            onClick={() => handleRedirect(isAuthenticated ? "/tournament" : "/login")}
                            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                        >
                            {isAuthenticated ? "Ver Torneo" : "Inscríbete Ahora"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;