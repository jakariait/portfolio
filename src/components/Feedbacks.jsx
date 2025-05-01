import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
                        index,
                        testimonial,
                        name,
                        designation,
                        company,
                        image,
                      }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.1 + 0.3, 0.7)}
    className="w-full rounded-3xl bg-black-200 p-4 "
  >
    <div className="mt-1">
      <p className=" tracking-wider text-white">
        <span className={"text-4xl"}>"</span>
        {testimonial}
        <span className={"text-4xl"}>"</span>
      </p>

      <div className="mt-7 flex items-center justify-between gap-1">
        <div className="flex flex-1 flex-col">
          <p className="text-[16px] font-medium text-white">
            <span className="blue-text-gradient">@</span> {name}{" "}
            <span className={"text-xs"}>{designation}</span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-2 rounded-[20px] bg-black-100`}>
      <div
        className={`rounded-2xl bg-tertiary ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-40 md:-mt-20 pb-14 ${styles.paddingX} grid md:grid-cols-2  gap-4 w-full`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
