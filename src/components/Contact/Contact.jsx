import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import contactData from "./contactData";

const Contact = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-28 bg-[#0D0D0D] overflow-hidden">

      {/* Background Glow */}
     <div className="absolute -top-32 -left-32 w-80 h-80 bg-orange-500/10 rounded-full blur-[150px]" />
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-[170px]" />

      <div className="relative w-[90%] max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[35vh] flex flex-col items-center justify-center w-full text-center mb-20"
        >
          <span className="uppercase tracking-[5px] text-orange-500 font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold text-white mt-5">
            Let's Start a Conversation
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8">
            Whether you're planning a special dinner, private event, or simply
            have a question, we'd love to hear from you.
          </p>

           <div className="w-full h-1 bg-orange-500 rounded-full mx-auto mt-8"></div>
           <div className="w-full h-1 bg-white rounded-full mx-auto mt-3"></div>
        </motion.div>

        {/* Contact Form + Contact Information */}

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <ContactForm />

          <ContactInfo data={contactData} />

        </div>
        <div className="md:h-[60px]"></div>

        {/* ================= MAP SECTION ================= */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[35px] border border-white/10 shadow-2xl">

            {/* Overlay Card */}

            <div className="md:w-[400px] md:h-[400px] w-[250px] h-[250px] absolute top-7 left-8 z-20 bg-black/75 flex flex-col items-center justify-center backdrop-blur-md rounded-3xl p-8 max-w-sm">

              <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
                Visit Otasty
              </span>

              <h3 className="text-3xl font-bold text-white mt-4">
                Find Us Easily
              </h3>

              <p className="text-gray-300 mt-5 leading-8">
                No 2 Scott Road,
                <br />
                Ogarefe Ogara,
                <br />
                Delta State, Nigeria
              </p>

              <a
                href="https://maps.app.goo.gl/CyaC5eUrvRPL7SNZA"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[50px] w-[180px] flex items-center justify-center gap-3 mt-8 px-7 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-semibold"
              >
                📍Get Directions
              </a>

            </div>

            {/* Google Map */}

            <iframe
            title="Otasty Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.4299863592764!2d5.657300579345703!3d5.9353147000000055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040e389a56715c3%3A0x9f3feaec4d5cad60!2sOtasty%20Restaurant%20and%20Bar!5e0!3m2!1sen!2sng!4v1785356260665!5m2!1sen!2sng"
                       width="600" height="450"
                        loading="lazy" className="w-full h-[600px]"
                                                     loading="lazy"
                                                     referrerPolicy="no-referrer-when-downgrade"
                       >
                       </iframe>


          </div>
        </motion.div>
<div className="h-[60px]"></div>
      </div>


    </section>
  );
};

export default Contact;