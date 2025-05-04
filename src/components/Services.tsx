
import React from 'react';
import { Compass, Route, Tent, Ticket, Map, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const services: ServiceProps[] = [
  {
    title: 'Guided Tours',
    description: 'Expert local guides who provide deep cultural insights and knowledge about Ethiopian heritage.',
    icon: <Compass />,
    color: 'bg-gradient-to-br from-ethiopia-green to-ethiopia-green/70'
  },
  {
    title: 'Custom Itineraries',
    description: 'Personalized travel plans tailored to your interests, timeline, and budget requirements.',
    icon: <Route />,
    color: 'bg-gradient-to-br from-ethiopia-red to-ethiopia-red/70'
  },
  {
    title: 'Adventure Expeditions',
    description: 'Trekking, hiking, and wildlife experiences through Ethiopia's diverse landscapes.',
    icon: <Tent />,
    color: 'bg-gradient-to-br from-ethiopia-coffee to-ethiopia-coffee/70'
  },
  {
    title: 'Event Packages',
    description: 'Special tours for Ethiopian festivals, cultural events, and religious celebrations.',
    icon: <Ticket />,
    color: 'bg-gradient-to-br from-ethiopia-yellow to-ethiopia-yellow/70'
  },
  {
    title: 'Transportation',
    description: 'Comfortable and reliable transportation options throughout your Ethiopian journey.',
    icon: <Map />,
    color: 'bg-gradient-to-br from-ethiopia-stone to-ethiopia-stone/70'
  },
  {
    title: 'Group Tours',
    description: 'Join like-minded travelers on scheduled departures to Ethiopia's major highlights.',
    icon: <Users />,
    color: 'bg-gradient-to-br from-ethiopia-clay to-ethiopia-clay/70'
  }
];

const ServiceCard = ({ service }: { service: ServiceProps }) => {
  return (
    <div className="group">
      <div className={cn(
        "rounded-xl p-6 text-white flex items-center justify-center w-16 h-16 mb-5 transition-transform group-hover:scale-110", 
        service.color
      )}>
        {service.icon}
      </div>
      <h3 className="feature-title">{service.title}</h3>
      <p className="feature-description">{service.description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer comprehensive travel services designed to give you an authentic and memorable Ethiopian experience
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="mt-16 bg-ethiopia-natural p-8 rounded-xl border border-ethiopia-coffee/10 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-ethiopia-coffee mb-2">Ready for a customized experience?</h3>
            <p className="text-muted-foreground">Let us create the perfect Ethiopian journey tailored to your preferences.</p>
          </div>
          <a 
            href="#contact"
            className="mt-4 md:mt-0 btn-primary whitespace-nowrap"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
