import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const industryData = [
  {
    title: "Banking",
    slug: "banking",
    description:
      "We modernize banking systems and enrich customer experience with innovative digital solutions tailored for financial institutions.",
    image:
      "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Capital Markets",
    slug: "capital-markets",
    description:
      "Our expertise supports trading platforms, risk management, and compliance to help navigate fast-changing capital markets.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Communications, Media, and Information Services",
    slug: "media-communications",
    description:
      "We build scalable digital experiences for media and telecom companies focusing on engaging content and connectivity.",
    image:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Education",
    slug: "education",
    description:
      "Advanced learning platforms and tools to enhance accessibility and engagement for students and institutions.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description:
      "Secure, compliant healthcare solutions improving patient care, operational efficiency, and interoperability.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
  },
  {
    title: "Public Services",
    slug: "public-services",
    description:
      "Digital platforms enabling accessible, transparent, and efficient government and civic service delivery.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Retail",
    slug: "retail",
    description:
      "Retail is about creating experiences. We help retailers bridge online and offline worlds with e-commerce platforms, inventory management, and customer engagement tools that drive sales and loyalty.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=60",
  },
  {
    title: "Travel and Logistics",
    slug: "travel-logistics",
    description:
      "Moving people and goods efficiently requires smart technology. We create solutions for booking systems, fleet management, route optimization, and supply chain visibility that keep the world moving.",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=60",
  },
];


export default function IndustriesPage() {
  const navigate = useNavigate();

  const handleClick = (slug) => {
    navigate(`/industries/${slug}`);
  };

  const handleKeyDown = (e, slug) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(slug);
    }
  };

  return (
    <div className="relative pt-24 md:pt-28 px-4 sm:px-6 lg:px-8 min-h-screen py-8">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-purple-800/10 to-indigo-600/20 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero title */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold font-heading mb-6 bg-clip-text
              text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
          >
            Our Industry <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Transformative technology services across sectors — delivered with security, scale and measurable business outcomes.
          </motion.p>
        </div>

        {/* Full-width 'What We Do' description */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="max-w-5xl mx-auto space-y-8 text-left px-4 sm:px-6 prose dark:prose-invert "
        >
          <h2 className="text-xl font-semibold mb-3">What We Do</h2>
          <p>
            Each industry faces unique challenges, and we craft digital solutions aligned to those challenges. We help enterprises optimize core systems,
            innovate customer engagements, and modernize operations with scalable, secure, and intelligent technologies.
          </p>

          <h3 className="mt-6 text-lg font-medium">Our Services Include</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>End-to-end cloud-native platform development and migration</li>
            <li>Advanced data analytics, AI models, and automation pipelines</li>
            <li>Customer experience transformation spanning web, mobile, and omnichannel</li>
            <li>Security, compliance, and resiliency engineering</li>
          </ul>

          <p className="mt-4">
            We partner with clients at all stages — from strategy and design, through implementation and ongoing support — to deliver impactful solutions that sustain lasting advantage.
          </p>
        </motion.div>

        {/* Industries Grid Section with motion */}
        <section className="px-4 lg:px-0 ">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
          >
            Industries we serve
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {industryData.map(({ slug, title, description, image }, index) => (
              <motion.article
                key={slug}
                onClick={() => handleClick(slug)}
                onKeyDown={(e) => handleKeyDown(e, slug)}
                role="button"
                tabIndex={0}
                aria-label={`Open ${title} industry page`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="group cursor-pointer rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-transparent hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 overflow-hidden flex flex-col"
              >
                <div className="w-full aspect-w-16 aspect-h-9 relative pointer-events-auto">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
                      Image not available
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-300">Explore</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-80">
                      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </section>
      </div>
    </div>
  );
}
