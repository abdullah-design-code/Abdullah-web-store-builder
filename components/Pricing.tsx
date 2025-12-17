
import React from 'react';
import { PACKAGES, CONTACT_INFO } from '../constants';
import { Check, MessageSquare } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-900 tracking-wide uppercase">Packages</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Choose the right plan for your business</p>
          <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
            Affordable solutions designed to fit your specific needs and budget. Message us for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 rounded-3xl border ${
                pkg.highlight 
                ? 'border-blue-200 bg-blue-50/50 shadow-xl scale-105 z-10' 
                : 'border-slate-100 bg-white shadow-md'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-900 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.name} Store</h3>
                <p className="mt-2 text-slate-500">{pkg.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold transition-all ${
                    pkg.highlight
                    ? 'bg-blue-900 text-white hover:bg-blue-800 shadow-lg shadow-blue-200'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  Get Price Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
