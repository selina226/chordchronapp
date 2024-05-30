// config.js
const config = {
  EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'default_service_id',
  EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'default_template_id',
  EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'default_public_key'
};

export default config;
