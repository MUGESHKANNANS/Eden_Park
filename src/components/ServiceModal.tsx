import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    image: string;
    description: string;
    details?: {
      overview?: string;
      benefits?: string[];
      features?: string[];
      technologies?: string[];
    };
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>

              {service.details && (
                <div className="space-y-6">
                  {service.details.overview && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Overview</h3>
                      <p className="text-gray-600">{service.details.overview}</p>
                    </div>
                  )}

                  {service.details.benefits && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Key Benefits</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {service.details.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.details.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {service.details.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.details.technologies && (
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {service.details.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;