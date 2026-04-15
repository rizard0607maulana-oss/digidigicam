export interface Camera {
  id: number;
  name: string;
  price: number;
  tag: string;
  image: string;
  description: string;
  specs: string[];
}

export const cameras: Camera[] = [
  {
    id: 1,
    name: "Canon IXUS 160",
    price: 60000,
    tag: "Vintage Look",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VS238JzbNBDOwNfCulZkECNobXIxjLoIHQ&s",
    description: "Kamera digital vintage yang memberikan hasil foto dengan tone warna hangat dan nostalgic. Cocok untuk street photography dan daily moments.",
    specs: ["20.0 Megapixels", "8x Optical Zoom", "HD Movie Recording", "Eco Mode"]
  },
  {
    id: 2,
    name: "Sony Cyber-shot DSC-W510",
    price: 60000,
    tag: "Sharp & Clean",
    image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Sony_DSCW510_B_DSC_W510_Digital_Still_Camera_1294398073_750060.jpg",
    description: "Kamera compact dengan sensor CCD yang memberikan tekstur unik pada foto. Sangat ringan dan mudah dibawa kemana-mana.",
    specs: ["20.1 Megapixels", "8x Optical Zoom", "SteadyShot Image Stabilization", "720p HD Movie"]
  },
  {
    id: 3,
    name: "Canon PWS A2500",
    price: 50000,
    tag: "Pocket Friendly",
    image: "https://m.media-amazon.com/images/I/81JgsljLJ1L._AC_UF1000,1000_QL80_.jpg",
    description: "Desain slim dan warna-warna pastel yang cantik. Hasil fotonya sangat aesthetic untuk konten Instagram.",
    specs: ["16.0 Megapixels", "6x Optical Zoom", "Lens-shift VR", "18 Scene Modes"]
  },
  {
    id: 4,
    name: "Fujifilm FinePix F480",
    price: 50000,
    tag: "Y2K Aesthetic",
    image: "https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/Fujifilm_15776886_FinePix_F480_Digital_Camera_1233121383_514543.jpg",
    description: "Kamera dengan desain slide-up yang sangat ikonik di era 2000-an. Memberikan vibe Y2K yang kental pada setiap jepretan.",
    specs: ["14.2 Megapixels", "5x Optical Zoom", "Touch Screen LCD", "720p HD Movie"]
  },
  {
    id: 5,
    name: "Kodak Pixpro FZ55",
    price: 60000,
    tag: "Best Choice",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4QmxYjCOSMAHr-ceus-Ar2uR1rFufsbgPQw&s",
    description: "Kamera simple dengan hasil yang memuaskan. Cocok untuk pemula yang ingin mencoba sensasi kamera digital vintage.",
    specs: ["16.1 Megapixels", "5x Optical Zoom", "F2.5 Bright Lens", "Smart Auto"]
  },
  {
    id: 6,
    name: "Olympus VG180",
    price: 50000,
    tag: "Unique Colors",
    image: "https://m.media-amazon.com/images/I/81JRa0JNQQL.jpg",
    description: "Dikenal dengan color science-nya yang unik. Memberikan hasil foto yang berbeda dari kamera digital pada umumnya.",
    specs: ["14.0 Megapixels", "4x Optical Zoom", "Magic Filters", "AF Tracking"]
  }
];
