"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Heroes = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const [videoSrc, setVideoSrc] = useState("/preview.mp4");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 60% of the component is in view
  });

  // State to track if the video should play
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        rotateX: 0,
        y: 0,
        transition: { duration: 1 },
      });
      setIsPlaying(true); // Start playing the video when the tablet straightens
    }
  }, [inView, controls]);

  useEffect(() => {
    if (videoRef.current && isPlaying) {
      videoRef.current.play(); // Play the video when it’s ready to start
    }
  }, [isPlaying]);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        setVideoSrc("/preview-mobile.mp4"); // Mobile video
      } else {
        setVideoSrc("/preview.mp4"); // Desktop video
      }
    };

    // Set video source on initial load
    handleResize();

    // Update video source on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
      <div className="flex items-center">
        <motion.div
          ref={ref}
          className="relative w-[80vw] h-[80vh] sm:w-[80vw] sm:h-[80vh] md:h-[80vh] md:w-[80vw] border-[20px] border-slate-800 rounded-[30px] overflow-hidden shadow-2xl"
          initial={{ rotateX: 45, y: 50 }} // Initially flat and slightly off the screen
          animate={controls} // Controls animation on scroll
        >
          <video
            ref={videoRef}
            src={videoSrc}
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Heroes;
