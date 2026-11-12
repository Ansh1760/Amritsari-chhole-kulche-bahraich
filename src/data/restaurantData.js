/**
 * Restaurant Business Information & Editorial Content
 * Contains verified details for Amritsari Chhole Kulche in Bahraich, Uttar Pradesh.
 * All fields are centralized and editable for quick updates.
 */

const env = import.meta.env || {};

const contactPhone = env.VITE_CONTACT_PHONE || '9721204065';
const whatsappNumber = env.VITE_WHATSAPP_NUMBER || '919721204065';
const whatsappLink = env.VITE_WHATSAPP_LINK || 'https://wa.me/919721204665';
const geoLatitude = Number(env.VITE_GEO_LATITUDE) || 27.5400683;
const geoLongitude = Number(env.VITE_GEO_LONGITUDE) || 81.571983;

export const RESTAURANT_DATA = {
  name: env.VITE_APP_NAME || "Amritsari Chhole Kulche",
  tagline: "The Royal Taste of Amritsar",
  subTagline: "Authentic Amritsari Chhole Kulche, Bringing Punjabi Flavours to Bahraich.",
  description: "Experience the legendary taste of authentic Amritsari clay tandoor kulchas, brushed with rich desi makhan, served with dark spiced pindi chhole and chilled seasoned raita in a royal, air-conditioned family dining ambience.",

  address: {
    line1: "Near Tikora Mod, Lucknow Road",
    area: "Hemariya",
    city: "Bahraich",
    pincode: "271825",
    state: "Uttar Pradesh",
    country: "India",
    full: "Near Tikora Mod, Lucknow Road, Hemariya, Bahraich – 271825, Uttar Pradesh, India."
  },

  contact: {
    phone: contactPhone,
    phoneDisplay: contactPhone,
    phoneTel: `tel:+91${contactPhone}`,
    whatsappNumber,
    whatsappLink
  },

  geo: {
    latitude: geoLatitude,
    longitude: geoLongitude,
    googleMapsUrl:
      env.VITE_GOOGLE_MAPS_URL ||
      `https://www.google.com/maps/search/?api=1&query=${geoLatitude},${geoLongitude}`,
    embedUrl:
      env.VITE_GOOGLE_MAPS_EMBED_URL ||
      `https://maps.google.com/maps?q=${geoLatitude},${geoLongitude}&hl=en&z=16&output=embed`
  },

  // Centralized Hero Section Content
  hero: {
    badge: "Authentic Punjabi Clay Tandoor",
    title: "The Royal Taste of Amritsar",
    hindiTitle: "शाही स्वाद • प्रामाणिक अमृतसरी कुलचे",
    subtitle: "Authentic Amritsari Chhole Kulche, Bringing Punjabi Flavours to Bahraich.",
    ctaMenu: "Explore Our Menu",
    ctaStory: "Discover Our Story",
    emotionTitle: "More Than Food. It’s An Emotion.",
    emotionSubtitle: "Every bite brings the authentic warmth of Punjab, the richness of tradition and the love of freshly prepared Amritsari flavours."
  },

  // Centralized Story Section Content
  story: {
    badge: "Our Culinary Roots",
    title: "MADE WITH TRADITION. SERVED WITH LOVE.",
    hindiTitle: "परंपरा से निर्मित • प्रेम से परोसा गया",
    subtitle: "A genuine dedication to authentic Amritsari tandoori flatbreads, rich pindi chhole, and warm northern hospitality in the heart of Bahraich.",
    quote: "A Kulcha Is Only As Good As The Clay It Touches",
    quoteSubtitle: "No tawa, no microwave shortcuts. Every single kulcha is stretched fresh by hand, layered with spiced stuffing, and baked against glowing charcoal embers in our live tandoor."
  },

  // Verified & editable service hours
  hours: [
    { days: "Monday – Saturday", time: "09:00 AM – 10:30 PM", status: "Fresh Clay Tandoor Service" },
    { days: "Sunday", time: "08:30 AM – 11:00 PM", status: "Weekend Special Thali" }
  ],

  features: [
    {
      title: "Authentic Clay Tandoor",
      description: "Baked at searing high temperatures in traditional clay ovens for quintessential crispness and flaky layers."
    },
    {
      title: "Desi Ghee & Makhan",
      description: "Generously brushed with pure melted butter, crushed coriander seeds, and Punjabi spice blends."
    },
    {
      title: "Slow-Cooked Amritsari Chhole",
      description: "Pindi-style spiced chickpeas simmered with whole anardana, amchoor, and secret aromatic masala."
    },
    {
      title: "Family Dining Ambience",
      description: "Air-conditioned premium seating featuring signature golden horse mural and private curtained booths."
    }
  ]
};
