// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import happy from "../../assets/happy.jpg";
import happy2 from "../../assets/happy-2.jpg";

const Banner = () => {
  return (
    <div className="hero my-1 md:my-4 bg-base-200/30 rounded-2xl md:py-30 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <div className="hidden md:flex relative">
            <motion.div
              className="max-w-92 rounded-t-4xl rounded-br-4xl border-l-4 border-b-4 border-blue-500 md:absolute"
              animate={{
                y: [-30, -100, -30],
              }}
              transition={{
                duration: 10,
                ease: "easeOut",
                repeat: Infinity,
              }}
            >
              <img
                src={happy}
                alt="Happy"
                className="rounded-t-4xl rounded-br-4xl"
              />
            </motion.div>
            <motion.div
              className="max-w-92 rounded-t-4xl rounded-bl-4xl border-r-4 border-b-4 border-lime-400"
              animate={{
                x: [30, 200, 30],
                y: [50],
              }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <img
                src={happy2}
                alt="Happy"
                className="rounded-t-4xl rounded-bl-4xl"
              />
            </motion.div>
          </div>
          <div className="md:hidden">
            <motion.div
              style={{
                border: "4px solid transparent",
                borderRadius: "1rem",
                backgroundImage:
                  "linear-gradient(90deg, #22d3ee, #a78bfa, #22d3ee)",
                backgroundSize: "200% 200%",
                backgroundClip: "border-box",
                padding: "4px",
                WebkitBackgroundClip: "padding-box",
              }}
              className="max-w-92"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <img src={happy2} alt="Happy" className="rounded-xl" />
            </motion.div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl md:text-5xl font-bold text-purple-500 bg-amber-100/30 p-4 rounded-2xl">
            <Typewriter
              className
              words={["Letest Job News!", "Explore Our Hot Jobs!"]}
              loop={0}
              cursor={"|"}
              typeSpeed={100}
              deleteSpeed={10}
              delaySpeed={2000}
            />
          </h1>
          <p className="py-6 text-base-300">
            Searching for a job can be one of life’s most challenging
            journeys—but it’s also one of the most empowering. Every rejection
            is not a defeat, but a redirection. Every resume you send and
            interview you attend builds resilience, clarity, and confidence.
            Remember: you are not just seeking a job; you are seeking a place
            where your talents, passion, and values align.
          </p>
          <label className="input h-12 bg-base-100/10 w-full rounded-full">
            <svg
              className="h-[1em] text-3xl"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              className="text-xl"
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
    </div>
  );
};
export default Banner;
