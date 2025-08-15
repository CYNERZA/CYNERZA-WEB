import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageToAdmin } from '@/featured/auth/authSlice';
import { AppDispatch, RootState } from '@/app/store';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us - CYNERZA';
  }, []);

  const { toast } = useToast();
  const dispatch = useDispatch<AppDispatch>()
  const isSubmitting = useSelector((state: RootState) => state.auth.loading)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(sendMessageToAdmin(formData))
      .then((res: any) => {
        console.log({ res })
        if (!res.error) {
          toast({
            title: "Message Sent",
            description: res.payload.message,
          })
          setFormData({
            name: '',
            email: '',
            company: '',
            message: ''
          });

        } else {
          toast({
            title: "Error",
            description: res.payload,
            variant: "destructive",
          });
        }
      })

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
      details: '+91 7609019765',
      link: 'tel:+917609019765'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: 'Puri, Odisha, India',
      link: 'https://www.google.com/maps/place/Puri,+Odisha/@19.8087831,85.7391494,12z/data=!3m1!4b1!4m6!3m5!1s0x3a19c4180256e495:0x496a9d8b30c1fad7!8m2!3d19.8134554!4d85.8312359!16zL20vMDR0cTUy?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const faqs = [
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
  ];

  return (
    <div className="w-full">
      <section className="py-2">
        <section className="py-0">
          <div className="container mx-auto px-4">
            <motion.div {...fadeUp(0)} className="max-w-3xl mx-auto text-center">
              <motion.h1 {...fadeUp(0.2)} className="text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900 dark:text-slate-200">
                Get in <span className="gradient-text">Touch</span>
              </motion.h1>
              <motion.p {...fadeUp(0.3)} className="text-xl text-gray-800 dark:text-gray-400 mb-4">
                Have questions or want to learn more? Reach out to our team and we&apos;ll get back to you shortly.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  {...fadeUp(index * 0.1)}
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
                </motion.a>
              ))}
            </div>

            <motion.div {...fadeUp(0.4)} className="max-w-3xl mx-auto">
              <div className="glass-effect rounded-2xl overflow-hidden">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">Send Us a Message</h2>

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
            </motion.div>
          </div>
        </section>

        <section className="py-8 glass-effect-light mt-6">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 {...fadeUp(0)} className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Frequently Asked Questions
            </motion.h2>
            <motion.p {...fadeUp(0.1)} className="text-gray-800 dark:text-gray-400 mb-8">
              Can't find what you're looking for? Contact us for more information.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  {...fadeUp(index * 0.1)}
                  className="glass-effect rounded-xl p-6 text-left"
                >
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200">{faq.q}</h3>
                  <p className="text-gray-800 dark:text-gray-400">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
