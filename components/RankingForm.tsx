"use client";

import { Crown, Trophy, Award, Star, ChevronLeft } from "lucide-react"; // Íconos para los premios
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const RankingForm = () => {
  // Datos inventados para el ranking
  const rankingData = [
    { position: 1, name: "Juan Pérez", points: 1200 },
    { position: 2, name: "María Gómez", points: 1150 },
    { position: 3, name: "Carlos López", points: 1100 },
    { position: 4, name: "Ana Martínez", points: 1050 },
    { position: 5, name: "Luis Rodríguez", points: 1000 },
    { position: 6, name: "Sofía García", points: 950 },
    { position: 7, name: "Pedro Sánchez", points: 900 },
    { position: 8, name: "Laura Fernández", points: 850 },
    { position: 9, name: "Jorge Díaz", points: 800 },
    { position: 10, name: "Marta Ruiz", points: 750 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          {/* Botón de regreso */}
          <Link href="/">
            <Button variant="ghost" className="p-0 text-gray-600 hover:text-gray-900 mb-4">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Regresar
            </Button>
          </Link>

          {/* Título del ranking */}
          <CardTitle className="text-3xl font-bold text-center text-blue-500">
            Ranking del Torneo
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Lista de jugadores */}
          <div className="space-y-4">
            {rankingData.map((player) => (
              <div
                key={player.position}
                className={`flex items-center justify-between p-4 rounded-lg ${
                  player.position === 1
                    ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-white"
                    : player.position === 2
                    ? "bg-gradient-to-r from-gray-400 to-gray-500 text-white"
                    : player.position === 3
                    ? "bg-gradient-to-r from-orange-700 to-orange-800 text-white"
                    : "bg-white"
                } shadow-md hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Posición y nombre */}
                <div className="flex items-center space-x-4">
                  <span className="text-xl font-bold">{player.position}.</span>
                  <span className="text-lg">{player.name}</span>
                </div>

                {/* Puntos e ícono */}
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">{player.points} pts</span>
                  {player.position === 1 && <Crown className="h-6 w-6 text-yellow-200" />}
                  {player.position === 2 && <Trophy className="h-6 w-6 text-gray-200" />}
                  {player.position === 3 && <Award className="h-6 w-6 text-orange-200" />}
                  {player.position > 3 && <Star className="h-6 w-6 text-gray-400" />}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingForm;