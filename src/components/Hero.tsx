"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

// Posiciones fijas para las partículas (evita error de hidratación)
const particles = [
  { left: 10, top: 20, duration: 3.5, delay: 0.2 },
  { left: 85, top: 15, duration: 4.2, delay: 1.1 },
  { left: 25, top: 70, duration: 3.8, delay: 0.5 },
  { left: 60, top: 45, duration: 4.5, delay: 1.8 },
  { left: 40, top: 80, duration: 3.2, delay: 0.8 },
  { left: 75, top: 30, duration: 4.0, delay: 1.5 },
  { left: 15, top: 55, duration: 3.6, delay: 0.3 },
  { left: 90, top: 65, duration: 4.3, delay: 1.2 },
  { left: 50, top: 10, duration: 3.4, delay: 0.9 },
  { left: 30, top: 90, duration: 4.1, delay: 1.6 },
  { left: 70, top: 50, duration: 3.9, delay: 0.4 },
  { left: 5, top: 35, duration: 4.4, delay: 1.3 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-light via-cream to-gold-light"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {mounted && particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full text-primary font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Welkom bij onze salon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
          >
            Prachtige{" "}
            <span className="text-primary relative">
              Nagels
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>{" "}
            voor Elke Gelegenheid
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Ontdek onze professionele nagelbehandelingen. Van manicure tot nail
            art, wij zorgen ervoor dat uw nagels er altijd perfect uitzien.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-rose-dark text-white px-8 py-6 text-lg"
            >
              <motion.a
                href="https://malunailart.boekingapp.nl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Maak een Afspraak
              </motion.a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
            >
              <motion.a
                href="#diensten"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Onze Diensten
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
