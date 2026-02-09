import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setIsSent(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_wl526un",
        "template_ers6224",
        formRef.current,
        "exxO_H4DbYE60B_He"
      )
      .then(
        () => {
          setIsSent(true);
          setLoading(false);
          formRef.current?.reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        (error: any) => {
          console.error("FAILED...", error);
          setErrorMessage(error.text || "Failed to send message. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen w-full bg-transparent pt-20"
    >
      {/* Contact content */}
      <div className="relative z-10 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-black/90 backdrop-blur-md rounded-xl p-8 shadow-[0_0_20px_rgba(229,9,20,0.3)] border-2 border-red-900/50"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-center mb-6 text-white drop-shadow-[3px_3px_0_#E63946]"
            style={{ fontFamily: 'Bangers, system-ui' }}
          >
            Get In Touch
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
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="John Doe"
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
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="john@example.com"
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
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-purple-500 transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              disabled={loading}
              className={`w-full bg-red-700 bg-opacity-90 text-white font-bold py-3 rounded-xl hover:bg-red-600 shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all flex items-center justify-center gap-2 font-bangers tracking-wider text-xl ${loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {loading ? (
                <span className="animate-pulse">Sending Web...</span>
              ) : (
                "Send Message"
              )}
            </motion.button>

            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200 text-center font-roboto-mono"
              >
                ✅ Your web has been sent successfully!
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-center text-sm font-roboto-mono"
              >
                ❌ {errorMessage}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
