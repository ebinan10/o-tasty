import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaUsers,
  FaCalendarAlt,
  FaClock,
  FaRegCommentDots,
} from "react-icons/fa";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration will go here
    console.log(formData);

    alert("Reservation request submitted successfully!");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      guests: "2",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-[#171717] h-[105vh] w-full flex flex-col items-center justify-center rounded-3xl p-8 lg:p-10 shadow-2xl"
    >
    <div className="w-[90%] h-full flex flex-col flex-start justify-evenly">
      <h3 className="text-3xl font-bold text-white mb-2">
        Book Your Table
      </h3>

      <p className="text-gray-400 mb-8">
        Fill in your details and we'll prepare a memorable dining experience.
      </p>

      <div className="grid gap-6">

        {/* Full Name */}

        <div className="relative">
          <FaUser className="absolute right-5 top-4 text-orange-500" />

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full h-[50px]  bg-[#0f0f0f] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Email */}

        <div className="relative">
          <FaEnvelope className="absolute right-5 top-4 text-orange-500" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full  h-[50px] bg-[#0f0f0f] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Phone */}

        <div className="relative">
          <FaPhone className="absolute right-5 top-4 text-orange-500" />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full bg-[#0f0f0f] h-[50px] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none transition"
          />
        </div>

        {/* Guests */}

        <div className="relative">
          <FaUsers className="absolute right-5 top-4 text-orange-500" />

          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full h-[50px] bg-[#0f0f0f] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none appearance-none"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
          </select>
        </div>

        {/* Date & Time */}

        <div className="grid md:grid-cols-2 gap-6">

          <div className="relative">
            <FaCalendarAlt className="absolute right-5 top-4 text-orange-500" />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full h-[50px] bg-[#0f0f0f] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none"
            />
          </div>

          <div className="relative">
            <FaClock className="absolute right-5 top-4 pr-[5px] text-orange-500" />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full h-[50px] bg-[#0f0f0f] text-white rounded-xl py-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none"
            />
          </div>

        </div>

        {/* Message */}

        <div className="relative">
          <FaRegCommentDots className="absolute right-5 top-4 text-orange-500" />

          <textarea
            rows="5"
            name="message"
            placeholder="Special Request"
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#0f0f0f] text-white rounded-xl pt-4 pl-14 pr-4 border border-white/10 focus:border-orange-500 outline-none resize-none"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 h-[50px] hover:bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 hover:scale-[1.02]"
        >
          Reserve Your Table
        </button>

      </div>
      </div>
    </motion.form>
  );
};

export default ReservationForm;