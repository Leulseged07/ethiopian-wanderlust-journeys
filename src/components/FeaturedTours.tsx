
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Map, Clock, Users, Landmark } from 'lucide-react';

interface TourProps {
  title: string;
  description: string;
  image: string;
  days: number;
  maxPeople: number;
  price: number;
  featured?: boolean;
}

const tours: TourProps[] = [
  {
    title: 'Historical Northern Circuit',
    description: 'Discover the ancient wonders of Lalibela, Axum, Gondar, and the beautiful Simien Mountains.',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5472&q=80',
    days: 10,
    maxPeople: 12,
    price: 1950,
    featured: true
  },
  {
    title: 'Omo Valley Cultural Experience',
    description: 'Immerse yourself in the diverse tribal cultures of Ethiopia's fascinating Omo Valley region.',
    image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4221&q=80',
    days: 8,
    maxPeople: 10,
    price: 1650,
  },
  {
    title: 'Danakil Depression Adventure',
    description: 'Explore one of Earth's most unique landscapes with colorful hot springs and otherworldly salt formations.',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5616&q=80',
    days: 5,
    maxPeople: 8,
    price: 1200,
  }
];

const TourCard = ({ tour }: { tour: TourProps }) => {
  return (
    <Card className={`overflow-hidden h-full flex flex-col ${tour.featured ? 'border-ethiopia-yellow border-2' : ''}`}>
      <div className="relative h-60">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        {tour.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-ethiopia-yellow text-ethiopia-coffee px-3 py-1 rounded-full text-sm font-medium">
              Popular Tour
            </span>
          </div>
        )}
        <div className="absolute bottom-4 left-4 flex space-x-2">
          <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {tour.days} days
          </div>
          <div className="bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <Users className="h-3 w-3 mr-1" />
            Max {tour.maxPeople}
          </div>
        </div>
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-xl font-bold mb-2">{tour.title}</h3>
        <p className="text-muted-foreground">{tour.description}</p>
        <div className="mt-4 flex items-center">
          <Landmark className="h-4 w-4 text-ethiopia-green mr-2" />
          <span className="text-sm text-muted-foreground">Multiple destinations</span>
        </div>
      </CardContent>
      <CardFooter className="p-5 border-t bg-muted/50 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-ethiopia-green">${tour.price}</span>
          <span className="text-muted-foreground"> / person</span>
        </div>
        <Button className="bg-ethiopia-green hover:bg-ethiopia-green/90 text-white">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

const FeaturedTours = () => {
  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container">
        <h2 className="section-title">Featured Tours</h2>
        <p className="section-subtitle">
          Experience the best of Ethiopia with our carefully crafted tour packages
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-2 border-ethiopia-green text-ethiopia-green hover:bg-ethiopia-green/5"
          >
            <Map className="mr-2 h-4 w-4" />
            Browse All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
