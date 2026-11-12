const fs = require('fs');
const path = require('path');

// Helper to generate an elegant culinary SVG placeholder
function generateCulinarySvg(title, subtitle, price, badge = 'Amritsari Tandoor') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2D1711"/>
      <stop offset="50%" stop-color="#1A0D09"/>
      <stop offset="100%" stop-color="#120805"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#D4A441" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#D4A441" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="plate" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ECC970"/>
      <stop offset="45%" stop-color="#D4A441"/>
      <stop offset="100%" stop-color="#8C661D"/>
    </linearGradient>
    <linearGradient id="kulcha" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5CE85"/>
      <stop offset="40%" stop-color="#DF9E4B"/>
      <stop offset="85%" stop-color="#B87322"/>
      <stop offset="100%" stop-color="#542B0A"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="800" height="500" fill="url(#bg)"/>
  
  <!-- Subtle Punjabi traditional diamond motif grid -->
  <g opacity="0.08" stroke="#D4A441" stroke-width="1" fill="none">
    <path d="M0,0 L800,500 M0,500 L800,0 M400,0 L800,250 L400,500 L0,250 Z"/>
    <circle cx="400" cy="250" r="220"/>
  </g>

  <!-- Center Ambient Glow -->
  <circle cx="400" cy="230" r="220" fill="url(#glow)"/>

  <!-- Traditional Brass Plate (Thali) -->
  <circle cx="400" cy="230" r="165" fill="url(#plate)" filter="url(#shadow)"/>
  <circle cx="400" cy="230" r="150" fill="#241710" stroke="#ECC970" stroke-width="3"/>
  <circle cx="400" cy="230" r="142" fill="none" stroke="#A87B22" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- Golden Roasted Amritsari Kulcha -->
  <ellipse cx="400" cy="230" rx="120" ry="110" fill="url(#kulcha)" filter="url(#shadow)"/>
  
  <!-- Tandoor Blisters & Char Marks -->
  <ellipse cx="360" cy="190" rx="18" ry="12" fill="#2D170B" opacity="0.85"/>
  <ellipse cx="440" cy="210" rx="22" ry="14" fill="#3D1D0E" opacity="0.8"/>
  <ellipse cx="380" cy="265" rx="25" ry="16" fill="#251208" opacity="0.75"/>
  <ellipse cx="430" cy="275" rx="16" ry="10" fill="#442111" opacity="0.8"/>
  <circle cx="340" cy="230" r="8" fill="#1C0C05" opacity="0.9"/>

  <!-- Fresh Green Coriander Specks -->
  <rect x="375" y="195" width="6" height="4" rx="2" fill="#2C6B2F" transform="rotate(25 375 195)"/>
  <rect x="420" y="240" width="7" height="3" rx="1.5" fill="#387B32" transform="rotate(-30 420 240)"/>
  <rect x="350" y="250" width="5" height="4" rx="2" fill="#2C6B2F" transform="rotate(40 350 250)"/>
  <rect x="445" y="185" width="6" height="3" rx="1.5" fill="#387B32" transform="rotate(15 445 185)"/>

  <!-- Melting Desi Butter Dollop -->
  <ellipse cx="400" cy="225" rx="22" ry="14" fill="#FFCA28" filter="url(#shadow)"/>
  <ellipse cx="396" cy="222" rx="14" ry="7" fill="#FFF176" opacity="0.8"/>

  <!-- Card Information Header / Badge -->
  <g transform="translate(40, 42)">
    <rect width="180" height="28" rx="14" fill="#6F1717" stroke="#D4A441" stroke-width="1.5"/>
    <text x="90" y="18" fill="#F8F1E5" font-family="'Cinzel', serif" font-size="11" font-weight="bold" letter-spacing="1.5" text-anchor="middle">${badge.toUpperCase()}</text>
  </g>

  ${price ? `
  <!-- Price Pill -->
  <g transform="translate(660, 36)">
    <rect width="100" height="38" rx="19" fill="#D4A441" filter="url(#shadow)"/>
    <text x="50" y="24" fill="#211A16" font-family="'Cinzel', serif" font-size="18" font-weight="900" text-anchor="middle">₹${price}</text>
  </g>` : ''}

  <!-- Dish Title Overlay -->
  <g transform="translate(400, 435)">
    <text x="0" y="0" fill="#F8F1E5" font-family="'Playfair Display', serif" font-size="28" font-weight="bold" letter-spacing="0.5" text-anchor="middle">${title}</text>
    <text x="0" y="26" fill="#D4A441" font-family="'Outfit', sans-serif" font-size="14" font-weight="500" letter-spacing="1" text-anchor="middle">${subtitle}</text>
  </g>
</svg>`;
}

const menuItems = [
  { file: 'aloo-kulcha.jpg', title: 'Aloo Kulcha', sub: 'Traditional Spiced Potato • Clay Tandoor', price: 50 },
  { file: 'aloo-matar-kulcha.jpg', title: 'Aloo Matar Kulcha', sub: 'Spiced Potatoes & Garden Green Peas', price: 60 },
  { file: 'pyaz-kulcha.jpg', title: 'Pyaz Kulcha', sub: 'Crunchy Spiced Red Onions & Ajwain', price: 60 },
  { file: 'gobhi-kulcha.jpg', title: 'Gobhi Kulcha', sub: 'Grated Fresh Cauliflower & Ginger', price: 60 },
  { file: 'aloo-methi-kulcha.jpg', title: 'Aloo Methi Kulcha', sub: 'Fragrant Fenugreek Leaves & Potatoes', price: 60 },
  { file: 'stuff-naan.jpg', title: 'Stuff Naan', sub: 'Leavened Tandoori Bread with Veg Filling', price: 60 },
  { file: 'mix-veg-kulcha.jpg', title: 'Mix Veg Kulcha', sub: 'Cauliflower, Peas, Carrots & Potatoes', price: 65 },
  { file: 'chur-chur-naan.jpg', title: 'Chur-Chur Naan', sub: 'Crushed Flaky Layers with Desi Makhan', price: 60 },
  { file: 'bhujia-kulcha.jpg', title: 'Bhujia Kulcha', sub: 'Crispy Spiced Besan Bhujia & Onion', price: 60 },
  { file: 'moong-dal-kulcha.jpg', title: 'Moong Dal Kulcha', sub: 'Slow-Roasted Moong Lentils & Hing', price: 60 },
  { file: 'ajari-kulcha.jpg', title: 'Ajari Kulcha', sub: 'Special Regional Spice Blend', price: 60 },
  { file: 'paneer-kulcha.jpg', title: 'Paneer Kulcha', sub: 'Crumbled Fresh Cottage Cheese & Herbs', price: 70 },
  { file: 'matar-paneer-kulcha.jpg', title: 'Matar Paneer Kulcha', sub: 'Paneer, Peas & Punjabi Garam Masala', price: 75 },
  { file: 'besan-kulcha.jpg', title: 'Besan Kulcha', sub: 'Roasted Gram Flour & Pickle Spices', price: 70 },
  { file: 'mushroom-kulcha.jpg', title: 'Mushroom Kulcha', sub: 'Fresh Sautéed Mushrooms & Black Pepper', price: 70 },
  { file: 'matar-mushroom-kulcha.jpg', title: 'Matar Mushroom Kulcha', sub: 'Tender Peas, Mushrooms & Butter', price: 80 },
  { file: 'aloo-cheese-kulcha.jpg', title: 'Aloo Cheese Kulcha', sub: 'Spiced Potatoes with Melty Mozzarella', price: 80 },
  { file: 'cheese-kulcha.jpg', title: 'Cheese Kulcha', sub: 'Gooey Cheddar & Mozzarella Cheese Pull', price: 95 },
  { file: 'jumbo-kulcha.jpg', title: 'Jumbo Kulcha', sub: 'King-Size Stuffed Kulcha with Extra Butter', price: 80 },
  { file: 'aata-kulcha.jpg', title: 'Aata Kulcha', sub: '100% Whole Wheat Clay Tandoor Kulcha', price: 65 },
  { file: 'plain-naan.jpg', title: 'Plain Naan', sub: 'Classic Tandoori Butter Naan', price: 40 },
  { file: 'chilli-paneer-combo.jpg', title: 'Chilli Paneer Combo', sub: 'Chilli Paneer + Fried Rice + Noodles', price: 149 },
  { file: 'special-thali-160.jpg', title: 'Special Kulcha Thali (₹160)', sub: '1 Aloo Kulcha, Chhole, Fries, Raita, Chilli Paneer', price: 160 },
  { file: 'special-thali-199.jpg', title: 'Royal Kulcha Thali (₹199)', sub: 'Aloo Pyaz Kulcha, Chhole, Chilli Paneer, Fries, Raita, Gulab Jamun', price: 199 }
];

const menuDir = path.join(__dirname, '..', 'public', 'images', 'menu');
if (!fs.existsSync(menuDir)) {
  fs.mkdirSync(menuDir, { recursive: true });
}

menuItems.forEach(item => {
  const filePath = path.join(menuDir, item.file);
  const svgContent = generateCulinarySvg(item.title, item.sub, item.price, 'Royal Recipe');
  fs.writeFileSync(filePath, svgContent);
});

console.log(`Generated ${menuItems.length} menu image assets in: ${menuDir}`);

// Also generate the 4 food gallery placeholders if not present
const galleryDir = path.join(__dirname, '..', 'public', 'images', 'gallery');
const galleryFoodItems = [
  { file: 'food-kulcha.jpg', title: 'Royal Amritsari Kulcha', sub: 'Crispy Layers & Melting Desi Ghee', badge: 'Signature Dish' },
  { file: 'chhole.jpg', title: 'Slow-Cooked Amritsari Chhole', sub: 'Pindi-Style Spiced Chickpeas & Anardana', badge: 'Authentic Gravy' },
  { file: 'special-thali.jpg', title: 'Special Grand Punjabi Thali', sub: 'Complete Royal Feast with Kulcha & Sweets', badge: 'Grand Thali' },
  { file: 'tandoor-preparation.jpg', title: 'Art of the Clay Tandoor', sub: 'Hand-Stretched & Charcoal Baked', badge: 'Tandoor Craft' }
];

galleryFoodItems.forEach(item => {
  const filePath = path.join(galleryDir, item.file);
  if (!fs.existsSync(filePath)) {
    const svgContent = generateCulinarySvg(item.title, item.sub, null, item.badge);
    fs.writeFileSync(filePath, svgContent);
  }
});

console.log('Gallery food placeholders successfully prepared!');

