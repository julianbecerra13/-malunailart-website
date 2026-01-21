"use client";

import { motion } from "framer-motion";
import { Heart, Instagram, Facebook } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-rose-dark/90 text-white py-12 relative overflow-hidden">
      {/* Logos decorativos de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            <Image src="/images/logo.jpeg" alt="" width={50} height={50} className="rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.jpeg"
                alt="Malu Nail Art"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold text-primary">
                Malu Nail Art
              </h3>
            </div>
            <p className="text-white/70">
              Professionele nagelbehandelingen met passie en precisie. Uw mooie
              nagels zijn onze prioriteit.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Snelle Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#diensten"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Diensten
                </a>
              </li>
              <li>
                <a
                  href="#galerij"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Galerij
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Volg Ons</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-white/20 my-8" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/60 space-y-2"
        >
          <p className="flex items-center justify-center gap-1">
            &copy; {currentYear} Malu Nail Art. Gemaakt met{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> in
            Nederland.
          </p>
          <p className="text-sm">
            KVK: 64984931 | BTW: NL 002515904B35
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
