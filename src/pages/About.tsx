import React from "react";
import { motion } from "motion/react";
import { Heart, Camera, MapPin, Instagram, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Tentang <span className="text-gradient-pastel">DigiDigiCam</span>
            </motion.h1>
            <div className="w-24 h-1.5 gradient-pastel mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-[2.5rem] overflow-hidden soft-shadow border-8 border-white rotate-3">
                <img
                  src="https://asset.kompas.com/crops/4lwSYEJ1LY1N6SrXs6WXpzkCRfs=/122x2:1280x774/1200x800/data/photo/2023/11/11/654f9e00d9ccd.jpg"
                  alt="Our Story"
                  className="w-full aspect-[4/5] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story ✨</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Berawal dari kecintaan kami pada tone warna nostalgic dari kamera digital vintage, 
                  <strong> DigiDigiCam Purwokerto</strong> hadir untuk membagikan vibe aesthetic ini kepada teman-teman di Purwokerto.
                </p>
                <p>
                  Kami percaya bahwa setiap momen berharga layak diabadikan dengan cara yang unik. 
                  Kamera digital era 2000-an memberikan tekstur dan warna yang tidak bisa didapatkan dari filter smartphone biasa.
                </p>
                <p>
                  Misi kami adalah menyediakan akses mudah dan terjangkau bagi siapa saja yang ingin 
                  mengeksplorasi kreativitas melalui fotografi digital vintage.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="bg-pastel-blue/5 rounded-[3rem] p-12 md:p-20 mb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 soft-shadow text-pastel-pink">
                  <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dibuat dengan Cinta</h3>
                <p className="text-muted-foreground">Setiap unit dirawat sepenuh hati untuk DigiFriends.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 soft-shadow text-pastel-blue">
                  <Camera size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Kualitas Terjamin</h3>
                <p className="text-muted-foreground">Hanya menyediakan unit terbaik dengan hasil foto memuaskan.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 soft-shadow text-pastel-pink">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Vibe Aesthetic</h3>
                <p className="text-muted-foreground">Bikin kontenmu beda dari yang lain dengan sentuhan vintage.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Visit Our Studio 📍</h2>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white soft-shadow rounded-full text-pastel-blue font-medium mb-12">
              <MapPin size={20} />
              <span>Grendeng, Purwokerto Utara</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-square soft-shadow border-4 border-white">
                  <img
                    src={`https://picsum.photos/seed/digicam${i}/400/400`}
                    alt="Gallery"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground flex items-center justify-center gap-2">
              Follow us on <Instagram size={18} className="text-pastel-pink" /> <span className="font-bold text-foreground">@digidigicam.pwt</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
