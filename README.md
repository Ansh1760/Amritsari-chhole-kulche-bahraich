# AMRITSARI CHHOLE KULCHE – PREMIUM LUXURY 3D RESTAURANT WEBSITE

> **"The Royal Taste of Amritsar" — Located in Bahraich, Uttar Pradesh, India.**  
> A cinematic, responsive, frontend-only restaurant web application featuring an authentic Punjabi visual identity, genuine 3D WebGL flatbread-into-brass-plate scroll storytelling, complete verified menu catalog, original restaurant photography gallery, and WhatsApp booking integration.

---

## 1. Verified Restaurant Information

| Detail | Verified Information |
| :--- | :--- |
| **Restaurant Name** | **Amritsari Chhole Kulche** |
| **Address** | Near Tikora Mod, Lucknow Road, Hemariya, Bahraich – 271825, Uttar Pradesh, India |
| **Direct Contact Phone** | `07947141309` (`tel:+917947141309`) |
| **WhatsApp Enquiry** | `+91 7947141309` (`https://wa.me/917947141309`) |
| **Google Maps Coordinates** | Latitude: `27.5400683`, Longitude: `81.571983` |
| **Google Maps Location** | [View on Google Maps](https://www.google.com/maps/search/?api=1&query=27.5400683,81.571983) |
| **Cuisine Ethos** | Authentic Punjabi Clay Tandoor Kulchas, Chhole, Pure Desi Makhan |

---

## 2. Signature 3D Animation: Kulcha Falling & Landing Inside Brass Plate

The hallmark feature of this application is a **true 3D scroll-controlled physical simulation** powered by **React Three Fiber (R3F)**, **Three.js**, **GSAP**, and **ScrollTrigger**.

### Storyboard Phases:
1. **Phase 1 – Hero Initial State (Scroll 0% – 25%):**
   - The scene loads with warm three-point cinematic lighting (`ambientLight`, golden key sunlight, and Punjabi maroon/gold rim).
   - A traditional Indian **Brass Plate (Thali)** sits below, while a freshly roasted **3D Amritsari Kulcha** hovers above with realistic blistered char spots, melted butter clearcoat sheen, and rising steam particles.
2. **Phase 2 – Separation & Rise (Scroll 25% – 45%):**
   - As the visitor initiates scrolling, the kulcha ascends into the air, expanding scale and catching highlights.
   - 3D camera smoothly glides to track its trajectory.
3. **Phase 3 – Freefall with Gravity (Scroll 45% – 65%):**
   - The kulcha tumbles downwards under simulated gravitational acceleration ($y \propto t^2$).
   - Tri-axial rotation along $X, Y, Z$ gives the bread natural weight and aerial rotation.
4. **Phase 4 – Signature Impact, Landing & Bounce (Scroll 65% – 80%):**
   - The kulcha lands directly on the floor of the brass plate (`y = -0.58`).
   - **Squash-and-Stretch:** On impact, vertical scale compresses ($0.82\times$) while lateral radius expands ($1.15\times$).
   - **Rebound Bounce:** Spring rebound lifts the kulcha slightly before settling firmly onto the plate.
   - **Plate Vibration & Steam Puff:** The brass plate reacts with micro-vibrations, and steam particles puff up.
   - **Zero Floating:** The kulcha rests solidly in the plate.
5. **Phase 5 – Emotion Reveal (Scroll 80% – 100%):**
   - The kulcha rests stably inside the brass thali.
   - Editorial headline reveals: **"MORE THAN FOOD. IT'S AN EMOTION."**
   - Supporting narrative: *"Every bite brings the authentic warmth of Punjab, the richness of tradition and the love of freshly prepared Amritsari flavours."*

---

## 3. Five Complete Pages

1. **Home (`/`):**
   - Fullscreen cinematic hero with live 3D persistent canvas.
   - Interactive falling & landing scroll sequence.
   - Emotion section reveal.
   - Authentic Punjabi craftsmanship highlights.
   - Popular menu preview with direct WhatsApp ordering.
   - Ambient gallery preview using genuine Bahraich photos.
   - Quick location directions & table booking enquiry.

2. **Our Story (`/our-story`):**
   - Main Headline: *"MADE WITH TRADITION. SERVED WITH LOVE."*
   - Five Core Pillars:
     1. *Our Restaurant in Bahraich* (Near Tikora Mod, Lucknow Road)
     2. *Authentic Punjabi Food Culture* (Slow-cooked chhole, pure desi makhan)
     3. *The Art of Making Kulcha* (Hand-stretching, clay-tandoor wall slap)
     4. *Fresh & Uncompromised Ingredients* (Anardana, ajwain, coriander, spices)
     5. *Our Love for Good Food* (Hot from the embers directly to the guest)
   - Zero invented history or dates; pure culinary integrity.

3. **Our Menu (`/menu`):**
   - Complete 21 Kulcha & Naan varieties with verified prices:
     - Aloo Kulcha (₹50), Aloo Matar (₹60), Pyaz (₹60), Gobhi (₹60), Aloo Methi (₹60), Stuff Naan (₹60), Mix Veg (₹65), Chur-Chur Naan (₹60), Bhujia (₹60), Moong Dal (₹60), Ajari (₹60), Paneer (₹70), Matar Paneer (₹75), Besan (₹70), Mushroom (₹70), Matar Mushroom (₹80), Aloo Cheese (₹80), Cheese (₹95), Jumbo (₹80), Aata (₹65), Plain Naan (₹40).
   - Special Combos: Chilli Paneer + Fried Rice + Noodles (₹149).
   - Special Kulcha Thalis:
     - Thali ₹160 (1 Aloo Kulcha, Chhole, Fries, Raita, Chilli Paneer).
     - Royal Thali ₹199 (1 Aloo Pyaz Mix Kulcha, Chhole, Chilli Paneer, Fries, Raita, Gulab Jamun).
   - Interactive category filter tabs, ingredient descriptions, and direct WhatsApp dish enquiry links.

4. **Gallery (`/gallery`):**
   - Features the **actual uploaded restaurant photographs**:
     - `restaurant-wall-mural.jpg`: Signature golden horse and dragon mural wall.
     - `restaurant-interior.jpg`: Wide view of dining room with 3D floral wallpaper and blue cove ceiling.
     - `restaurant-entrance.jpg`: Golden satin curtain partition booths.
     - `customer-dining.jpg` & `customer-dining-2.jpg`: Diners and families enjoying meals.
     - `restaurant-ambience.jpg`: Evening dining perspective.
   - Responsive masonry grid with category filters (All, Ambience, Customers, Food).
   - Interactive **Lightbox Viewer** with keyboard `Escape` and backdrop dismissal.

5. **Visit Us (`/visit-us`):**
   - Verified coordinates: `27.5400683, 81.571983` near Tikora Mod, Lucknow Road, Bahraich.
   - Embedded interactive Google Map.
   - Direct Action CTAs:
     - **Call Now:** `tel:+917947141309`
     - **WhatsApp:** `https://wa.me/917947141309`
     - **Get Directions:** Opens official Google Maps.
   - **Frontend "Book Your Meal" Enquiry Form:**
     - Validates Customer Name, Indian 10-digit Mobile Number (`/^[6-9]\d{9}$/`), Booking Date, Preferred Time, Guest Count, and Special Requests.
     - Automatically generates and launches pre-filled WhatsApp enquiry message to `917947141309`.
     - Displays confirmation banner with re-trigger link.

---

## 4. Technology Stack (Frontend-Only)

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Custom royal Punjabi theme: `#F8F1E5`, `#6F1717`, `#9B2920`, `#D4A441`, `#493024`, `#211A16`)
- **3D Graphics:** Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Animations:** GSAP 3 + ScrollTrigger + Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM v6
- **Backend:** **None.** (Zero Node.js/Express application servers, zero MongoDB, zero backend models, zero external APIs).

---

## 5. Development & Build Commands

### Prerequisites:
- Node.js (v18+ or v20+)
- npm or pnpm

### Quick Start:

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Open in browser:
# http://localhost:3000
```

### Production Build & Preview:

```bash
# Generate optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Maintenance & Customization Guide

### How to Update Menu Items or Prices
All menu dishes are maintained in a single clean data file:  
`src/data/menuData.js`

To update a price or add a dish, open `src/data/menuData.js` and modify the respective entry:
```javascript
{
  id: 'paneer-kulcha',
  name: 'Paneer Kulcha',
  hindiName: 'पनीर कुलचा',
  category: 'kulcha-naan',
  price: 70, // <-- Edit price here
  isPopular: true,
  description: 'Crumbled cottage cheese with fresh herbs...',
  image: '/images/menu/paneer-kulcha.jpg'
}
```

### How to Replace or Add Gallery Photos
1. Place high-resolution `.jpg` photos directly into:  
   `public/images/gallery/`
2. Update or verify the entry in `src/data/galleryData.js`:
```javascript
{
  id: 'wall-mural',
  title: 'Signature Golden Horse Mural',
  category: 'ambience',
  image: '/images/gallery/restaurant-wall-mural.jpg',
  aspect: 'aspect-square md:aspect-[4/3]'
}
```

### How to Replace the 3D GLB Model
- The 3D model used in the scroll animation is located at:  
  `public/models/amritsari-kulcha.glb`
- You can regenerate or tweak the procedural PBR model at any time by running:
  ```bash
  npm run generate-model
  ```
- Or, you can place your own custom photogrammetry/3D scan model into `public/models/amritsari-kulcha.glb`. The loader in `src/components/three/KulchaModel.jsx` will automatically render it!

### How to Update Restaurant Hours or Phone
All business details are stored centrally in:  
`src/data/restaurantData.js`
- Address, phone, WhatsApp number, and weekly hours can be updated in seconds.

---

## 7. Performance & Accessibility
- **Reduced Motion Support:** Respects `prefers-reduced-motion: reduce` by positioning the kulcha at rest in the brass plate without jarring scroll physics.
- **WebGL Fallback:** Automatically falls back to a curated photographic culinary presentation if WebGL is disabled or unsupported.
- **Zero Broken Images:** `FoodImage.jsx` incorporates graceful fallback culinary presentation cards with royal brass borders whenever an image is missing or loading.
- **Local SEO Optimized:** Includes Open Graph tags, Twitter card tags, LocalBusiness JSON-LD structured data, XML sitemap (`/sitemap.xml`), and `robots.txt`.

