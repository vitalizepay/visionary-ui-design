import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroVideo from "../../public/hero-video.mp4.asset.json";
import heroVideoCars from "../../public/hero-video-cars.mp4.asset.json";
import heroVideoShip from "../../public/hero-video-ship.mp4.asset.json";
import heroVideoAiSensors from "../../public/hero-video-ai-sensors.mp4.asset.json";

const heroVideos = [
  heroVideo.url,
  heroVideoCars.url,
  heroVideoAiSensors.url,
  heroVideoShip.url,
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 8000);
    return () => clearInterval(interval);
  }, [advance]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Video backgrounds with crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.video
          key={currentIndex}
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideos[currentIndex]}
        />
      </AnimatePresence>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase"
          >
            Dillon & Bird
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Driving Unprecedented Growth and Innovation Across the GCC.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg font-semibold text-foreground/90"
          >
            Strategic Partnership | Sustainable Value | Future-Forward Solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 max-w-lg text-base text-muted-foreground"
          >
            Your dedicated strategic partner in the GCC. We blend finance, tech,
            and marketing to unlock your growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Let's Grow
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-full border border-foreground/20 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
            >
              Our Services
            </a>
          </motion.div>
        </div>
      </div>

      {/* Video indicator dots */}
      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-10 w-6 rounded-full border-2 border-foreground/30 flex justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
