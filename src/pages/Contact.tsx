import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - CYNERZA';
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      details: 'info@cynerza.ai',
      link: 'mailto:info@cynerza.ai'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      details: '+1 (123) 456-7890',
      link: 'tel:+11234567890'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: '123 Innovation Drive, San Francisco, CA 94103',
      link: 'https://maps.google.com'
    }
  ];

  return (
    <div className="w-full">
      <section className="py-2">
        <section className="py-0">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 gradient-text">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-800 dark:text-gray-400 mb-4">
                Have questions or want to learn more? Reach out to our team and we&apos;ll get back to you shortly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="gradient-text glass-effect rounded-xl p-6 text-center transition-transform hover:scale-105"
                  target={item.title === 'Visit Us' ? '_blank' : undefined}
                  rel={item.title === 'Visit Us' ? 'noopener noreferrer' : undefined}
                >
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-cynerza-purple/10 text-cynerza-purple">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{item.details}</p>
                </a>
              ))}
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="glass-effect rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 gradient-text text-center">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="company" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-800 dark:text-gray-400 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="focus:outline-none w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cynerza-purple focus:border-cynerza-purple"
                      ></textarea>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-cynerza-purple hover:bg-cynerza-purple/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-8 glass-effect-light mt-6">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Frequently Asked Questions</h2>
            <p className="text-gray-800 dark:text-gray-400 mb-8">
              Can&apos;t find what you&apos;re looking for? Contact us for more information.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: 'How do I get started with CYNERZA?',
                  a: "Sign up for a free account on our website, and you'll get immediate access to our basic tools and features. No credit card required."
                },
                {
                  q: 'Do you offer enterprise solutions?',
                  a: 'Yes, we provide custom enterprise solutions with additional features, support, and security options. Contact our sales team for details.'
                },
                {
                  q: 'Is CYNERZA available worldwide?',
                  a: 'Yes, CYNERZA is available globally. Our servers are distributed around the world to ensure fast access for all users.'
                },
                {
                  q: 'What programming languages do you support?',
                  a: 'We currently support JavaScript, TypeScript, Python, Java, Go, Ruby, and C#, with more languages being added regularly.'
                }
              ].map((faq, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 text-left">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{faq.q}</h3>
                  <p className="ttext-gray-800 dark:text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
