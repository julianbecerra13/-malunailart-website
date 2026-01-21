"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Emma de Vries",
    rating: 5,
    text: "Absoluut fantastisch! Mijn nagels zien er prachtig uit en de sfeer in de salon is zo ontspannen. Ik kom zeker terug!",
  },
  {
    name: "Sophie Jansen",
    rating: 5,
    text: "De beste nagelsalon die ik ooit heb bezocht. Zeer professioneel en het resultaat is gewoon perfect.",
  },
  {
    name: "Lisa van den Berg",
    rating: 5,
    text: "Ik ben zo blij met mijn nieuwe gellak! De kleuren zijn prachtig en het houdt weken lang mooi.",
  },
  {
    name: "Anna Bakker",
    rating: 5,
    text: "Geweldige ervaring! Ze neemt echt de tijd voor je en luistert naar wat je wilt. Aanrader!",
  },
  {
    name: "Julia Visser",
    rating: 4,
    text: "Hele fijne behandeling gehad. Mijn nagels zijn nog nooit zo mooi geweest. Top service!",
  },
  {
    name: "Maria Smit",
    rating: 5,
    text: "Wat een talent! De nail art die ze maakt is echt kunst. Iedereen vraagt waar ik mijn nagels laat doen.",
  },
  {
    name: "Laura de Jong",
    rating: 5,
    text: "Super tevreden met het resultaat. Professioneel, vriendelijk en de salon is heel schoon en gezellig.",
  },
  {
    name: "Eva Mulder",
    rating: 5,
    text: "Eindelijk een nagelsalon waar ze echt weten wat ze doen! Mijn acryl nagels zijn perfect.",
  },
  {
    name: "Nina Peters",
    rating: 4,
    text: "Fijne sfeer en mooi resultaat. De online reservering is ook heel makkelijk. Kom hier graag terug!",
  },
  {
    name: "Sanne Willems",
    rating: 5,
    text: "Al jaren mijn vaste adres voor mijn nagels. Altijd tevreden en de prijzen zijn ook heel redelijk.",
  },
  {
    name: "Fleur Hendriks",
    rating: 5,
    text: "Mijn vriendin had me deze salon aangeraden en ik snap waarom! Prachtig werk en super lieve dame.",
  },
  {
    name: "Isa van Dijk",
    rating: 5,
    text: "De French manicure die ik hier kreeg is de mooiste die ik ooit heb gehad. Echt een vakvrouw!",
  },
  {
    name: "Lotte Bos",
    rating: 4,
    text: "Heel blij met mijn nagels! Ze denkt ook mee over wat het beste bij je past. Aanrader voor iedereen.",
  },
  {
    name: "Femke van Leeuwen",
    rating: 5,
    text: "Topkwaliteit en super vriendelijke service. Mijn nagels blijven wekenlang perfect zitten!",
  },
  {
    name: "Rosa Dekker",
    rating: 5,
    text: "Wat een fijne salon! Rustige muziek, heerlijke sfeer en natuurlijk prachtige nagels. 5 sterren!",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentReviews = () => {
    const start = currentIndex * reviewsPerPage;
    return reviews.slice(start, start + reviewsPerPage);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-gold fill-gold" : "text-gray-300"
        }`}
      />
    ));
  };

  // Posiciones para logos decorativos
  const logoPositions = [
    { left: 3, top: 8 }, { left: 94, top: 12 }, { left: 6, top: 88 },
    { left: 91, top: 85 }, { left: 50, top: 2 }, { left: 96, top: 50 },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-rose-light/30 via-white to-gold-light/20">
      {/* Logos decorativos */}
      {logoPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.05] pointer-events-none"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, delay: i * 0.8 }}
        >
          <Image src="/images/logo.jpeg" alt="" width={60} height={60} className="rounded-full" />
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
          <span className="text-primary font-medium">Wat klanten zeggen</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Recensies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom onze klanten zo tevreden zijn met onze nagelbehandelingen.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {getCurrentReviews().map((review, index) => (
                <Card
                  key={`${currentIndex}-${index}`}
                  className="border-none shadow-lg bg-gradient-to-br from-white to-rose-light/20 h-full"
                >
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground mb-6 italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-rose-dark flex items-center justify-center text-white font-semibold">
                          {review.name.charAt(0)}
                        </div>
                        <span className="font-medium text-foreground">
                          {review.name}
                        </span>
                      </div>
                      <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                }`}
                aria-label={`Ga naar pagina ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
