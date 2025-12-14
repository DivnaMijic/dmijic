import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface EducationItemProps {
  year: string;
  title: string;
  location: string;
  description: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  year,
  title,
  location,
  description,
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="text-left flex gap-6 mb-12 items-start scrollbar-none "
    >
      {/* Year */}
      <div className="text-xl font-suranna w-[80px] flex-shrink-0">{year}</div>

      {/* Diamond + Vertical line */}
      <div className="flex flex-col items-center h-[160px] flex-shrink-0">
        <img src="media/icons/diamond.svg" className="h-6 mb-2" />
        <div className="w-[1px] bg-white h-[500px]" />
      </div>

      {/* Text */}
      <div className="flex-1">
        <h3 className="text-xl font-light font-dmserif">{title}</h3>
        <h4 className="font-josefin text-md">{location}</h4>
        <p className="font-josefin font-light text-lg mt-2 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationItem;
