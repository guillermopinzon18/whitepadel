"use client";

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';

const RegisterForm = () => {
    const [hovered, setHovered] = useState(false); // Estado para el efecto hover del botón

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-opacity-90" style={{ backgroundImage: "url('/background.jpg')", backgroundSize: 'cover' }}>
            {/* Contenedor del formulario sin marco */}
            <div className="w-full max-w-md mx-4 sm:mx-0 bg-white bg-opacity-90 rounded-lg p-8 shadow-sm">
                {/* Botón de regresar dentro del formulario */}
                <Link href="/">
                    <Button variant="ghost" className="p-0 text-gray-600 hover:text-gray-900 mb-4">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Regresar
                    </Button>
                </Link>

                {/* Imagen decorativa arriba del título */}
                <div className="flex justify-center mb-10">
                    <Image
                        src="/padel-icon.png" // Cambia esta ruta por la de tu imagen
                        alt="Ícono de pádel"
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                </div>

                {/* Título y descripción */}
                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">Registro</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Crea una cuenta para participar en el torneo.
                    </p>
                </div>

                {/* Campos del formulario */}
                <form className="space-y-4 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
                        <Input type="email" placeholder="Ingresa tu correo" className="w-full max-w-xs mx-auto" /> {/* Input más pequeño */}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                        <Input type="password" placeholder="Crea una contraseña" className="w-full max-w-xs mx-auto" /> {/* Input más pequeño */}
                    </div>

                    {/* Botón de registro con efecto hover */}
                    <div className="flex justify-center mt-10">
                        <Button
                            type="submit"
                            variant="outline"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            className={`transition-all duration-300 ease-in-out 
                                ${hovered ? 'bg-gradient-to-r from-gray-500 to-red-500 text-white shadow-lg scale-105' : 'bg-white text-red-500 border-2 border-red-500 hover:border-red-700'}
                                py-2 px-6 rounded-full font-semibold hover:bg-red-500 hover:text-white`}
                        >
                            Registrarse
                        </Button>
                    </div>
                </form>

                {/* Enlace para redirigir a /login */}
                <div className="text-center mt-6">
                    <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
                    <Link href="/login">
                        <span className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                            Inicia sesión aquí
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;