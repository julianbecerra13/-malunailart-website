"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Palette, Heart, Star, Gem, Flower2, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: Sparkles,
    title: "Manicure",
    description:
      "Klassieke manicure met nagelverzorging, vijlen en lakken naar keuze.",
  },
  {
    icon: Palette,
    title: "Gellak",
    description:
      "Langdurige gellak behandeling met prachtige kleuren die weken meegaan.",
  },
  {
    icon: Gem,
    title: "Acryl Nagels",
    description:
      "Versterk uw nagels met hoogwaardige acryl voor een perfecte look.",
  },
  {
    icon: Heart,
    title: "Nail Art",
    description:
      "Unieke en creatieve nagelontwerpen, van subtiel tot uitgesproken.",
  },
  {
    icon: Flower2,
    title: "Pedicure",
    description:
      "Volledige voetverzorging inclusief peeling, massage en lakken.",
  },
  {
    icon: Star,
    title: "Deluxe Behandeling",
    description:
      "Complete verwensessie met manicure, pedicure en speciale verzorging.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Posiciones fijas para los logos decorativos
const logoPositions = [
  { left: 5, top: 10 }, { left: 90, top: 15 }, { left: 15, top: 85 },
  { left: 80, top: 80 }, { left: 50, top: 5 }, { left: 95, top: 50 },
  { left: 3, top: 50 }, { left: 70, top: 90 }, { left: 30, top: 92 },
];

export default function Services() {
  return (
    <section id="diensten" className="py-20 relative overflow-hidden bg-gradient-to-br from-rose-light/40 via-white to-gold-light/30">
      {/* Logos decorativos de fondo */}
      {logoPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.07] pointer-events-none"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: i * 0.5 }}
        >
          <Image
            src="/images/logo.jpeg"
            alt=""
            width={80}
            height={80}
            className="rounded-full"
          />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Malu Nail Art"
              width={90}
              height={90}
              className="rounded-full shadow-xl mx-auto"
            />
          </motion.div>
          <span className="text-primary font-medium">Wat wij bieden</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Onze Diensten
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ontdek ons uitgebreide aanbod van nagelbehandelingen, uitgevoerd met
            de beste producten en technieken.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-rose-light/20 group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA para reservar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-gold-light/30 to-primary/10 rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Bekijk Prijzen & Maak een Afspraak
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Bekijk onze volledige prijslijst en boek direct uw behandeling via ons online reserveringssysteem.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-rose-dark text-white px-8 py-6 text-lg gap-2"
            >
              <motion.a
                href="https://malunailart.boekingapp.nl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Reserveer Nu
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
