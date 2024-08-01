import React, { useEffect, useRef, useState } from "react";
import { AboutProps } from "./About.types";
import { motion, useAnimation } from "framer-motion";
import Skills from "./Skills";

const useScrollAnimation = (threshold = 0.1) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * (1 - threshold)) {
          controls.start("visible");
        } else {
          controls.start("hidden");
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, threshold]);

  return [ref, controls] as const;
};

const About: React.FC<AboutProps> = ({
  description,
  moreInfo1,
  moreInfo2,
  moreInfo3,
  moreInfo4,
  moreInfo5,
  socialLinks,
  galleryImages,
}) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [socialLinksRef, socialLinksControls] = useScrollAnimation();
  const [galleryRef, galleryControls] = useScrollAnimation();

  const handleToggleInfo = () => {
    setIsInfoVisible((prev) => !prev);
  };

  return (
    <div className="max-w-8xl p-8 text-white relative custom-margin">
      <div className="flex flex-col md:flex-row items-start md:items-start md:space-x-12">
        <div className="mt-12 mb-12 text-center relative space-y-6 flex-1">
          <motion.div
            ref={socialLinksRef}
            className="flex justify-center space-x-6 mb-12"
            initial="hidden"
            animate={socialLinksControls}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
              >
                <link.icon className="w-8 h-8" />
              </a>
            ))}
          </motion.div>

          <blockquote className="text-2xl italic border-l-4 border-indigo-500 pl-4">
            {moreInfo1}
          </blockquote>
          <p className="text-4xl font-extrabold mb-4 text-indigo-400">
            {description}
          </p>
        </div>
      </div>

      <motion.div
        ref={galleryRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-10"
        initial="hidden"
        animate={galleryControls}
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.8,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {galleryImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="rounded-lg object-cover w-full h-64 shadow-md"
            whileHover={{ scale: 1.1 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        ))}
      </motion.div>

      <div className="flex justify-center mb-12">
        <button
          onClick={handleToggleInfo}
          className="px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {isInfoVisible ? "Click to Hide" : "Click for more info"}
        </button>
      </div>

      {isInfoVisible && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <motion.p
              className="text-2xl text-justify"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              {moreInfo2}
            </motion.p>
            <motion.p
              className="text-2xl text-justify"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {moreInfo3}
            </motion.p>
          </div>
          <div className="space-y-6">
            <motion.p
              className="text-2xl text-justify"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              {moreInfo4}
            </motion.p>
            <motion.p
              className="text-2xl text-justify"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {moreInfo5}
            </motion.p>
          </div>
        </motion.div>
      )}

      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default About;
