import { Link } from "react-router-dom";
import { Camera, Instagram, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white/30 backdrop-blur-md pt-20 pb-10 border-t border-white/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="p-2 gradient-pastel rounded-xl text-white">
                <Camera size={24} />
              </div>
              <span className="text-2xl font-extrabold font-heading text-gradient-pastel tracking-tighter">
                DigiDigiCam.
              </span>
            </Link>
            <p className="text-foreground opacity-70 max-w-sm mb-8 leading-relaxed">
              Penyedia jasa sewa kamera digital vintage terlengkap di Purwokerto. 
              Bikin momenmu makin aesthetic dengan sentuhan nostalgic. ✨
            </p>
            <div className="flex gap-5">
              <a href="#" className="p-3 bg-white/50 rounded-full text-pastel-pink hover:bg-pastel-pink hover:text-white transition-all shadow-sm">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-3 bg-white/50 rounded-full text-pastel-blue hover:bg-pastel-blue hover:text-white transition-all shadow-sm">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold mb-8 text-foreground uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-foreground opacity-60 hover:opacity-100 transition-all font-bold text-sm">Home</Link></li>
              <li><Link to="/catalog" className="text-foreground opacity-60 hover:opacity-100 transition-all font-bold text-sm">Catalog</Link></li>
              <li><Link to="/booking" className="text-foreground opacity-60 hover:opacity-100 transition-all font-bold text-sm">Booking</Link></li>
              <li><Link to="/about" className="text-foreground opacity-60 hover:opacity-100 transition-all font-bold text-sm">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold mb-8 text-foreground uppercase tracking-widest text-xs">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-foreground opacity-70">
                <MapPin size={20} className="text-pastel-pink shrink-0 mt-1" />
                <span className="text-sm font-medium">Jl. Riyanto Sumampir Wetan, Pabuaran, Kec. Purwokerto Utara, Kabupaten Banyumas, Jawa Tengah</span>
              </li>
              <li className="flex items-center gap-4 text-foreground opacity-70">
                <MessageCircle size={20} className="text-pastel-blue shrink-0" />
                <span className="text-sm font-medium">+6289660123406</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-foreground opacity-40">
          <p>© {new Date().getFullYear()} DIGIDIGICAM PURWOKERTO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:opacity-100 transition-opacity">PRIVACY POLICY</a>
            <a href="#" className="hover:opacity-100 transition-opacity">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
