
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-900 tracking-wide uppercase">Our Expertise</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Everything you need to sell online</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
            Professional Shopify and web building services tailored for the Pakistani market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, {
                  className: "w-8 h-8 transition-colors duration-300 group-hover:text-white"
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
