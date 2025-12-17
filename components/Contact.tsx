
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Clock, MessageSquare, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-blue-900 tracking-wide uppercase">Get in Touch</h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Ready to take your business online?</p>
            <p className="mt-4 text-xl text-slate-500">
              Message me today to start building your professional Shopify store. I'm available 24/7 to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden p-8 sm:p-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-slate-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-600 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">WhatsApp / Call</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-600 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Email Address</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-600 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Location</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-slate-100 p-3 rounded-full text-slate-600 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Working Hours</p>
                    <p className="text-lg font-bold text-slate-900">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center p-8 bg-slate-50 rounded-2xl text-center">
              <div className="bg-green-100 p-6 rounded-full mb-6">
                 <MessageSquare className="w-16 h-16 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Fastest Way to Start</h4>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Skip the long forms. Direct message on WhatsApp for instant response and personalized advice.
              </p>
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg shadow-green-200"
              >
                <MessageSquare className="w-6 h-6" />
                Message on WhatsApp
              </a>
              <p className="mt-4 text-sm text-slate-400 font-medium">No holidays — We are online 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
