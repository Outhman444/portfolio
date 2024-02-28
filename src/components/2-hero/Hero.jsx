import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev2.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./profile.jfif"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
        Software designer and Full Stack web developer.
        </motion.h1>

        <p className="sub-title">
        Hello, my name is Othman and I live in Morocco. I am a full-stack web developer, proficient in front-end and back-end development of web applications.  I am committed to constantly enhancing my skills and contributing to the technology community.”
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div  className="icon icon-instagram"></div>
          <a href="https://github.com/Outhman444" target="_blank" rel="noopener noreferrer">
          <div className="icon icon-github"></div>
          </a>

          <a href="https://www.linkedin.com/in/otman-yassin-a319262a2/" target="_blank" rel="noopener noreferrer">
          <div className="icon icon-linkedin"></div>
</a>

        </div>
      </div>
      

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
      
    </section>
  );
};

export default Hero;
