import React from 'react';
import { motion } from 'framer-motion';
import { Shield, PenTool as Tool, Cpu, Layout, Search } from 'lucide-react';

const offerings = [
  {
    title: "Quality Assurance",
    icon: Shield,
    description: "Comprehensive quality assurance services ensuring your applications meet the highest standards of reliability and performance.",
    features: [
      "Automated Testing Frameworks",
      "Performance Testing",
      "Security Testing",
      "User Acceptance Testing",
      "Cross-browser & Cross-platform Testing"
    ]
  },
  {
    title: "Maintenance and Support",
    icon: Tool,
    description: "Round-the-clock maintenance and support services to keep your systems running smoothly and efficiently.",
    features: [
      "24/7 Technical Support",
      "Preventive Maintenance",
      "Bug Fixing & Patches",
      "Performance Optimization",
      "Security Updates"
    ]
  },
  {
    title: "Development and Enhancement",
    icon: Cpu,
    description: "Cutting-edge development services to build and enhance your applications using the latest technologies.",
    features: [
      "Custom Software Development",
      "Legacy System Enhancement",
      "API Development & Integration",
      "Cloud Migration",
      "Mobile App Development"
    ]
  },
  {
    title: "Architectural Design",
    icon: Layout,
    description: "Expert architectural design services to create scalable, robust, and efficient system architectures.",
    features: [
      "System Architecture Design",
      "Cloud Architecture",
      "Microservices Architecture",
      "Security Architecture",
      "Database Design"
    ]
  },
  {
    title: "Research and Technical Consultancy",
    icon: Search,
    description: "In-depth research and expert consultancy services to help you make informed technical decisions.",
    features: [
      "Technology Assessment",
      "Digital Transformation Strategy",
      "Technical Due Diligence",
      "Innovation Consulting",
      "Technology Roadmap Planning"
    ]
  }
];

const KeyOffering = () => {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Key Offerings</h1>
          <p className="text-lg text-gray-600">
            Comprehensive solutions tailored to transform your business and drive innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <offering.icon className="w-6 h-6 text-blue-600" />
                </div>
                
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {offering.title}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  {offering.description}
                </p>
                
                <ul className="space-y-3">
                  {offering.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + featureIndex * 0.1 }}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyOffering;