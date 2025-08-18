import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Calendar, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with actual Formspree endpoint
      const response = await fetch("https://formspree.io/f/xxxxxx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at hello@airet.io",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="bg-white py-24 lg:py-32 relative">
      {/* Section Divider */}
      <div className="section-divider absolute top-0"></div>
      
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Contact Info */}
          <div className="text-black space-y-12">
            <div>
              <h2 className="font-playfair text-5xl lg:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                Experience AIRET at CES 2025
              </h2>
              <div className="editorial-quote">
                Schedule a private demonstration of our built-in luxury shoe care system. 
                See museum-quality display technology and AI-powered maintenance in action.
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <span className="text-gray-600 font-light">Las Vegas Convention Center</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <span className="text-gray-600 font-light">January 7-10, 2025</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-1 h-1 bg-black rounded-full"></div>
                <a 
                  href="/pdf/one-pager.pdf" 
                  className="text-gray-600 hover:text-black transition-colors font-light"
                  data-testid="link-download-sheet"
                >
                  Download Product Sheet
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-black p-12 shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
            <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
              
              <div>
                <Label htmlFor="name" className="text-white font-medium">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-3 bg-white border-0 px-4 py-3 text-black"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white font-medium">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="mt-3 bg-white border-0 px-4 py-3 text-black"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-white font-medium">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="mt-3 bg-white border-0 px-4 py-3 text-black"
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in AIRET..."
                  className="mt-3 bg-white border-0 px-4 py-3 text-black resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex flex-col gap-4 pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-secondary w-full py-4 text-lg font-medium tracking-wide"
                  data-testid="button-submit-demo"
                >
                  {isSubmitting ? "Sending..." : "Book CES Demo"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  className="w-full py-4 text-lg font-medium tracking-wide text-white border-2 border-white hover:bg-white hover:text-black transition-all"
                  data-testid="button-contact-us"
                >
                  Contact Us
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
