import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import watchesImage from '@/assets/Watches_store_thumbnail_e72f9414-B75RELgB.png';
import abayaImage from '@/assets/Abaya_fashion_store_thumbnail_7761b0dc-BvXVkWeh.png';
import shoesImage from '@/assets/Shoes_store_thumbnail_06ddf194-CVZ9Oaoz.png';
import menswearImage from '@/assets/Menswear_store_thumbnail_bd0f3c6c-hBT6Wt6N.png';
import bridalImage from '@/assets/Bridal_store_thumbnail_c0cebbfb-DBw7QC5V.png';
import fashionImage from '@/assets/Fashion_store_thumbnail_0e39267c-D3isVDOx.png';
import electronicsImage from '@/assets/Electronics_store_thumbnail_45847afd-DC5yjfun.png';
import giftsImage from '@/assets/Gifts_store_thumbnail_d02c6e93-DJ2oBWkg.png';
import handmadeImage from '@/assets/Handmade_clothing_store_thumbnail_9a2ec2d4-D6U4LPEl.png';
import lingerieImage from '@/assets/Luxury_lingerie_store_display_3a6e7245-Bh5qMvpQ.png';
import handbagImage from '@/assets/Designer_handbag_store_display_d778e946-Dezip_Nh.png';
import sunglassesImage from '@/assets/Sunglasses_boutique_display_aeff64a5-u3ElEmOs.png';
import jewelryImage from '@/assets/Fine_jewelry_store_display_de65cf5c-ClsuLqAa.png';
import perfumeImage from '@/assets/Luxury_perfume_store_display_ce85ab76-QFGiNb8N.png';
import beautyImage from '@/assets/Beauty_products_store_display_7bbbc5e7-Bc7v0j38.png';
import toysImage from '@/assets/Kids_toys_store_display_0eb62a0e-BlM6vsz_.png';
import homedecorImage from '@/assets/Home_decor_store_display_5ca862ac-c-GtrXnE.png';
import fitnessImage from '@/assets/Fitness_gear_store_display_d0ca602e-u7r_IrpY.png';
import coffeeImage from '@/assets/Gourmet_coffee_store_display_da0fd8fe-CkylykEA.png';
import mensshoesImage from '@/assets/Mens_formal_shoes_display_668b06c4-CFOzRRLM.png';
import womensImage from '@/assets/Womens_boutique_clothing_display_daca52f7-f5ERR9ZZ.png';
import nightwearImage from '@/assets/Luxury_nightwear_store_display_43828ba3-Bt5dpIXs.png';
import techImage from '@/assets/Tech_accessories_store_display_b31d4a92-VS9Yfiue.png';
import aabirahImage from '@/assets/WhatsApp Image 2025-11-05 at 4.57.39 PM-uqWHheLF.jpeg';
import image1 from '@/assets/image1.png';
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';
import sincityImage from '@/assets/SINCITY.png';
import sincity2Image from '@/assets/SINCITY2.png';
import nightcity3Image from '@/assets/NIGHTCITY3.png';

interface StoreCardProps {
  name: string;
  url: string;
  category: string;
  imageType: string;
  delay?: number;
  index: number;
}

const imageMap: Record<string, string> = {
  watches: watchesImage,
  abaya: abayaImage,
  shoes: shoesImage,
  menswear: menswearImage,
  bridal: bridalImage,
  fashion: fashionImage,
  electronics: electronicsImage,
  gifts: giftsImage,
  handmade: handmadeImage,
  lingerie: lingerieImage,
  handbag: handbagImage,
  sunglasses: sunglassesImage,
  jewelry: jewelryImage,
  perfume: perfumeImage,
  beauty: beautyImage,
  toys: toysImage,
  homedecor: homedecorImage,
  fitness: fitnessImage,
  coffee: coffeeImage,
  mensshoes: mensshoesImage,
  womens: womensImage,
  nightwear: nightwearImage,
  nightwear2: techImage,
  aabirah: aabirahImage,
  sincity: sincityImage,
  sincity2: sincity2Image,
  nightcity3: nightcity3Image,
  // Additional mappings for missing image types
  Watches: watchesImage,
  Abaya: abayaImage,
  Shoes: shoesImage,
  Menswear: menswearImage,
  Bridal: bridalImage,
  Fashion: fashionImage,
  Electronics: electronicsImage,
  Gifts: giftsImage,
  Handmade: handmadeImage,
  Lingerie: lingerieImage,
  Handbag: handbagImage,
  Sunglasses: sunglassesImage,
  Jewelry: jewelryImage,
  Perfume: perfumeImage,
  Beauty: beautyImage,
  Toys: toysImage,
  Homedecor: homedecorImage,
  Fitness: fitnessImage,
  Coffee: coffeeImage,
  Mensshoes: mensshoesImage,
  Womens: womensImage,
  Nightwear: nightwearImage,
  Nighties: techImage,
  image1: image1,
  image2: image2,
  image3: image3,
  // Fallback mappings
  'Leak Proof UnderGarments': fitnessImage,
  'Women Clothing': womensImage,
  'Abaya & Co-ords': abayaImage,
  'Lingerie & Panties': lingerieImage,
  'Lingerie & Bras': lingerieImage,
  'Lingerie/Nighties': nightwearImage,
};

const gradientOverlays = [
  'from-accent/40 via-primary/30 to-transparent',
  'from-primary/40 via-accent/30 to-transparent',
  'from-accent/30 via-transparent to-primary/40',
  'from-primary/30 via-transparent to-accent/40',
  'from-accent/50 via-primary/20 to-accent/30',
  'from-primary/50 via-accent/20 to-primary/30',
  'from-transparent via-accent/40 to-primary/30',
  'from-transparent via-primary/40 to-accent/40',
];

export default function StoreCard({ name, url, category, imageType, delay = 0, index }: StoreCardProps) {
  const image = imageMap[imageType] || fashionImage;
  const gradientOverlay = gradientOverlays[index % gradientOverlays.length];
  const rotation = (index % 3) - 1;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative bg-gradient-to-br from-card/60 to-card/30 border-2 border-accent/30 rounded-xl overflow-hidden backdrop-blur-sm green-shine hover-elevate active-elevate-2 transition-all duration-500 hover:-translate-y-3 card-glow hover:shadow-2xl hover:z-50"
      style={{ 
        animationDelay: `${delay}ms, ${index * 0.2}s`,
        transform: 'perspective(1000px) rotateY(0deg)',
      }}
      data-testid={`card-store-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${gradientOverlay} z-10 mix-blend-overlay`} />
        
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125"
          style={{
            filter: `hue-rotate(${index * 15}deg) saturate(1.1)`,
            transform: `rotate(${rotation}deg) scale(1.05)`,
          }}
          // Added loading attribute to ensure images load properly on mobile
          loading="lazy"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-20" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
        
        <div className="absolute top-3 right-3 bg-gradient-to-br from-accent/90 to-primary/90 backdrop-blur-sm p-2 rounded-lg opacity-100 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-accent/50 z-30">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>

        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
          style={{
            animation: 'greenShine 2s ease-in-out infinite',
            animationPlayState: 'paused',
          }}
        />
      </div>
      
      <div className="relative p-6 z-30">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300" data-testid={`text-store-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
          {name}
        </h3>
        <Badge 
          variant="secondary" 
          className="text-sm bg-gradient-to-r from-accent/30 to-primary/30 border-accent/40 shadow-lg shadow-accent/20" 
          data-testid={`badge-category-${category.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {category}
        </Badge>
      </div>

      <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/60 rounded-xl transition-all duration-300 pointer-events-none z-40" />
    </a>
  );
}