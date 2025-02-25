"use client"; 

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BlurButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <Button variant="outline" className="relative z-10 backdrop-blur-md">
        Registrarse
      </Button>
    </motion.div>
  );
}
