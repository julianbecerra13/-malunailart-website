"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock, Mail, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = {
  phone: "06 54149732",
  email: "Malunailart@gmail.com",
  address: "Zandzuigerstraat 114, 1333 HD Almere",
  hours: [
    { day: "Maandag - Vrijdag", time: "10:00 - 18:00" },
    { day: "Zaterdag", time: "10:00 - 16:00" },
    { day: "Zondag", time: "Gesloten" },
  ],
};

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-rose-light/30 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Neem Contact Op</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Contact
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen of wilt u een afspraak maken? Neem gerust contact met
            ons op!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-rose-light/20">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    Telefoon
                  </h3>
                  <a
                    href="tel:+31654149732"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-rose-light/20">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    E-mail
                  </h3>
                  <a
                    href="mailto:Malunailart@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-rose-light/20">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    Adres
                  </h3>
                  <a
                    href="https://maps.google.com/?q=Zandzuigerstraat+114+1333+HD+Almere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-gradient-to-br from-white to-rose-light/20">
              <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Openingstijden
                  </h3>
                  <div className="space-y-1">
                    {contactInfo.hours.map((item, index) => (
                      <div
                        key={index}
                        className="text-muted-foreground text-sm"
                      >
                        <span>{item.day}:</span>{" "}
                        <span className="font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Reserveren */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-rose-dark text-white px-10 py-6 text-lg gap-2"
            >
              <motion.a
                href="https://malunailart.boekingapp.nl"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="w-5 h-5" />
                Direct Reserveren
              </motion.a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
