
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';

const WhyChoose: React.FC = () => {
  return (
    <div className="py-24 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-base font-semibold text-blue-300 tracking-wide uppercase">Why Choose Me</h2>
            <p className="mt-2 text-3xl font-extrabold sm:text-4xl">Local Expertise, Global Standards</p>
            <p className="mt-6 text-lg text-blue-100 leading-relaxed">
              We aren't just developers—we are partners in your growth. Our services are designed specifically for the needs of Pakistani entrepreneurs selling on Instagram and web platforms.
            </p>
            
            <div className="mt-12 space-y-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-blue-800 p-3 rounded-xl text-blue-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-blue-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
             <div className="bg-white/10 backdrop-blur-lg p-8 sm:p-12 rounded-3xl border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Our Promise to You</h3>
                <ul className="space-y-4">
                  {[
                    "No hidden charges—transparent pricing.",
                    "Complete ownership of your store and domain.",
                    "Quick turnaround time (most stores live in 3-5 days).",
                    "Dedicated support even after launch.",
                    "Optimized for high performance on mobile devices."
                  ].map((promise, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                      <span className="text-blue-100">{promise}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/10">
                   <p className="italic text-blue-100 text-lg">
                     "Abdullah helped me move my Instagram business to Shopify smoothly. Sales increased because customers trusted my website!"
                   </p>
                   <p className="mt-4 font-bold text-white">— Local Fashion Brand Seller</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
