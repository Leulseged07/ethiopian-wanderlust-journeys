
import React from 'react';
import { Button } from '@/components/ui/button';
import { Map } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3634&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Ethiopian pattern overlay */}
      <div className="absolute inset-0 z-10 opacity-10 bg-[url('https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3634&q=80')] bg-repeat bg-[length:300px_300px]" />

      {/* Content */}
      <div className="container relative z-20 text-white">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover the Ancient Beauty of Ethiopia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Experience breathtaking landscapes, rich cultural heritage, and unforgettable adventures with Ethiopia's premier travel agency.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-ethiopia-yellow hover:bg-ethiopia-yellow/90 text-ethiopia-coffee font-bold text-lg">
              Explore Tours
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg"
            >
              <Map className="mr-2 h-5 w-5" />
              View Destinations
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex items-center space-x-6">
            <div className="flex items-center">
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full">
                <div className="rounded-full bg-white w-10 h-10 flex items-center justify-center">
                  <span className="text-ethiopia-green font-bold">4.9</span>
                </div>
              </div>
              <div className="ml-3">
                <p className="font-medium">Excellent</p>
                <p className="text-sm text-white/80">Based on 200+ reviews</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div>
              <p className="font-medium">Certified Travel Agency</p>
              <p className="text-sm text-white/80">Ethiopian Tourism Organization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <span className="text-white text-sm font-medium mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-[bounce_2s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
