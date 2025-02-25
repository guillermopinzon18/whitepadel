"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const TournamentForm = () => {
    const [player1, setPlayer1] = useState({ firstName: "", lastName: "", email: "" });
    const [player2, setPlayer2] = useState({ firstName: "", lastName: "", email: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de inscripción, como enviar los datos al backend
        console.log("Jugador 1:", player1);
        console.log("Jugador 2:", player2);
        alert("Inscripción enviada correctamente");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <Card className="w-full max-w-2xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-red-500">
                        Próximo Torneo de Pádel
                    </CardTitle>
                    <CardDescription className="text-center text-gray-600">
                        ¡No te pierdas el evento más esperado del año!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Detalles del torneo */}
                    <div className="space-y-4 mb-8">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-800">Detalles del Torneo</h3>
                            <ul className="mt-2 space-y-2 text-gray-600">
                                <li><strong>Fecha:</strong> 15 de Noviembre de 2023</li>
                                <li><strong>Lugar:</strong> Club de Pádel White, Ciudad Ejemplo</li>
                                <li><strong>Premio:</strong> $5,000 en efectivo y trofeos</li>
                                <li><strong>Categoría:</strong> Mixto (Hombres y Mujeres)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Formulario de inscripción */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h3 className="text-2xl font-bold text-center text-gray-800">Inscripción de Dupla</h3>

                        {/* Jugador 1 */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-700">Jugador 1</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    placeholder="Nombre"
                                    value={player1.firstName}
                                    onChange={(e) => setPlayer1({ ...player1, firstName: e.target.value })}
                                    required
                                />
                                <Input
                                    type="text"
                                    placeholder="Apellido"
                                    value={player1.lastName}
                                    onChange={(e) => setPlayer1({ ...player1, lastName: e.target.value })}
                                    required
                                />
                            </div>
                            <Input
                                type="email"
                                placeholder="Correo electrónico"
                                value={player1.email}
                                onChange={(e) => setPlayer1({ ...player1, email: e.target.value })}
                                required
                            />
                        </div>

                        {/* Jugador 2 */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-gray-700">Jugador 2</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input
                                    type="text"
                                    placeholder="Nombre"
                                    value={player2.firstName}
                                    onChange={(e) => setPlayer2({ ...player2, firstName: e.target.value })}
                                    required
                                />
                                <Input
                                    type="text"
                                    placeholder="Apellido"
                                    value={player2.lastName}
                                    onChange={(e) => setPlayer2({ ...player2, lastName: e.target.value })}
                                    required
                                />
                            </div>
                            <Input
                                type="email"
                                placeholder="Correo electrónico"
                                value={player2.email}
                                onChange={(e) => setPlayer2({ ...player2, email: e.target.value })}
                                required
                            />
                        </div>

                        {/* Botón de inscripción */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="bg-red-500 text-white hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                            >
                                Inscribir Dupla
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default TournamentForm;