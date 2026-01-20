"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Placeholder phone number - will be updated
const whatsappNumber = "31XXXXXXXXX";
const whatsappMessage = "Hallo! Ik wil graag een afspraak maken.";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" fill="currentColor" />

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  );
}
