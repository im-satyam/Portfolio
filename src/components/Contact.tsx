import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_tnt64ir",
        "template_di12c1r",
        formRef.current,
        "exxO_H4DbYE60B_He"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('\lines-4498_512.gif')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      {/* Contact content */}
      <div className="relative z-10 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-gray-900 bg-opacity-80 rounded-lg p-8 shadow-lg"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
          >
            Contact Me
          </motion.h1>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <label className="block text-sm mb-1 text-white">Your Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <label className="block text-sm mb-1 text-white">Your Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <label className="block text-sm mb-1 text-white">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded hover:opacity-90 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {isSent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center mt-2"
              >
                ✅ Your message has been sent!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
