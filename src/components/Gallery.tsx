"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

const galleryImages = Array.from({ length: 41 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery/nail-${i + 1}.jpeg`,
  alt: `Nail design ${i + 1}`,
}));

// Posiciones para logos decorativos
const logoPositions = [
  { left: 2, top: 5 }, { left: 95, top: 8 }, { left: 8, top: 95 },
  { left: 92, top: 92 }, { left: 48, top: 3 }, { left: 97, top: 45 },
  { left: 1, top: 45 },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerij" className="py-20 relative overflow-hidden bg-gradient-to-br from-gold-light/20 via-cream to-rose-light/30">
      {/* Logos decorativos */}
      {logoPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute opacity-[0.06] pointer-events-none"
          style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: i * 0.7 }}
        >
          <Image src="/images/logo.jpeg" alt="" width={70} height={70} className="rounded-full" />
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
          <span className="text-primary font-medium">Ons Werk</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Galerij
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bekijk onze mooiste creaties en laat u inspireren voor uw volgende
            nagelbehandeling.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl max-h-[80vh] w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Selected nail design"
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
