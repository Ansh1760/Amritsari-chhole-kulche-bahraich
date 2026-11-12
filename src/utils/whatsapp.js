/**
 * WhatsApp Helper Utilities
 * Generates verified enquiry links for the Bahraich restaurant.
 */

import { RESTAURANT_DATA } from '../data/restaurantData';

/**
 * Creates an encoded WhatsApp booking enquiry link
 * @param {Object} data Booking form data
 * @returns {string} Fully qualified WhatsApp URL
 */
export function createBookingWhatsAppUrl({ name, phone, date, time, guests, instructions }) {
  const cleanPhone = RESTAURANT_DATA.contact.whatsappNumber;

  const message = [
    `Hello, I would like to book a meal at ${RESTAURANT_DATA.name}.`,
    '',
    `Name: ${name || 'N/A'}`,
    `Mobile: ${phone || 'N/A'}`,
    `Date: ${date || 'N/A'}`,
    `Time: ${time || 'N/A'}`,
    `Guests: ${guests || 'N/A'}`,
    `Special Instructions: ${instructions || 'None'}`
  ].join('\n');

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates a quick dish enquiry WhatsApp link
 * @param {string} dishName
 * @returns {string} WhatsApp URL
 */
export function createDishEnquiryUrl(dishName) {
  const cleanPhone = RESTAURANT_DATA.contact.whatsappNumber;
  const message = `Hello, I would like to order or ask about "${dishName}" at ${RESTAURANT_DATA.name}.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

