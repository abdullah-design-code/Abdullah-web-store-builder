
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MessageSquare, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Professional Shopify Stores for</span>
              <span className="block text-blue-900 mt-2">Online Sellers in Pakistan</span>
            </h1>
            <p className="mt-6 text-lg text-slate-500 sm:text-xl lg:text-lg xl:text-xl leading-relaxed">
              We help Instagram and online sellers launch fast, secure, and professional online stores. Get a platform that works for you and your customers, designed by experts based in Pakistan.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-green-500 hover:bg-green-600 shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 w-full sm:w-auto gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                Start My Store on WhatsApp
              </a>
              <a
                href="#services"
                className="mt-3 sm:mt-0 inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 transition-all w-full sm:w-auto"
              >
                View Services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium text-slate-500 justify-center lg:justify-start">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Available 24/7
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              <span>Based in Hyderabad</span>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5 relative">
            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden bg-slate-100 aspect-video lg:aspect-square flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent"></div>
               <Layout className="w-32 h-32 text-blue-900/20 group-hover:scale-110 transition-transform duration-500" />
               <img 
                 src="https://picsum.photos/seed/shopify/800/800" 
                 alt="E-commerce mockup" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
