import { RESTAURANT_DATA } from './restaurantData';

/**
 * Centralized Frequently Asked Questions (FAQ) Data
 */
export const FAQ_DATA = {
  tagline: 'Helpful Information',
  title: 'Frequently Asked Questions',
  hindiTitle: 'सामान्य प्रश्न एवं जानकारी',
  subtitle: 'Quick answers about our location, menu, pure vegetarian kitchen, and dining services in Bahraich.',
  items: [
    {
      id: 'faq-location',
      question: 'Where is Amritsari Chhole Kulche located in Bahraich?',
      answer: 'We are located Near Tikora Mod, Lucknow Road, Hemariya, Bahraich – 271825, Uttar Pradesh, India. You can use the Get Directions button on our website to open exact GPS coordinates in Google Maps.'
    },
    {
      id: 'faq-pure-veg',
      question: 'Is your restaurant 100% Pure Vegetarian?',
      answer: 'Yes, Amritsari Chhole Kulche is a 100% Pure Vegetarian restaurant. All kulchas, naans, Pindi Chhole, raita, and thalis are prepared in a dedicated vegetarian kitchen.'
    },
    {
      id: 'faq-fresh',
      question: 'Are the kulchas baked fresh on order?',
      answer: 'Yes, every kulcha is hand-stretched and baked fresh in our traditional clay tandoor when you order, then brushed with butter and served hot with spiced chhole and chutney.'
    },
    {
      id: 'faq-thali',
      question: 'What is included in the Special Kulcha Thali?',
      answer: 'We offer two Special Kulcha Thalis: the ₹160 Thali (Aloo Kulcha, Chhole, Fries, Boondi Raita, and Chilli Paneer) and the ₹199 Grand Feast Thali (Aloo Pyaz Mix Kulcha, Chhole, Chilli Paneer, Fries, Raita, and warm Gulab Jamun).'
    },
    {
      id: 'faq-booking',
      question: 'How can I enquire about table availability or group orders?',
      answer: `You can call us directly at ${RESTAURANT_DATA.contact.phoneDisplay} or use our WhatsApp Enquiry form on the Contact / Visit Us page for quick responses.`
    }
  ]
};

