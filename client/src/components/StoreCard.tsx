import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import watchesImage from '@assets/generated_images/Watches_store_thumbnail_e72f9414.png';
import abayaImage from '@assets/generated_images/Abaya_fashion_store_thumbnail_7761b0dc.png';
import shoesImage from '@assets/generated_images/Shoes_store_thumbnail_06ddf194.png';
import menswearImage from '@assets/generated_images/Menswear_store_thumbnail_bd0f3c6c.png';
import bridalImage from '@assets/generated_images/Bridal_store_thumbnail_c0cebbfb.png';
import fashionImage from '@assets/generated_images/Fashion_store_thumbnail_0e39267c.png';
import electronicsImage from '@assets/generated_images/Electronics_store_thumbnail_45847afd.png';
import giftsImage from '@assets/generated_images/Gifts_store_thumbnail_d02c6e93.png';
import handmadeImage from '@assets/generated_images/Handmade_clothing_store_thumbnail_9a2ec2d4.png';
import lingerieImage from '@assets/generated_images/Luxury_lingerie_store_display_3a6e7245.png';
import handbagImage from '@assets/generated_images/Designer_handbag_store_display_d778e946.png';
import sunglassesImage from '@assets/generated_images/Sunglasses_boutique_display_aeff64a5.png';
import jewelryImage from '@assets/generated_images/Fine_jewelry_store_display_de65cf5c.png';
import perfumeImage from '@assets/generated_images/Luxury_perfume_store_display_ce85ab76.png';
import beautyImage from '@assets/generated_images/Beauty_products_store_display_7bbbc5e7.png';
import toysImage from '@assets/generated_images/Kids_toys_store_display_0eb62a0e.png';
import homedecorImage from '@assets/generated_images/Home_decor_store_display_5ca862ac.png';
import fitnessImage from '@assets/generated_images/Fitness_gear_store_display_d0ca602e.png';
import coffeeImage from '@assets/generated_images/Gourmet_coffee_store_display_da0fd8fe.png';
import mensshoesImage from '@assets/generated_images/Mens_formal_shoes_display_668b06c4.png';
import womensImage from '@assets/generated_images/Womens_boutique_clothing_display_daca52f7.png';
import nightwearImage from '@assets/generated_images/Luxury_nightwear_store_display_43828ba3.png';
import nightwear2Image from '@assets/generated_images/Tech_accessories_store_display_b31d4a92.png';
import aabirahImage from '@assets/generated_images/WhatsApp Image 2025-11-05 at 4.57.39 PM.jpeg';

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
  nightwear2: nightwear2Image,
  aabirah: aabirahImage,
};

const gradientOverlays = [
  'from-accent/40 via-primary/30 to-transparent',
  'from-primary/40 via-accent/30 to-transparent',
  'from-accent/30 via-transparent to-primary/40',
  'from-primary/30 via-transparent to-accent/40',
  'from-accent/50 via-primary/20 to-accent/30',
  'from-primary/50 via-accent/20 to-primary/30',
  'from-transparent via-accent/40 to-primary/30',
  'from-transparent via-primary/40 to-accent/30',
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