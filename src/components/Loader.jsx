import {useProgress} from "@react-three/drei";
import {useState} from "react";
import {AnimatePresence, motion} from "motion/react";
import useStorage, {initSound, mainClick} from "../services/useStorage.js";

const Loader = () => {
  const {progress} = useProgress();
  const [show, setShow] = useState(true);
  const { setIsStarted } = useStorage();

  const handleExperienceStart = () => {
    setShow(false);
    mainClick.play();
    initSound.play();
    setIsStarted(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key={"loader"}
          initial={{opacity: 1}}
          exit={{opacity: 0, transition: {duration: 2, ease: "easeOut"}}}
          className="flex flex-col items-center justify-center absolute z-50 top-0 text-white text-center size-full backdrop-blur-lg"
        >
          <motion.h1
            key={"loaderTitle"}
            className="lg:text-9xl text-6xl font-bold bonheur-royale-regular"
          >
            Digital Mundo
          </motion.h1>

          {/* START BUTTON */}
          <motion.button
            key={"loaderButton"}
            initial={{opacity: 0, filter: "blur(10px)"}}
            animate={{
              opacity: progress === 100 ? 1 : 0,
              filter: progress === 100 ? "blur(0px)" : "blur(10px)",
              transition: {delay: 0.3, duration: 1, ease: "easeOut"},
            }}
            whileHover={{scale: 1.025, transition: {duration: 0.2}}}
            className="px-4 py-2 border-2 rounded-lg uppercase font-mono mt-10"
            onClick={handleExperienceStart}
            disabled={progress !== 100}
          >
            Démarrer l&apos;expérience
          </motion.button>

          {/* LOADING BAR */}
          <motion.div
            key={"loaderBar"}
            className="absolute bottom-0 w-full h-[3px] "
            animate={{
              opacity: progress === 100 ? 0 : 1,
              filter: progress === 100 ? "blur(10px)" : "blur(0px)",
              transition: {duration: 1, delay: 0.5},
            }}
          >
            <motion.div
              key={"loaderBarFill"}
              className="h-full w-0 bg-white"
              animate={{width: `${progress}%`}}
            ></motion.div>
            <p className="absolute text-xl text-white left-4 -top-10">
              {Math.ceil(progress)}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader;