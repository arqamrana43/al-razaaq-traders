import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!"
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <div className="bg-razaq-cream-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 bg-razaq-green-900 overflow-hidden" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-razaq-green-900/90 to-razaq-green-800/70"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-white/90 max-w-xl mb-6">
              We'd love to hear from you! Reach out with questions, feedback, or bulk order inquiries.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8 animated-element">
            <h2 className="text-2xl font-heading font-medium text-razaq-green-800 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-razaq-green-700 mb-1">
                  Full Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-razaq-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-razaq-green-300" placeholder="Your name" required />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-razaq-green-700 mb-1">
                  Email Address
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-razaq-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-razaq-green-300" placeholder="Your email" required />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-razaq-green-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-razaq-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-razaq-green-300" placeholder="What's this about?" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-razaq-green-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-razaq-green-200 rounded-md focus:outline-none focus:ring-2 focus:ring-razaq-green-300" placeholder="How can we help you?" required />
              </div>
              
              <Button type="submit" className="w-full bg-razaq-green hover:bg-razaq-green-600" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8 animated-element">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-heading font-medium text-razaq-green-800 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-razaq-green-100 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-razaq-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-razaq-green-700">Phone</h3>
                    <p className="mt-1 text-base">+92 342 6378084</p>
                    <p className="text-base">+92 344 0612781</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-razaq-green-100 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-razaq-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-razaq-green-700">Email</h3>
                    <p className="mt-1 text-base">info@al-razaq-traders.42web.io</p>
                    <p className="text-base">support@al-razaq-traders.42web.io</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-razaq-green-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-razaq-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-razaq-green-700">Address</h3>
                    <p className="mt-1 text-base">6H6M+M4H, Gujranwala Pasrur Rd, Chicharwali Bajwa Pasrūr, 51250</p>
                    <p className="text-base">Chicharwali Bajwa Pasrūr, 51250</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-razaq-green-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-razaq-green-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-razaq-green-700">Business Hours</h3>
                    <p className="mt-1 text-base">Monday - Friday: 9am - 8pm</p>
                    <p className="text-base">Saturday: 10am - 6pm</p>
                    <p className="text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-xl font-heading font-medium text-razaq-green-800 mb-4">
                Our Location
              </h2>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13611.284535434327!2d74.3070354754277!3d31.5843298536692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191aa6bd1a2f33%3A0xc35cae32c7a50374!2sAnarkali%20Bazaar!5e0!3m2!1sen!2s!4v1634567890000!5m2!1sen!2s" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" title="Store Location"></iframe>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <Separator className="mb-12 bg-razaq-green-200" />
          <h2 className="text-3xl font-heading font-medium text-center text-razaq-green-800 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm animated-element" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-razaq-green-700 mb-3">Do you offer bulk discounts?</h3>
                <p className="text-razaq-green-600">Yes, we offer special pricing for bulk orders. Please contact our sales team directly for a customized quote.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm animated-element" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-razaq-green-700 mb-3">What are your shipping options?</h3>
                <p className="text-razaq-green-600">We offer standard and express shipping throughout Pakistan. Free shipping is available on orders over Rs. 2,000.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm animated-element" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614119075118-7ffef3a8bf69?q=80&w=1974&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-razaq-green-700 mb-3">Can I return products?</h3>
                <p className="text-razaq-green-600">Yes, unopened products can be returned within 14 days. Please refer to our return policy for more details.</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm animated-element" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}>
              <div className="bg-white/90 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-razaq-green-700 mb-3">How can I track my order?</h3>
                <p className="text-razaq-green-600">You will receive a tracking number via email once your order ships. You can also check your order status in your account.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;