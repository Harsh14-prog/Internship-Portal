import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full flex-grow pt-24 pb-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-slate-800 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-slate-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Have a question or suggestion? We'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-xl shadow p-6 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label className="block text-slate-700 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                placeholder="Write your message here..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition shadow"
            >
              Send Message
            </button>
            {submitted && (
              <motion.p
                className="text-green-600 text-center text-sm mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✅ Message sent! We'll get back to you soon.
              </motion.p>
            )}
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="bg-slate-50 border border-slate-200 rounded-xl shadow p-6 text-slate-700 space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-indigo-700 mb-4">Reach Us</h3>

            <div className="flex items-center gap-3 text-sm">
              <MapPin size={20} className="text-red-500" />
              123 Startup Street, Pune, India
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail size={20} className="text-indigo-600" />
              support@internhub.com
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone size={20} className="text-emerald-500" />
              +91 98765 43210
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Clock size={20} className="text-yellow-500" />
              Mon - Fri: 9:00 AM to 6:00 PM
            </div>

            <iframe
              title="Google Map"
              className="rounded-lg w-full h-40 border mt-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160991056!2d72.74109995374828!3d19.082197839770995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7be4c77428d%3A0x77fcd542b6efc1e1!2sPune!5e0!3m2!1sen!2sin!4v1632910218792!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
