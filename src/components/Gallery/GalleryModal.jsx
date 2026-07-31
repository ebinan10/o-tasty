import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

const GalleryModal = ({
  images,
  current,
  isOpen,
  onClose,
  nextImage,
  prevImage,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-white text-3xl hover:text-orange-500 transition"
        >
          <FaTimes />
        </button>

        {/* Previous */}

        <button
          onClick={prevImage}
          className="absolute left-8 text-white text-4xl hover:text-orange-500"
        >
          <FaChevronLeft />
        </button>

        {/* Image */}

        <motion.img
          key={images[current].id}
          src={images[current].image}
          alt={images[current].title}
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: .8, opacity: 0 }}
          transition={{ duration: .3 }}
          className="max-h-[85vh] rounded-3xl object-contain"
        />

        {/* Next */}

        <button
          onClick={nextImage}
          className="absolute right-8 text-white text-4xl hover:text-orange-500"
        >
          <FaChevronRight />
        </button>

      </motion.div>
    </AnimatePresence>
  );
};

export default GalleryModal;