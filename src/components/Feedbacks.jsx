import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// FeedbackCard
const FeedbackCard = ({ index, name, image, testimonial }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-6 rounded-3xl w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={image}
          alt={`tech-icon-${name}`}
          className="w-8 h-8 object-contain"
        />
        <span className="text-white text-lg font-semibold blue-text-gradient">
          {name}
        </span>
      </div>

      <p className="text-white tracking-wider text-[16px]">{testimonial}</p>
    </motion.div>
  );
};

// Feedbacks section
const Feedbacks = () => {
  return (
    <div className="m-12 bg-black-100 rounded-[20px]">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Future Learning</p>
          <h2 className={styles.sectionHeadText}>Tech Stack Plan</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
