import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, MessageCircle, ShoppingBag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cameras } from "@/data/cameras";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const camera = cameras.find((c) => c.id === Number(id));

  useEffect(() => {
    if (!camera) {
      navigate("/catalog");
    }
  }, [camera, navigate]);

  if (!camera) return null;

  const waLink = `https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20sewa%20kamera%20${encodeURIComponent(camera.name)}%20tanggal%20[tanggal]`;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-8 text-pastel-blue hover:text-pastel-pink">
          <Link to="/catalog">
            <ArrowLeft className="mr-2" size={20} /> Kembali ke Katalog
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden soft-shadow border-8 border-white aspect-[4/5]">
              <img
                src={camera.image}
                alt={camera.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <Badge className="absolute top-8 left-8 bg-pastel-pink text-white border-none px-4 py-2 text-lg rounded-full soft-shadow">
              {camera.tag}
            </Badge>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{camera.name}</h1>
            <p className="text-3xl font-bold text-pastel-pink mb-8">
              Rp {camera.price.toLocaleString("id-ID")}<span className="text-lg font-normal text-muted-foreground">/hari</span>
            </p>

            <div className="glass-card p-8 rounded-[2.5rem] mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Info size={20} className="text-pastel-blue" /> Deskripsi
              </h3>
              <p className="text-foreground opacity-70 leading-relaxed text-lg">
                {camera.description}
              </p>
            </div>

            <div className="mb-10 px-4">
              <h3 className="text-lg font-bold mb-6 uppercase tracking-widest text-foreground opacity-40">Spesifikasi Utama</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {camera.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 text-foreground opacity-80 font-medium">
                    <div className="w-8 h-8 gradient-pastel rounded-lg flex items-center justify-center text-white shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Button asChild size="lg" className="flex-1 btn-cta py-8 text-lg">
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2" size={24} /> Book via WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="flex-1 btn-outline-pink py-8 text-lg">
                <Link to={`/booking?cam=${camera.id}`}>
                  <ShoppingBag className="mr-2" size={24} /> Form Booking
                </Link>
              </Button>
            </div>

            <div className="mt-8 p-4 border border-dashed border-pastel-blue/30 rounded-2xl bg-pastel-blue/5">
              <p className="text-sm text-center text-muted-foreground italic">
                *Sudah termasuk: Memory Card, Card Reader, Baterai, & Charger.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
