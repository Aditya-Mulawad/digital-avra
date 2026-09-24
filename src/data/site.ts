/**
 * Central brand + contact configuration.
 * Replace the placeholder contact details with the real ones when available.
 */
export const site = {
  name: "Digital Avra",
  tagline: "Your Business, Digitally Done.",
  positioning: "Digital Solutions & Growth Agency",
  description:
    "Digital Avra helps businesses build, market and grow online through websites, SEO, advertising, social media, branding and digital infrastructure.",
  location: "Bangalore, India",
  email: "digitalavra@gmail.com",
  whatsappNumber: "+91 93536 60232",
  whatsappMessage:
    "Hi Digital Avra, I'd like to know more about your digital growth services.",
  social: {
    instagram: "INSTAGRAM_URL_HERE",
    facebook: "FACEBOOK_URL_HERE",
    linkedin: "LINKEDIN_URL_HERE",
  },
} as const;

export const whatsappHref = () =>
  `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    site.whatsappMessage,
  )}`;
