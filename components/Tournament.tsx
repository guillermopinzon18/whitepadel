"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const TournamentForm = () => {
  const [player1, setPlayer1] = useState({ firstName: "", lastName: "", email: "" });
  const [player2, setPlayer2] = useState({ firstName: "", lastName: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Para manejar la carga inicial

  // Obtener el correo del usuario desde localStorage
  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : {};

    if (user.email) {
      setPlayer1((prev) => ({ ...prev, email: user.email }));
      checkIfRegistered(user.email); // Verificar si el usuario ya está inscrito
    } else {
      setIsLoading(false); // Si no hay usuario, no hay necesidad de verificar
    }
  }, []);

  // Función para verificar si el usuario ya está inscrito
  interface Participant {
    player1: {
      email: string;
    };
    player2: {
      email: string;
    };
  }
  
  const checkIfRegistered = async (email: string) => {
    try {
      const response = await fetch("https://whitepadel.onrender.com/participants");
  
      if (!response.ok) {
        throw new Error(`Error al verificar inscripción: ${response.statusText}`);
      }
  
      const data: Participant[] = await response.json();
  
      // Buscar si el correo ya está registrado
      const isAlreadyRegistered = data.some(
        (participant) =>
          participant.player1.email === email || participant.player2.email === email
      );
  
      if (isAlreadyRegistered) {
        setIsRegistered(true); // Deshabilitar el formulario
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    } finally {
      setIsLoading(false); // Finalizar la carga
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://whitepadel.onrender.com/participants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          player1,
          player2,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Dupla inscrita exitosamente");
        setIsRegistered(true); // Deshabilitar el formulario
      } else {
        alert(data.message || "Error al inscribir la dupla");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al conectar con el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-gray-100 flex items-center justify-center">Cargando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <Link href="/">
            <Button variant="ghost" className="p-0 text-gray-600 hover:text-gray-900 mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
          <CardTitle className="text-3xl font-bold text-center text-blue-500">
            Próximo Torneo de Pádel
          </CardTitle>
          <CardDescription className="text-center text-gray-600">
            ¡No te pierdas el evento más esperado del año!
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Detalles del Torneo */}
          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Detalles del Torneo</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><strong>Fecha:</strong> 21 de Marzo de 2025</li>
                <li><strong>Lugar:</strong> Máster Pádel</li>
                <li><strong>Categoría:</strong> Masculino, Séptima Categoría</li>
              </ul>
            </div>
          </div>

          {isRegistered ? (
            <div className="text-center text-green-600 font-semibold">
              Ya estás inscrito en este torneo.
            </div>
          ) : (
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
                    disabled={isSubmitting}
                  />
                  <Input
                    type="text"
                    placeholder="Apellido"
                    value={player1.lastName}
                    onChange={(e) => setPlayer1({ ...player1, lastName: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={player1.email}
                  onChange={(e) => setPlayer1({ ...player1, email: e.target.value })}
                  required
                  disabled
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
                    disabled={isSubmitting}
                  />
                  <Input
                    type="text"
                    placeholder="Apellido"
                    value={player2.lastName}
                    onChange={(e) => setPlayer2({ ...player2, lastName: e.target.value })}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={player2.email}
                  onChange={(e) => setPlayer2({ ...player2, email: e.target.value })}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Botón de inscripción */}
              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-500 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Inscribiendo..." : "Inscribir Dupla"}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TournamentForm;