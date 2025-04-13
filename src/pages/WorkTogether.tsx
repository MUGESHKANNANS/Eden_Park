import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from '../components/ServiceModal';

const services = [
  {
    title: "Application Development and Maintenance",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    description: "We build and maintain cutting-edge applications that drive business growth and innovation.",
    details: {
      overview: "Our comprehensive application development and maintenance services cover the entire software lifecycle, from initial concept to ongoing support and enhancement.",
      benefits: [
        "Reduced time-to-market",
        "Cost-effective development",
        "Scalable solutions",
        "Enhanced user experience",
        "Continuous improvement"
      ],
      features: [
        "Custom application development",
        "Legacy application modernization",
        "Application integration",
        "Quality assurance and testing",
        "24/7 maintenance and support"
      ],
      technologies: [
        "React", "Node.js", "Python", "Java", "AWS", "Azure", "Docker", "Kubernetes"
      ]
    }
  },
  {
    title: "Product Engineering",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    description: "Transform your ideas into market-ready products with our expert engineering solutions.",
    details: {
      overview: "Our product engineering services help businesses transform innovative ideas into successful products through a systematic approach to design, development, and deployment.",
      benefits: [
        "Faster product development",
        "Market-fit validation",
        "Technical excellence",
        "Competitive advantage",
        "Scalable architecture"
      ],
      features: [
        "Product strategy and roadmap",
        "UI/UX design",
        "MVP development",
        "Product scaling",
        "Performance optimization"
      ],
      technologies: [
        "Flutter", "React Native", "Vue.js", "Angular", "MongoDB", "PostgreSQL"
      ]
    }
  },
  {
    title: "Independent Testing",
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28",
    description: "Ensure quality and reliability with our comprehensive testing services.",
    details: {
      overview: "Our independent testing services ensure your applications meet the highest standards of quality, security, and performance through comprehensive testing methodologies.",
      benefits: [
        "Improved software quality",
        "Reduced production issues",
        "Faster time-to-market",
        "Cost savings",
        "Enhanced user satisfaction"
      ],
      features: [
        "Automated testing",
        "Performance testing",
        "Security testing",
        "Mobile testing",
        "API testing"
      ],
      technologies: [
        "Selenium", "JUnit", "Jest", "Cypress", "JMeter", "LoadRunner"
      ]
    }
  },
  {
    title: "Business Process Management",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    description: "Optimize your operations with our advanced process management solutions.",
    details: {
      overview: "Our BPM solutions help organizations streamline their operations, improve efficiency, and achieve better business outcomes through process optimization and automation.",
      benefits: [
        "Improved operational efficiency",
        "Reduced costs",
        "Better decision making",
        "Enhanced compliance",
        "Increased agility"
      ],
      features: [
        "Process analysis and design",
        "Workflow automation",
        "Process monitoring",
        "Performance analytics",
        "Integration services"
      ],
      technologies: [
        "Camunda", "Bonita", "Appian", "Power Automate", "UiPath"
      ]
    }
  },
  {
    title: "Systems Integration",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    description: "Seamlessly connect your systems for enhanced efficiency and productivity.",
    details: {
      overview: "Our systems integration services help businesses connect disparate systems and applications to create a unified, efficient technology ecosystem.",
      benefits: [
        "Improved data flow",
        "Enhanced productivity",
        "Reduced manual effort",
        "Better decision making",
        "Increased ROI"
      ],
      features: [
        "API development",
        "Middleware integration",
        "Cloud integration",
        "Data synchronization",
        "Legacy system integration"
      ],
      technologies: [
        "MuleSoft", "Apache Camel", "Dell Boomi", "Zapier", "REST APIs"
      ]
    }
  },
  {
    title: "Business Analytics & Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Make data-driven decisions with our powerful analytics solutions.",
    details: {
      overview: "Our business analytics services help organizations harness the power of data to gain valuable insights and make informed business decisions.",
      benefits: [
        "Data-driven decision making",
        "Improved forecasting",
        "Real-time insights",
        "Competitive advantage",
        "Risk mitigation"
      ],
      features: [
        "Data visualization",
        "Predictive analytics",
        "Real-time reporting",
        "Custom dashboards",
        "Machine learning models"
      ],
      technologies: [
        "Tableau", "Power BI", "Python", "R", "TensorFlow", "scikit-learn"
      ]
    }
  }
];

const WorkTogether = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-900 mb-12"
      >
        Let's Work Together
      </motion.h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedService(service)}
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
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

export default WorkTogether;