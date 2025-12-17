
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MapPin, Clock, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-900 tracking-wide uppercase">Who I Am</h2>
          <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Meet Your Store Builder</p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-0">
          <div className="p-8 lg:p-16 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Reliable. Fast. Professional.</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Hi, I'm <strong>Abdullah</strong>. I specialize in building high-converting Shopify stores for small businesses and Instagram sellers in Pakistan. Based in <strong>Hyderabad</strong>, I understand the unique challenges of our local market and local buyers.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              My mission is to help local entrepreneurs grow their businesses online by providing affordable, high-quality web solutions. I'm available <strong>24/7</strong> to ensure your business never stops.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-500">Hyderabad, Pakistan</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Availability</h4>
                  <p className="text-slate-500">24/7 – No Holidays</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Communication</h4>
                  <p className="text-slate-500">Fast & Reliable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-blue-900 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900">Target</h4>
                  <p className="text-slate-500">Instagram & Online Sellers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 p-12 lg:p-16 flex items-center justify-center text-white relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Users className="w-64 h-64" />
            </div>
            <div className="relative z-10 space-y-8 text-center lg:text-left">
              <div className="space-y-2">
                 <h4 className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Experience</h4>
                 <p className="text-3xl font-bold">Trusted by Online Sellers across Pakistan</p>
              </div>
              <div className="space-y-2">
                 <h4 className="text-blue-200 font-semibold tracking-wider uppercase text-sm">Focus</h4>
                 <p className="text-3xl font-bold">Growth-Oriented Designs for Small Businesses</p>
              </div>
              <a 
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg"
              >
                Let's Talk Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
