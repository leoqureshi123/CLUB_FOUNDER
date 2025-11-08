import { Link } from "wouter";

interface TeamMemberCardProps {
  name: string;
  title: string;
  role: string;
  imageUrl: string;
  link?: string;
  altText: string;
}

export default function TeamMemberCard({
  name,
  title,
  role,
  imageUrl,
  link,
  altText
}: TeamMemberCardProps) {
  // Check if link is an external URL
  const isExternalLink = link && (link.startsWith('http://') || link.startsWith('https://'));
  
  // Render as anchor tag for external links, Link component for internal routes
  if (isExternalLink) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group w-full max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full border-2 border-purple-500">
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={imageUrl} 
              alt={altText} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Purple shine effect overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-1">{title}</p>
              <p className="mt-1">{role}</p>
            </div>
          </div>
        </div>
      </a>
    );
  }
  
  // For internal links or no link
  if (link) {
    return (
      <Link href={link} className="block group w-full max-w-md mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full border-2 border-purple-500">
          <div className="relative aspect-square overflow-hidden">
            <img 
              src={imageUrl} 
              alt={altText} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Purple shine effect overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 text-white">
              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-1">{title}</p>
              <p className="mt-1">{role}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  // No link case
  return (
    <div className="block group w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl h-full border-2 border-purple-500">
        <div className="relative aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Purple shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-white">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-1">{title}</p>
            <p className="mt-1">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}