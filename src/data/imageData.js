/**
 * Centralized Image Registry for Amritsari Chhole Kulche
 * Easily update, replace or add images here without modifying UI components.
 */

export const IMAGE_DATA = {
 // Brand Logo
brand: {
  logo: '/images/logo.webp',
  alt: 'Amritsari Chhole Kulche Chef Mascot'
},
  // Hero Images
  hero: {
    mural: {
      id: 'hero-mural',
      title: 'Golden Horse Dining Mural',
      image: '/images/hero/hero-mural.jpg',
      alt: 'Royal golden horses wall mural inside Amritsari Chhole Kulche Bahraich',
      aspect: 'aspect-[16/9]'
    },
    sardarJi: {
      id: 'hero-sardar-ji',
      title: 'Owner',
      image: '/images/gallery/owner-image.webp',
      alt: 'Owner of Amritsari Chhole Kulche Bahraich',
      aspect: 'aspect-[4/3]'
    },
    kulchaChhole: {
      id: 'hero-kulcha-chhole',
      title: 'Amritsari Kulcha with Pindi Chhole',
      image: '/images/gallery/Chhole-kulche-home.png',
      alt: 'Crispy golden Amritsari Kulcha served with spiced Pindi Chhole and desi butter',
      aspect: 'aspect-[4/3]'
    },
    chefMascot: {
      id: 'hero-chef-mascot',
      title: 'Sardar Ji Chef Mascot',
      image: '/images/hero/sardar-chef-mascot.jpg',
      alt: 'Friendly Punjabi Sardar Ji chef mascot holding freshly baked Amritsari Kulcha',
      aspect: 'aspect-square'
    }
  },

  // Story Section Photos
  story: {
    restaurant: {
      id: 'story-restaurant',
      title: 'Our Restaurant in Bahraich',
      image: '/images/story/story-restaurant.jpg',
      alt: 'Spacious dining hall with 3D wallpaper and air-conditioned seating',
      aspect: 'aspect-[4/3] sm:aspect-[16/10]'
    },
    culture: {
      id: 'story-punjabi-food',
      title: 'Authentic Punjabi Food Culture',
      image: '/images/story/story-punjabi-food.jpg',
      alt: 'Guests relishing authentic hot kulchas in Bahraich',
      aspect: 'aspect-[4/3] sm:aspect-[16/10]'
    },
    art: {
      id: 'story-kulcha-art',
      title: 'The Art of Making Kulcha',
      image: '/images/story/story-kulcha-art.jpg',
      alt: 'Hand-stretched dough baked on clay tandoor embers',
      aspect: 'aspect-[4/3] sm:aspect-[16/10]'
    },
    ingredients: {
      id: 'story-ingredients',
      title: 'Fresh & Uncompromised Ingredients',
      image: '/images/story/story-ingredients.jpg',
      alt: 'Rich slow-cooked Amritsari chhole with pomegranate seeds and spices',
      aspect: 'aspect-[4/3] sm:aspect-[16/10]'
    },
    passion: {
      id: 'story-passion',
      title: 'Our Love for Good Food',
      image: '/images/story/story-passion.jpg',
      alt: 'Golden wall mural showcasing royal Punjabi spirit',
      aspect: 'aspect-[4/3] sm:aspect-[16/10]'
    }
  },

  // Fallback Placeholders
  placeholders: {
    food: {
      image: '/images/placeholders/placeholder-food.jpg',
      alt: 'Amritsari Tandoor Delicacy'
    },
    ambience: {
      image: '/images/placeholders/placeholder-ambience.jpg',
      alt: 'Bahraich Restaurant Ambience'
    }
  }
};

