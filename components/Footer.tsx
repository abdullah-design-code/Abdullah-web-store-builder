
import React from 'react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex flex-col mb-8 md:mb-0">
            <span className="text-2xl font-bold text-blue-900">
              Abdullah <span className="text-slate-500 font-medium">Web & Store</span>
            </span>
            <p className="mt-2 text-slate-500 max-w-xs">
              Professional Shopify store building services for online and Instagram sellers in Pakistan.
            </p>
          </div>
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-slate-500 hover:text-blue-900">Services</a></li>
                <li><a href="#about" className="text-slate-500 hover:text-blue-900">About Me</a></li>
                <li><a href="#pricing" className="text-slate-500 hover:text-blue-900">Pricing</a></li>
                <li><a href="#contact" className="text-slate-500 hover:text-blue-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Support</h4>
              <ul className="space-y-2 text-slate-500">
                <li>{CONTACT_INFO.location}</li>
                <li>{CONTACT_INFO.hours}</li>
                <li>{CONTACT_INFO.phone}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 text-center">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Abdullah Web & Store Builder. All rights reserved. 
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> | </span>
            Designed for growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
