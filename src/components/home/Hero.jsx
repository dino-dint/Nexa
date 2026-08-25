import React from "react";
import { motion } from "framer-motion";
import Macbook from "../../assets/Macbook.jpg";
import headphone from "../../assets/Headphone.jpg";

function Hero() {
  return (
    <section className="w-full">
      <div className="relative bg-black min-h-[90vh] md:min-h-screen w-full grid place-items-center overflow-hidden py-12">
        {/* LAYER 1: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{
            opacity: 1,
            scale: [0.4, 1.02, 1],
            y: [0, -10, 0],
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.5,
            y: {
              duration: 3.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.2,
            },
          }}
          className="col-start-1 row-start-1 z-10 w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl pointer-events-none px-4"
        >
          <img
            src={Macbook}
            alt="Feature Model"
            className="w-full h-auto object-contain mix-blend-screen opacity-90 scale-100 md:scale-110"
          />
        </motion.div>

        {/* LAYER 2: Text in Front of Image */}
        <motion.span
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="col-start-1 row-start-1 z-20 text-[clamp(2.5rem,8vw,9rem)] font-black uppercase text-white/20 select-none text-center tracking-tight leading-none pointer-events-none px-2"
        >
        </motion.span>

        {/* LAYER 3: CTA Content (Centered & Cleanly Spaced) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.03,
                delayChildren: 0,
              },
            },
          }}
          className="col-start-1 row-start-1 z-30 flex flex-col items-center text-center mt-auto pb-6 sm:pb-12 px-4 w-full"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 10 },
              visible: {
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: "spring", stiffness: 500, damping: 20 },
              },
            }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md"
          >
            ELEVATE YOUR STYLE
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.15 },
              },
            }}
            className="mt-2 mb-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-xs sm:max-w-md font-medium"
          >
            Experience the performance today.
          </motion.p>

          {/* Button Wrapper: Full-width stacked on phones, compact side-by-side on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-md md:max-w-none">
            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 600, damping: 15 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#shop"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-white hover:bg-stone-200 text-black font-semibold rounded-full shadow-2xl transition-all text-sm sm:text-base min-w-40"
            >
              Buy Now
            </motion.a>

            <motion.a
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { type: "spring", stiffness: 600, damping: 15 },
                },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#details"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white font-semibold rounded-full shadow-2xl transition-all text-sm sm:text-base min-w-40"
            >
              Explore Details
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;