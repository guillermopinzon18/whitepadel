"use client";

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { useState } from 'react';
import { useAuth } from '@/app/AuthContext';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const [hovered, setHovered] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Verifica que los campos no estén vacíos
        if (!email || !password) {
            setMessage('Por favor, completa todos los campos');
            return;
        }

        try {
            const response = await fetch('https://whitepadel.onrender.com/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Asegúrate de que los datos sean correctos
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Usuario registrado exitosamente');
                login(); // Actualiza el estado de autenticación
                router.push('/'); // Redirige al dashboard
            } else {
                setMessage(data.message || 'Error al registrar el usuario');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error al conectar con el servidor');
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-opacity-90 relative">
            {/* Imagen de fondo con difuminado */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/fototorneo.jpg"
                    alt="Torneo de Pádel"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Capa de difuminado */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-30"></div>
            </div>
            <div className="w-full max-w-md mx-4 sm:mx-0 bg-white rounded-lg p-8 relative z-10">
                <Link href="/">
                    <Button variant="ghost" className="p-0 text-gray-600 hover:text-gray-900 mb-4">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Regresar
                    </Button>
                </Link>
                {/* Imagen decorativa arriba del título */}
                <div className="flex justify-center mb-10">
                    <Image
                        src="/logonegro.png"
                        alt="Ícono de pádel"
                        width={100}
                        height={100}
                    />
                </div>

                <div className="text-center mt-10">
                    <h2 className="text-2xl font-bold text-gray-800">Registro</h2>
                    <p className="text-sm text-gray-600 mt-2">
                        Crea una cuenta para participar en el torneo.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Correo electrónico</label>
                        <Input
                            type="email"
                            placeholder="Ingresa tu correo"
                            className="w-full max-w-xs mx-auto"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">Contraseña</label>
                        <Input
                            type="password"
                            placeholder="Crea una contraseña"
                            className="w-full max-w-xs mx-auto"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

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

                {message && <p className="text-center mt-4 text-sm text-gray-600">{message}</p>}

                <div className="text-center mt-6">
                    <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
                    <Link href="/login">
                        <span className="text-sm text-red-500 hover:text-red-700 cursor-pointer">
                            Inicia sesión aquí
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;