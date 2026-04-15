import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Camera, Heart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cameras } from "@/data/cameras";
import CameraCard from "@/components/CameraCard";

export default function Home() {
  const featuredCameras = cameras.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 bg-pastel-blue text-white px-4 py-1.5 rounded-full text-xs font-bold w-fit shadow-sm">
              #1 RENTAL DI PURWOKERTO
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 leading-[1.1] tracking-tighter">
              Sewa Kamera <br />
              <span className="text-gradient-pastel">Digital Aesthetic</span>
            </h1>
            <p className="text-xl text-foreground opacity-80 mb-10 max-w-lg leading-relaxed">
              Abadikan momen Gen Z kamu dengan vibe Y2K yang otentik. Tersedia koleksi kamera digital vintage terlengkap di Purwokerto. ✨
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="btn-cta px-10 py-7 text-lg">
                <Link to="/catalog">
                  Lihat Katalog
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-outline-pink px-10 py-7 text-lg">
                <Link to="/about">Cara Booking</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden soft-shadow border-8 border-white">
              <img
                src="https://cdn-jpr.jawapos.com/images/43/2025/10/24/Tak-berjudul1_20251024101352-3180091304.png"
                alt="Aesthetic Camera"
                className="w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl soft-shadow z-20 animate-bounce-slow">
              <Heart className="text-pastel-pink fill-pastel-pink" size={32} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl soft-shadow z-20 animate-bounce-slow delay-500">
              <Instagram className="text-pastel-blue" size={32} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter">Kenapa DigiDigiCam?</h2>
            <div className="w-24 h-1.5 gradient-pastel mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Camera />, title: "Koleksi Lengkap", desc: "Dari Canon IXUS sampai Sony Cyber-shot, semua ada!", color: "gradient-pastel" },
              { icon: <Sparkles />, title: "Kondisi Prima", desc: "Semua kamera dicek berkala untuk hasil maksimal.", color: "gradient-pastel" },
              { icon: <Heart />, title: "Harga Pelajar", desc: "Mulai dari 40rb-an aja, udah bisa gaya seharian.", color: "gradient-pastel" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-10 rounded-[2.5rem] glass-card hover:scale-105 transition-all group text-center"
              >
                <div className={`w-16 h-16 ${item.color} text-white rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:rotate-12 transition-transform shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground opacity-70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Catalog */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter">Kamera Terpopuler</h2>
              <p className="text-lg opacity-70">Pilihan favorit DigiFriends di Purwokerto.</p>
            </div>
            <Button asChild variant="ghost" className="text-pastel-blue hover:text-pastel-pink font-bold group">
              <Link to="/catalog" className="flex items-center gap-2">
                Lihat Semua <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCameras.map((camera) => (
              <CameraCard key={camera.id} camera={camera} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter">Apa Kata Mereka?</h2>
            <p className="text-lg opacity-70">Cerita seru dari DigiFriends.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { name: "Siska", comment: "Hasil fotonya beneran aesthetic banget! Gak perlu edit lagi udah cakep.", role: "Mahasiswi Unsoed" },
              { name: "Budi", comment: "Pelayanannya ramah banget, kameranya juga bersih dan berfungsi normal.", role: "Fotografer" },
              { name: "Lala", comment: "Suka banget sama vibe Y2K-nya. Bakal langganan terus di sini!", role: "Content Creator" },
            ].map((testi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] glass-card hover:scale-[1.02] transition-transform"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} className="text-pastel-pink fill-pastel-pink" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 leading-relaxed opacity-80">"{testi.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 gradient-pastel rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testi.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testi.name}</p>
                    <p className="text-sm opacity-60">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="gradient-pastel rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-7xl font-extrabold mb-8 tracking-tighter leading-tight">Siap Bikin Momenmu <br /> Aesthetic?</h2>
              <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
                Booking sekarang sebelum kehabisan! Stok terbatas untuk setiap model kamera.
              </p>
              <Button asChild size="lg" className="bg-white text-pastel-blue hover:bg-white/90 rounded-full px-12 py-8 text-xl font-bold shadow-xl transition-all hover:scale-105">
                <Link to="/catalog">Pilih Kamera Sekarang</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
      {children}
    </div>
  );
}
