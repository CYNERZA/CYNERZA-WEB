import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Custom AI Development',
      description: 'We build custom AI solutions tailored to your specific business needs, from natural language processing to computer vision.',
    },
    {
      title: 'Machine Learning Models',
      description: 'Our team develops and deploys high-performance machine learning models for prediction, classification, and clustering tasks.',
    },
    {
      title: 'Data Analytics & Insights',
      description: 'We help you unlock the value of your data with advanced analytics, providing actionable insights to drive business growth.',
    },
    {
      title: 'AI Integration Services',
      description: 'Integrate the power of AI into your existing applications and workflows for enhanced efficiency and capabilities.',
    },
    {
      title: 'AI Consulting',
      description: 'Our experts provide strategic guidance to help you leverage AI and machine learning for a competitive advantage.',
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'From chatbots to sentiment analysis, we offer a range of NLP services to help you understand and interact with your customers.',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-transparent py-12 sm:py-16">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Everything you need to leverage AI
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          We provide a comprehensive suite of AI services to help your business innovate and grow. From custom solutions to strategic consulting, we're here to help.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {services.map((service) => (
            <div key={service.title} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                {service.title}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{service.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Services;
