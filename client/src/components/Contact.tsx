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
    <section className="bg-black py-section-lg">
      <div className="max-w-container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-semibold mb-6">
                Experience AIRET at CES 2025
              </h2>
              <p className="text-body text-gray-300 leading-relaxed">
                Schedule a private demonstration of our built-in luxury shoe care system. 
                See museum-quality display technology and AI-powered maintenance in action.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text-gray-400 w-5 h-5" />
                <span className="text-gray-300">Las Vegas Convention Center</span>
              </div>
              <div className="flex items-center space-x-4">
                <Calendar className="text-gray-400 w-5 h-5" />
                <span className="text-gray-300">January 7-10, 2025</span>
              </div>
              <div className="flex items-center space-x-4">
                <Download className="text-gray-400 w-5 h-5" />
                <a 
                  href="/pdf/one-pager.pdf" 
                  className="text-gray-300 hover:text-white transition-colors underline"
                  data-testid="link-download-sheet"
                >
                  Download Product Sheet
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-2"
                  data-testid="input-name"
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="mt-2"
                  data-testid="input-email"
                />
              </div>
              
              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="mt-2"
                  data-testid="input-company"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in AIRET..."
                  className="mt-2 resize-none"
                  data-testid="textarea-message"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 bg-black text-white hover:opacity-90"
                  data-testid="button-submit-demo"
                >
                  {isSubmitting ? "Sending..." : "Book CES Demo"}
                </Button>
                <Button 
                  type="button" 
                  variant="outline"
                  className="flex-1 border-2 border-black hover:opacity-70"
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
