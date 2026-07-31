import { motion } from "framer-motion";
import GalleryCard from "./GalleryCard";
import galleryData from "./galleryData";
import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";

const Gallery = () => {
    const [selected, setSelected] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const openModal = (index) => {
      setSelected(index);
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };

    const nextImage = () => {
      setSelected((prev) => (prev + 1) % galleryData.length);
    };

    const prevImage = () => {
      setSelected((prev) =>
        prev === 0 ? galleryData.length - 1 : prev - 1
      );

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (!isOpen) return;

        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);
    };
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 bg-[#111111]">
      <div className="max-w-7xl w-[90%] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="h-[25vh] flex flex-col items-center justify-evenly text-center mb-16"
        >
          <span className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Our Gallery
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Experience Otasty
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Explore our restaurant, delicious Nigerian dishes, and unforgettable
            dining moments.
          </p>
        </motion.div>

        <div className="grid auto-rows-[220px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={openModal}
            />
          ))}
        </div>
        <GalleryModal
                  images={galleryData}
                  current={selected}
                  isOpen={isOpen}
                  onClose={closeModal}
                  nextImage={nextImage}
                  prevImage={prevImage}
                />
      </div>
    </section>
  );
};

export default Gallery;