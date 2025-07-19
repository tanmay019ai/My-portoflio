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
      className="bg-[#1a1a1a] p-6 rounded-3xl w-full min-h-[150px]"
    >
      <div className="flex items-center gap-3 mb-4">
        <img
          src={image || "/fallback.png"} // fallback if image is missing
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
    <div className="m-6 sm:m-12 bg-[#121212] rounded-[20px]">
      {/* Title Section */}
      <div className={`${styles.padding} bg-[#2b2b2b] rounded-t-2xl min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Future Learning</p>
          <h2 className={styles.sectionHeadText}>Tech Stack Plan</h2>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className={`mt-4 pb-12 px-4 sm:px-10`}>
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
