
import React from 'react';
import { Compass, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-ethiopia-coffee text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Logo & About */}
          <div>
            <div className="flex items-center mb-6">
              <Compass className="w-8 h-8 text-ethiopia-yellow" />
              <span className="text-2xl font-display font-bold ml-2">
                TA <span className="text-ethiopia-yellow">Tour</span>
              </span>
            </div>
            <p className="text-white/80 mb-6">
              Ethiopia's premier travel agency, specializing in authentic cultural experiences and adventures through the land of origins.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="bg-white/10 hover:bg-white/20 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Destinations', 'Tours', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-ethiopia-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Tour Types */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tour Types</h3>
            <ul className="space-y-3">
              {[
                'Historical Tours', 
                'Cultural Experiences', 
                'Adventure Expeditions', 
                'Wildlife Safaris', 
                'Photography Tours', 
                'Custom Itineraries'
              ].map((type) => (
                <li key={type}>
                  <a href="#" className="text-white/80 hover:text-ethiopia-yellow transition-colors">
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter for the latest travel tips and tour packages.
            </p>
            <div className="flex mb-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 flex-grow bg-white/10 rounded-l-md focus:outline-none focus:bg-white/20"
              />
              <Button className="bg-ethiopia-yellow text-ethiopia-coffee hover:bg-ethiopia-yellow/90 rounded-l-none">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center">
              <Map className="h-5 w-5 text-ethiopia-yellow mr-2" />
              <span className="text-white/80 text-sm">Certified Ethiopian Tourism Partner</span>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; 2025 TA Tour and Travel Agency. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-white/60 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Terms & Conditions</a>
            <a href="#" className="text-white/60 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
