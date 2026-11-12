/**
 * Official Menu Data for Amritsari Chhole Kulche
 * All items, categories, and prices are exactly as provided.
 * Image placeholders are dedicated per dish for future photography updates.
 */

export const MENU_CATEGORIES = [
  { id: 'all', name: 'Full Royal Menu', hindiName: 'संपूर्ण मेनू' },
  { id: 'kulcha-naan', name: 'Kulcha & Naan', hindiName: 'कुलचा और नान' },
  { id: 'special-combos', name: 'Special Combos', hindiName: 'स्पेशल कॉम्बो' },
  { id: 'special-thali', name: 'Special Kulcha Thali', hindiName: 'शाही कुलचा थाली' }
];

export const MENU_ITEMS = [
  // --- CATEGORY A: KULCHA & NAAN ---
  {
    id: 'aloo-kulcha',
    name: 'Aloo Kulcha',
    hindiName: 'आलू कुलचा',
    category: 'kulcha-naan',
    price: 50,
    isPopular: true,
    description: 'Crispy clay-tandoor baked bread stuffed with spiced mashed potatoes, roasted pomegranate seeds (anardana), and topped with fresh coriander & butter.',
    image: '/images/menu/aloo-kulcha.jpg'
  },
  {
    id: 'aloo-matar-kulcha',
    name: 'Aloo Matar Kulcha',
    hindiName: 'आलू मटर कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Classic potato stuffing blended with tender green garden peas and hand-ground garam masala for a wholesome bite.',
    image: '/images/menu/aloo-matar-kulcha.jpg'
  },
  {
    id: 'pyaz-kulcha',
    name: 'Pyaz Kulcha',
    hindiName: 'प्याज़ कुलcha',
    category: 'kulcha-naan',
    price: 60,
    isPopular: true,
    description: 'Crisp, sweet red onions spiced with green chillies, carom seeds (ajwain), and freshly roasted Punjabi herbs.',
    image: '/images/menu/pyaz-kulcha.jpg'
  },
  {
    id: 'gobhi-kulcha',
    name: 'Gobhi Kulcha',
    hindiName: 'गोभी कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Finely grated fresh cauliflower delicately seasoned with ginger, green chillies, and aromatic roasted cumin.',
    image: '/images/menu/gobhi-kulcha.jpg'
  },
  {
    id: 'aloo-methi-kulcha',
    name: 'Aloo Methi Kulcha',
    hindiName: 'आलू मेथी कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Fragrant fresh fenugreek leaves folded into hearty spiced potatoes for an authentic Punjabi winter delicacy.',
    image: '/images/menu/aloo-methi-kulcha.jpg'
  },
  {
    id: 'stuff-naan',
    name: 'Stuff Naan',
    hindiName: 'स्टफ्ड नान',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Soft tandoori leavened flatbread stuffed with mildly spiced seasonal vegetables and herbs.',
    image: '/images/menu/stuff-naan.jpg'
  },
  {
    id: 'mix-veg-kulcha',
    name: 'Mix Veg Kulcha',
    hindiName: 'मिक्स वेज कुलचा',
    category: 'kulcha-naan',
    price: 65,
    isPopular: true,
    description: 'A colorful blend of potatoes, cauliflower, carrots, peas, and fresh herbs stuffed into golden crispy layers.',
    image: '/images/menu/mix-veg-kulcha.jpg'
  },
  {
    id: 'chur-chur-naan',
    name: 'Chur-Chur Naan',
    hindiName: 'चूर-चूर नान',
    category: 'kulcha-naan',
    price: 60,
    isPopular: true,
    description: 'Super flaky, multi-layered tandoori bread crushed by hand with generous dollops of pure desi makhan.',
    image: '/images/menu/chur-chur-naan.jpg'
  },
  {
    id: 'bhujia-kulcha',
    name: 'Bhujia Kulcha',
    hindiName: 'भुजिया कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Unique savory crunch of spiced besan bhujia blended with onions, coriander, and tandoori spices.',
    image: '/images/menu/bhujia-kulcha.jpg'
  },
  {
    id: 'moong-dal-kulcha',
    name: 'Moong Dal Kulcha',
    hindiName: 'मूंग दाल कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Slow-roasted spiced yellow moong lentil filling with hing and ginger notes inside a crisp baked crust.',
    image: '/images/menu/moong-dal-kulcha.jpg'
  },
  {
    id: 'ajari-kulcha',
    name: 'Ajari Kulcha',
    hindiName: 'अजारी कुलचा',
    category: 'kulcha-naan',
    price: 60,
    isPopular: false,
    description: 'Signature spiced preparation made with special regional herbs and roasted grain mix.',
    image: '/images/menu/ajari-kulcha.jpg'
  },
  {
    id: 'paneer-kulcha',
    name: 'Paneer Kulcha',
    hindiName: 'पनीर कुलचा',
    category: 'kulcha-naan',
    price: 70,
    isPopular: true,
    description: 'Rich, crumbled fresh cottage cheese mixed with green chillies, mint, coriander, and royal Punjabi garam masala.',
    image: '/images/menu/paneer-kulcha.jpg'
  },
  {
    id: 'matar-paneer-kulcha',
    name: 'Matar Paneer Kulcha',
    hindiName: 'मटर पनीर कुलचा',
    category: 'kulcha-naan',
    price: 75,
    isPopular: false,
    description: 'Fresh paneer and sweet green peas seasoned with cracked pepper, kasuri methi, and butter.',
    image: '/images/menu/matar-paneer-kulcha.jpg'
  },
  {
    id: 'besan-kulcha',
    name: 'Besan Kulcha',
    hindiName: 'बेसन कुलचा',
    category: 'kulcha-naan',
    price: 70,
    isPopular: false,
    description: 'Aromatic roasted gram flour tempered with carom seeds, chopped onions, and Punjabi pickle spices.',
    image: '/images/menu/besan-kulcha.jpg'
  },
  {
    id: 'mushroom-kulcha',
    name: 'Mushroom Kulcha',
    hindiName: 'मशरूम कुलचा',
    category: 'kulcha-naan',
    price: 70,
    isPopular: false,
    description: 'Sautéed fresh button mushrooms infused with black pepper, garlic, and savory spices in crispy dough.',
    image: '/images/menu/mushroom-kulcha.jpg'
  },
  {
    id: 'matar-mushroom-kulcha',
    name: 'Matar Mushroom Kulcha',
    hindiName: 'मटर मशरूम कुलचा',
    category: 'kulcha-naan',
    price: 80,
    isPopular: false,
    description: 'Juicy mushrooms paired with sweet green peas and royal tandoor seasoning.',
    image: '/images/menu/matar-mushroom-kulcha.jpg'
  },
  {
    id: 'aloo-cheese-kulcha',
    name: 'Aloo Cheese Kulcha',
    hindiName: 'आलू चीज़ कुलचा',
    category: 'kulcha-naan',
    price: 80,
    isPopular: true,
    description: 'Melt-in-mouth golden cheese paired with spiced Amritsari potato stuffing for the ultimate cheesy pull.',
    image: '/images/menu/aloo-cheese-kulcha.jpg'
  },
  {
    id: 'cheese-kulcha',
    name: 'Cheese Kulcha',
    hindiName: 'चीज़ कुलचा',
    category: 'kulcha-naan',
    price: 95,
    isPopular: true,
    description: 'Loaded with premium mozzarella and cheddar cheese blend, cracked black pepper, and herbs inside a crispy shell.',
    image: '/images/menu/cheese-kulcha.jpg'
  },
  {
    id: 'jumbo-kulcha',
    name: 'Jumbo Kulcha',
    hindiName: 'जंबो कुलचा',
    category: 'kulcha-naan',
    price: 80,
    isPopular: true,
    description: 'Extra-large signature kulcha loaded with double portion stuffing, extra butter glaze, and golden blistered crust.',
    image: '/images/menu/jumbo-kulcha.jpg'
  },
  {
    id: 'aata-kulcha',
    name: 'Aata Kulcha',
    hindiName: 'आटा कुलचा',
    category: 'kulcha-naan',
    price: 65,
    isPopular: false,
    description: 'Wholesome 100% whole wheat tandoor baked kulcha, light, nutritious and packed with rich spiced filling.',
    image: '/images/menu/aata-kulcha.jpg'
  },
  {
    id: 'plain-naan',
    name: 'Plain Naan',
    hindiName: 'प्लेन नान',
    category: 'kulcha-naan',
    price: 40,
    isPopular: false,
    description: 'Classic soft tandoori naan brushed with butter, the perfect accompaniment to spicy chhole.',
    image: '/images/menu/plain-naan.jpg'
  },

  // --- CATEGORY B: SPECIAL COMBOS ---
  {
    id: 'combo-chilli-paneer-rice-noodles',
    name: 'Chilli Paneer + Fried Rice + Noodles',
    hindiName: 'चिल्ली पनीर + फ्राइड राइस + नूडल्स कॉम्बो',
    category: 'special-combos',
    price: 149,
    isPopular: true,
    description: 'Indo-Chinese fusion feast featuring wok-tossed crispy Chilli Paneer, fragrant Vegetable Fried Rice, and Hakka Noodles.',
    image: '/images/menu/chilli-paneer-combo.jpg'
  },

  // --- CATEGORY C: SPECIAL KULCHA THALI ---
  {
    id: 'special-kulcha-thali-160',
    name: 'Special Kulcha Thali',
    hindiName: 'स्पेशल कुलचा थाली (₹160)',
    category: 'special-thali',
    price: 160,
    isPopular: true,
    description: 'Complete royal meal: 1 Aloo Kulcha, rich slow-cooked Chhole, crispy French Fries, chilled seasoned Boondi Raita, and wok-tossed Chilli Paneer.',
    includes: [
      '1 Aloo Kulcha',
      'Authentic Amritsari Chhole',
      'Crispy Fries',
      'Chilled Boondi Raita',
      'Chilli Paneer'
    ],
    image: '/images/menu/special-thali-160.jpg'
  },
  {
    id: 'special-kulcha-thali-199',
    name: 'Special Kulcha Thali (Grand Feast)',
    hindiName: 'रॉयल कुलचा थाली (₹199)',
    category: 'special-thali',
    price: 199,
    isPopular: true,
    description: 'The ultimate royal Punjabi experience: 1 Aloo Pyaz Mix Kulcha, Chhole, Chilli Paneer, Fries, Raita, and a melt-in-mouth hot Gulab Jamun.',
    includes: [
      '1 Aloo Pyaz Mix Kulcha',
      'Amritsari Chhole',
      'Chilli Paneer',
      'Crispy Fries',
      'Chilled Raita',
      'Warm Gulab Jamun'
    ],
    image: '/images/menu/special-thali-199.jpg'
  }
];

/**
 * Featured 4-card Special Menu for the Homepage
 */
export const HOME_SPECIAL_MENU = [
  {
    id: 'aloo-kulcha',
    name: 'Aloo Kulcha',
    hindiName: 'आलू कुलचा',
    price: '₹50',
    badge: 'Bestseller',
    description: 'Crispy clay-tandoor kulcha stuffed with spiced mashed potatoes, anardana, and topped with pure desi butter.',
    image: '/images/menu/aloo-kulcha.jpg',
    alt: 'Crispy Amritsari Aloo Kulcha with desi butter'
  },
  {
    id: 'paneer-kulcha',
    name: 'Paneer Kulcha',
    hindiName: 'पनीर कुलचा',
    price: '₹70',
    badge: 'Chef Special',
    description: 'Rich crumbled cottage cheese blended with fresh coriander, green chillies, and aromatic Punjabi spices.',
    image: '/images/menu/paneer-kulcha.jpg',
    alt: 'Golden Amritsari Paneer Kulcha'
  },
  {
    id: 'mix-veg-kulcha',
    name: 'Mix Kulcha',
    hindiName: 'मिक्स कुलचा',
    price: '₹65',
    badge: 'Popular',
    description: 'Flaky multi-layered kulcha loaded with a savory medley of seasonal vegetables, potatoes, peas, and herbs.',
    image: '/images/menu/mix-veg-kulcha.jpg',
    alt: 'Amritsari Mix Veg Kulcha'
  },
  {
    id: 'chhole-plate',
    name: 'Chhole Plate',
    hindiName: 'अमृतसरी छोले प्लेट',
    price: 'House Special',
    badge: 'Authentic Recipe',
    description: 'Slow-cooked dark Pindi Chhole simmered with pomegranate seeds, ginger juliennes, and traditional spices.',
    image: '/images/gallery/chhole.jpg',
    alt: 'Authentic Amritsari Pindi Chhole Plate'
  }
];

