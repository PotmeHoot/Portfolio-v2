import { motion, useInView } from "motion/react";
import { Maximize2, Volume2 } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { copy } from "../data/copy";
import { SafeImage } from "./ui/SafeImage";
import { VideoPlaceholder } from "./portfolio/ProjectPlaceholders";
import { useState, useRef, useEffect } from "react";

export const Showreel = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { amount: 0.5 });
  const [videoError, setVideoError] = useState(false);
  const { showreel } = copy;

  // Placeholder poster and video paths
  const posterPath = "/assets/showreel/poster.jpg";
  const videoPath = "/assets/showreel/reel.mp4";

  useEffect(() => {
    if (!videoRef.current || videoError) return;

    if (isInView) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
          console.log("Autoplay prevented by browser");
        });
      }
    } else {
      videoRef.current.pause();
    }
  }, [isInView, videoError]);

  return (
    <SectionWrapper id="showreel" className="bg-bg-secondary/50">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-eyebrow">
            <div className="section-eyebrow-line" />
            {showreel.eyebrow}
          </div>
          <h2 className="section-title text-white">
            {showreel.title}
          </h2>
          <p className="section-description mb-12">
            {showreel.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            {showreel.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video group"
        >
          <div className="absolute -inset-4 bg-white/[0.02] rounded-[40px] blur-2xl -z-10 group-hover:bg-white/[0.04] transition-colors duration-700" />
          
          <div className="relative w-full h-full rounded-[32px] overflow-hidden border border-white/10 bg-black shadow-2xl">
            {videoError ? (
              <VideoPlaceholder />
            ) : (
              <div className="relative w-full h-full">
                <video
                  ref={videoRef}
                  src={videoPath}
                  poster={posterPath}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                  onError={() => setVideoError(true)}
                />
                
                {/* Subtle Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Volume2 className="w-4 h-4 text-white/40" />
                      </div>
                      <span className="text-xs font-bold tracking-widest uppercase text-white/40">Motion Reel 2024</span>
                    </div>
                    <Maximize2 className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
