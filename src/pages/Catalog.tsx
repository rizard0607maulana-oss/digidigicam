import React, { useState } from "react";
import { motion } from "motion/react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { cameras } from "@/data/cameras";
import CameraCard from "@/components/CameraCard";

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCameras = cameras.filter((camera) =>
    camera.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    camera.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Katalog <span className="text-gradient-pastel">Kamera</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Pilih kamera digital favoritmu dan mulai berkreasi. 
            Semua unit sudah termasuk memori card dan card reader.
          </motion.p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 max-w-4xl mx-auto">
          <div className="relative flex-grow">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-foreground opacity-40" size={20} />
            <Input
              placeholder="Cari kamera (ex: Canon, Vintage...)"
              className="pl-14 h-16 rounded-3xl border-white/40 bg-white/40 backdrop-blur-md focus:ring-pastel-pink shadow-lg font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="h-16 px-10 rounded-3xl border-white/40 bg-white/40 backdrop-blur-md text-foreground opacity-70 hover:opacity-100 transition-all font-bold">
            <SlidersHorizontal className="mr-2" size={20} /> Filter
          </Button>
        </div>

        {/* Grid */}
        {filteredCameras.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCameras.map((camera) => (
              <CameraCard key={camera.id} camera={camera} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="inline-flex p-6 bg-light-gray rounded-full mb-6 text-muted-foreground">
              <Search size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Kamera tidak ditemukan</h3>
            <p className="text-muted-foreground">Coba cari dengan kata kunci lain ya!</p>
          </div>
        )}
      </div>
    </div>
  );
}
