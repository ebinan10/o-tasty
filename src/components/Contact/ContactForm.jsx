import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you for contacting Otasty!");

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="bg-[#171717] w-full lg:h-[105vh] h-[70vh] flex flex-col items-center justify-center rounded-[35px] p-10 border border-white/10"
    >

      <div className="flex flex-col  w-[90%] h-full gap-6 justify-evenly">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="bg-[#0D0D0D] h-[50px] rounded-xl p-4 text-white border border-white/10 focus:border-orange-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="bg-[#0D0D0D] h-[50px] rounded-xl p-4 text-white border border-white/10 focus:border-orange-500 outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="bg-[#0D0D0D] h-[50px] rounded-xl p-4 text-white border border-white/10 focus:border-orange-500 outline-none"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          className="bg-[#0D0D0D] h-[50px] rounded-xl p-4 text-white border border-white/10 focus:border-orange-500 outline-none"
        />

        <textarea
          rows="6"
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="bg-[#0D0D0D] rounded-xl p-4 text-white border border-white/10 focus:border-orange-500 outline-none resize-none"
        />

        <button
          className="bg-orange-500 h-[50px] hover:bg-orange-600 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-[1.02]"
        >
          Send Message
        </button>

      </div>

    </motion.form>
  );
};

export default ContactForm;