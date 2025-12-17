
import React from 'react';
import { 
  ShoppingBag, 
  Palette, 
  Upload, 
  Search, 
  Settings, 
  Share2,
  Clock,
  ShieldCheck,
  DollarSign,
  Smartphone,
  UserCheck
} from 'lucide-react';

export const CONTACT_INFO = {
  phone: "+92 3198285415",
  whatsapp: "https://wa.me/923198285415",
  email: "abdullahtunio.work@gmail.com",
  location: "Hyderabad, Pakistan",
  hours: "24/7 – All Days",
  whatsappText: "Message on WhatsApp to Get Your Store Online"
};

export const SERVICES = [
  {
    title: "Shopify Store Setup",
    description: "Complete technical setup of your Shopify store, including domain connection and basic configurations.",
    icon: <ShoppingBag className="w-8 h-8 text-blue-900" />
  },
  {
    title: "Online Store Design",
    description: "Premium, mobile-responsive themes customized to match your brand identity and style.",
    icon: <Palette className="w-8 h-8 text-blue-900" />
  },
  {
    title: "Product Upload & Management",
    description: "Adding your product catalog with optimized descriptions, tags, and variants.",
    icon: <Upload className="w-8 h-8 text-blue-900" />
  },
  {
    title: "SEO Optimization",
    description: "Improving your store visibility on search engines to drive organic traffic.",
    icon: <Search className="w-8 h-8 text-blue-900" />
  },
  {
    title: "Store Maintenance",
    description: "Continuous updates and troubleshooting to ensure your store runs smoothly 24/7.",
    icon: <Settings className="w-8 h-8 text-blue-900" />
  },
  {
    title: "Insta & WhatsApp Integration",
    description: "Linking your Instagram Shop and adding a WhatsApp floating button for direct sales.",
    icon: <Share2 className="w-8 h-8 text-blue-900" />
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Pakistan-based Support",
    description: "Local support from someone who understands the Pakistani market and local payment methods.",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: "24/7 Availability",
    description: "Available round the clock for emergencies or quick updates, including holidays.",
    icon: <Clock className="w-6 h-6" />
  },
  {
    title: "Affordable Pricing",
    description: "Custom packages designed to be pocket-friendly for small and medium businesses in Pakistan.",
    icon: <DollarSign className="w-6 h-6" />
  },
  {
    title: "Instagram Sellers Expert",
    description: "Proven experience helping social media sellers transition into professional e-commerce.",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "One-on-One Support",
    description: "Direct communication with Abdullah—no middlemen, just personalized service.",
    icon: <UserCheck className="w-6 h-6" />
  }
];

export const PACKAGES = [
  {
    name: "Basic",
    description: "Perfect for starting your journey.",
    features: [
      "Basic Shopify Theme Setup",
      "Up to 10 Product Uploads",
      "Essential Apps Installation",
      "WhatsApp Button Integration",
      "Standard Policy Pages"
    ]
  },
  {
    name: "Standard",
    description: "Best for growing Instagram sellers.",
    features: [
      "Premium Theme Customization",
      "Up to 50 Product Uploads",
      "Advanced SEO Optimization",
      "Social Media Integration",
      "Inventory Management Setup",
      "Order Notification Setup"
    ],
    highlight: true
  },
  {
    name: "Premium",
    description: "The complete e-commerce solution.",
    features: [
      "Fully Custom Professional Design",
      "Unlimited Product Uploads",
      "Speed Optimization",
      "Marketing App Integration",
      "1-Month Maintenance Support",
      "Custom Graphic Design for Banners"
    ]
  }
];
