import React from "react";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  Icon?: ReactElement;
  className?: string;
}

const SectionHeader = ({
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-center py-20 ${className}`}
    >
      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      <div className="m-4 flex justify-center items-center ">
        <p className="text-lg md:text-2xl roboto-condensed text-indigo-400">
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export default SectionHeader;
