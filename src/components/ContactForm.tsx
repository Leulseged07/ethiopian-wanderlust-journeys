
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message received!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have questions or ready to start planning your Ethiopian adventure? Reach out to our team of travel experts.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="bg-ethiopia-green text-white p-8 rounded-xl h-full">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-white/80 mb-1">Email</p>
                  <p className="font-medium">info@tatour.eth</p>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Phone</p>
                  <p className="font-medium">+251 11 234 5678</p>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Address</p>
                  <p className="font-medium">
                    Bole Road, Addis Ababa<br />
                    Ethiopia
                  </p>
                </div>
                
                <div>
                  <p className="text-white/80 mb-1">Working Hours</p>
                  <p className="font-medium">Monday - Saturday: 9am - 6pm</p>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'youtube'].map((platform) => (
                    <a 
                      key={platform}
                      href="#" 
                      className="bg-white/20 hover:bg-white/30 transition-colors w-10 h-10 rounded-full flex items-center justify-center"
                    >
                      <span className="sr-only">{platform}</span>
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm interested in</Label>
                      <Select>
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select your interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="northern-circuit">Northern Circuit</SelectItem>
                          <SelectItem value="cultural-tours">Cultural Tours</SelectItem>
                          <SelectItem value="adventure">Adventure Expeditions</SelectItem>
                          <SelectItem value="custom">Custom Itinerary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your travel plans, questions, or special requirements" 
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ethiopia-yellow hover:bg-ethiopia-yellow/90 text-ethiopia-coffee"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
