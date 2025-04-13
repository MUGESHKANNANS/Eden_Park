import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from '../components/ServiceModal';

const services = {
  erp: {
    title: "ERP Solutions",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    description: "Comprehensive enterprise resource planning solutions to streamline your business operations.",
    details: {
      overview: "Our ERP solutions provide end-to-end business management capabilities, integrating all core processes into a single system.",
      benefits: [
        "Improved operational efficiency",
        "Real-time data access",
        "Enhanced decision making",
        "Reduced operational costs",
        "Better resource management"
      ],
      features: [
        "Financial management",
        "Supply chain optimization",
        "Human resource management",
        "Customer relationship management",
        "Business intelligence"
      ],
      technologies: [
        "SAP", "Oracle", "Microsoft Dynamics", "NetSuite", "Odoo"
      ]
    }
  },
  web: {
    title: "Web Development",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    description: "Custom web applications and solutions built with cutting-edge technologies.",
    details: {
      overview: "We create modern, scalable, and secure web applications that help businesses achieve their digital transformation goals.",
      benefits: [
        "Enhanced online presence",
        "Improved user engagement",
        "Increased conversion rates",
        "Better customer experience",
        "Mobile-first design"
      ],
      features: [
        "Progressive Web Apps",
        "E-commerce solutions",
        "Content Management Systems",
        "Custom web applications",
        "API development"
      ],
      technologies: [
        "React", "Vue.js", "Node.js", "Python", "AWS", "Docker"
      ]
    }
  },
  testing: {
    title: "Testing Services",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    subServices: [
      {
        title: "Testing Consultants",
        description: "Expert guidance for your testing needs",
        details: {
          overview: "Our testing consultants provide strategic guidance and best practices for implementing effective testing processes.",
          benefits: [
            "Optimized testing strategy",
            "Reduced testing costs",
            "Improved quality assurance",
            "Faster time-to-market",
            "Risk mitigation"
          ]
        }
      },
      {
        title: "Functional Testing",
        description: "Ensure your applications work as intended",
        details: {
          overview: "Comprehensive functional testing services to verify that your applications meet all specified requirements.",
          features: [
            "Unit testing",
            "Integration testing",
            "System testing",
            "User acceptance testing",
            "Regression testing"
          ]
        }
      },
      {
        title: "Performance Testing",
        description: "Optimize for speed and reliability",
        details: {
          overview: "Advanced performance testing to ensure your applications can handle expected loads and beyond.",
          technologies: [
            "JMeter", "LoadRunner", "Gatling", "K6", "Apache Bench"
          ]
        }
      },
      {
        title: "Security Testing",
        description: "Protect your applications from threats",
        details: {
          overview: "Comprehensive security testing to identify and address potential vulnerabilities in your applications.",
          features: [
            "Penetration testing",
            "Vulnerability assessment",
            "Security code review",
            "Compliance testing",
            "Risk assessment"
          ]
        }
      }
    ]
  }
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Our Services
      </motion.h1>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* ERP and Web Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[services.erp, services.web].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testing Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <img
            src={services.testing.image}
            alt="Testing Services"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Testing Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.testing.subServices.map((subService, index) => (
                <motion.div
                  key={subService.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-white rounded-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedService(subService)}
                >
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {subService.title}
                  </h3>
                  <p className="text-blue-700">
                    {subService.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default Services;