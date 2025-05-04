
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Landmark, Mountain, Church, Building } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DestinationProps {
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
}

const destinations: DestinationProps[] = [
  {
    name: 'Lalibela',
    description: 'Explore the remarkable rock-hewn churches, a UNESCO World Heritage site dating back to the 12th century.',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4752&q=80',
    icon: <Church className="h-5 w-5" />,
    color: 'bg-ethiopia-red'
  },
  {
    name: 'Simien Mountains',
    description: 'Trek through breathtaking landscapes and spot endemic wildlife in this stunning national park.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=7372&q=80',
    icon: <Mountain className="h-5 w-5" />,
    color: 'bg-ethiopia-green'
  },
  {
    name: 'Gondar',
    description: 'Discover the medieval castles and palaces of the "Camelot of Africa" in this historical city.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3648&q=80',
    icon: <Building className="h-5 w-5" />,
    color: 'bg-ethiopia-coffee'
  },
  {
    name: 'Axum',
    description: 'Visit the ancient kingdom known for its obelisks and the church claiming to house the Ark of the Covenant.',
    image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6000&q=80',
    icon: <Landmark className="h-5 w-5" />,
    color: 'bg-ethiopia-yellow'
  }
];

const DestinationCard = ({ destination }: { destination: DestinationProps }) => {
  return (
    <Card className="overflow-hidden group transition-all hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4">
          <div className={cn("rounded-full p-2 text-white", destination.color)}>
            {destination.icon}
          </div>
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
        <p className="text-muted-foreground">{destination.description}</p>
        <a 
          href="#" 
          className="inline-flex items-center mt-4 text-ethiopia-green font-medium hover:text-ethiopia-green/80"
        >
          Explore more
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </a>
      </CardContent>
    </Card>
  );
};

const PopularDestinations = () => {
  return (
    <section id="destinations" className="py-20 bg-muted">
      <div className="container">
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-subtitle">
          Explore Ethiopia's most captivating locations, from ancient historical sites to breathtaking natural wonders
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} destination={destination} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-ethiopia-green text-ethiopia-green rounded-md hover:bg-ethiopia-green/5 transition-colors font-medium"
          >
            View All Destinations
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
