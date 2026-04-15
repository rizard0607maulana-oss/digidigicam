import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, User, Phone, MapPin, Camera, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cameras } from "@/data/cameras";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const camId = searchParams.get("cam");
  const selectedCamera = cameras.find((c) => c.id === Number(camId));

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    duration: "1",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo DigiDigiCam! Saya ingin sewa kamera:
Nama Kamera: ${selectedCamera?.name || "Pilih di tempat"}
Nama Penyewa: ${formData.name}
No. WhatsApp: ${formData.phone}
Tanggal Sewa: ${formData.date}
Durasi: ${formData.duration} Hari
Alamat: ${formData.address}`;

    const waLink = `https://wa.me/6289660123406?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <div className="pt-32 pb-24 bg-light-gray/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-none glass-card rounded-[3rem] overflow-hidden">
              <CardHeader className="gradient-pastel text-white p-12 text-center">
                <CardTitle className="text-4xl font-extrabold font-heading mb-3 tracking-tighter">Form Booking</CardTitle>
                <CardDescription className="text-white/80 text-lg font-medium">
                  Isi data dirimu untuk reservasi kamera.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {selectedCamera && (
                    <div className="p-6 bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl flex items-center gap-6 mb-10">
                      <img 
                        src={selectedCamera.image} 
                        alt={selectedCamera.name} 
                        className="w-20 h-20 rounded-2xl object-cover shadow-md"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-[10px] text-foreground opacity-50 uppercase font-extrabold tracking-[0.2em]">Kamera Pilihan</p>
                        <p className="font-extrabold text-2xl text-foreground">{selectedCamera.name}</p>
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="relative">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 text-pastel-blue" size={20} />
                      <Input
                        name="name"
                        placeholder="Nama Lengkap"
                        required
                        className="pl-14 h-16 rounded-2xl border-white/50 bg-white/30 focus:ring-pastel-pink font-medium"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative">
                      <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-pastel-blue" size={20} />
                      <Input
                        name="phone"
                        placeholder="Nomor WhatsApp"
                        required
                        className="pl-14 h-16 rounded-2xl border-white/50 bg-white/30 focus:ring-pastel-pink font-medium"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-pastel-blue" size={20} />
                        <Input
                          name="date"
                          type="date"
                          required
                          className="pl-14 h-16 rounded-2xl border-white/50 bg-white/30 focus:ring-pastel-pink font-medium"
                          value={formData.date}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="relative">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-pastel-blue" size={20} />
                        <Input
                          name="duration"
                          type="number"
                          min="1"
                          placeholder="Durasi (Hari)"
                          required
                          className="pl-14 h-16 rounded-2xl border-white/50 bg-white/30 focus:ring-pastel-pink font-medium"
                          value={formData.duration}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MapPin className="absolute left-5 top-6 text-pastel-blue" size={20} />
                      <textarea
                        name="address"
                        placeholder="Alamat Lengkap"
                        required
                        className="w-full pl-14 pt-5 pb-5 rounded-2xl border border-white/50 bg-white/30 focus:outline-none focus:ring-2 focus:ring-pastel-pink min-h-[140px] font-medium"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-18 btn-cta text-xl">
                    Konfirmasi via WhatsApp <Send className="ml-3" size={24} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
