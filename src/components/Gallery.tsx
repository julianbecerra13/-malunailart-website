"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

// Placeholder images - will be replaced with actual images
const galleryImages = [
  { id: 1, src: "/images/nail-1.jpg", alt: "Nail design 1" },
  { id: 2, src: "/images/nail-2.jpg", alt: "Nail design 2" },
  { id: 3, src: "/images/nail-3.jpg", alt: "Nail design 3" },
  { id: 4, src: "/images/nail-4.jpg", alt: "Nail design 4" },
  { id: 5, src: "/images/nail-5.jpg", alt: "Nail design 5" },
  { id: 6, src: "/images/nail-6.jpg", alt: "Nail design 6" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galerij" className="py-20 bg-gradient-to-b from-white to-rose-light/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors z-10" />
              <div className="w-full h-full bg-gradient-to-br from-rose-light to-gold-light flex items-center justify-center">
                <span className="text-primary/50 text-sm">Foto {image.id}</span>
              </div>
              {/* Uncomment when images are added */}
              {/* <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              /> */}
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
              >
                <div className="w-full h-full bg-gradient-to-br from-rose-light to-gold-light rounded-lg flex items-center justify-center">
                  <span className="text-primary">Afbeelding wordt geladen...</span>
                </div>
                {/* Uncomment when images are added */}
                {/* <Image
                  src={selectedImage}
                  alt="Selected nail design"
                  fill
                  className="object-contain"
                /> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
