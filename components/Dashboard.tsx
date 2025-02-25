"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useRouter } from 'next/navigation';  

const Dashboard = () => {
    const [hovered, setHovered] = useState(false);
    const router = useRouter();  

    const handleRedirect = () => {
        router.push('/login');  
    };

    return (
        <div className="space-y-6">
            {/* Sección de la imagen con texto y botón */}
            <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg group">
                <Image
                    src="/padel11.jpeg"
                    alt="Torneo de Pádel"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-all duration-300 group-hover:bg-opacity-50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-4">
                    <h2 className="text-4xl font-bold text-center">¡Bienvenido al Torneo White Pádel!</h2>
                    <p className="text-lg text-center">Participa en el mejor torneo de pádel de la ciudad.</p>
                    <Button
                        onClick={handleRedirect}
                        className="bg-white text-black hover:bg-gray-100"
                    >
                        Inscríbete Ahora
                    </Button>
                </div>
            </div>

            {/* Otras tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Jugadores Registrados</CardTitle>
                        <CardDescription>Total de participantes</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-blue-600">128</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Partidos Jugados</CardTitle>
                        <CardDescription>Total de partidos completados</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-green-600">64</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Próximos Partidos</CardTitle>
                        <CardDescription>Partidos programados</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-4xl font-bold text-purple-600">16</p>
                    </CardContent>
                </Card>
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
                            onClick={handleRedirect}
                            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                        >
                            Inscríbete Ahora
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;