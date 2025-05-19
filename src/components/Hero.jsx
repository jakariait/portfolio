import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import ParticlesContainer from "./ParticlesContainer";
import { Avatar, useMediaQuery } from "@mui/material";
import Stats from "./Stats";

const Hero = () => {
  const isSmallScreen = useMediaQuery("(max-width:640px)");

  return (
    <section className="relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden">
      <ParticlesContainer />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.h1
          variants={textVariant()}
          className={`${styles.heroHeadText} text-white`}
        >
          Hi, I'm <span className="text-[#915EFF]">Jakaria</span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", "spring", 0.3, 1)}
          className={`${styles.heroSubText} mt-4 max-w-xl text-white-100`}
        >
          I develop Full Stack Web Applications using{" "}
          <br className="hidden sm:block" />
          <span className="gradient-text">MERN Stack</span>
        </motion.p>
        <div className={"mt-20"}>
          <Stats/>
        </div>


      </div>

      <div className="absolute bottom-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
