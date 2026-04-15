import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Camera } from "lucide-react";
import { Camera as CameraType } from "@/data/cameras";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CameraCardProps {
  camera: CameraType;
  key?: React.Key;
}

export default function CameraCard({ camera }: CameraCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden border-none glass-card rounded-[2rem] soft-shadow-hover transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden m-4 rounded-2xl bg-light-gray">
          <img
            src={camera.image}
            alt={camera.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <Badge className="absolute top-3 right-3 bg-pastel-pink text-white border-none px-3 py-1 text-[10px] font-bold rounded-lg shadow-sm">
            {camera.tag}
          </Badge>
        </div>
        <CardContent className="px-6 pb-2">
          <h3 className="text-lg font-bold text-foreground">{camera.name}</h3>
          <p className="text-pastel-blue font-bold text-sm">
            Rp {camera.price.toLocaleString("id-ID")} / hari
          </p>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-4 flex gap-3">
          <Button asChild nativeButton={false} variant="outline" className="flex-1 border-pastel-blue/20 text-pastel-blue hover:bg-pastel-blue hover:text-white rounded-full h-10 text-xs font-bold">
            <Link to={`/detail/${camera.id}`}>Detail</Link>
          </Button>
          <Button asChild nativeButton={false} className="flex-1 gradient-pastel hover:opacity-90 rounded-full h-10 text-xs font-bold shadow-md">
            <Link to={`/booking?cam=${camera.id}`}>Book Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
