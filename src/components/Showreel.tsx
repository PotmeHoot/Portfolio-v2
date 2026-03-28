import { motion } from "motion/react";
import { Play, Maximize2, Volume2 } from "lucide-react";
import { SectionWrapper } from "./ui/SectionWrapper";
import { copy } from "../data/copy";
import { SafeImage } from "./ui/SafeImage";
import { VideoPlaceholder } from "./portfolio/ProjectPlaceholders";
import { useState } from "react";

export const Showreel = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { showreel } = copy;

  // Placeholder poster and video paths
  const posterPath = "/assets/showreel/poster.jpg";
  const videoPath = "/assets/showreel/reel.mp4";

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

          <div className="grid grid-cols-2 gap-4 mb-12">
            {showreel.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-3 text-text-secondary">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          <button className="btn-secondary group">
            <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
            {showreel.cta}
          </button>
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
            {!isVideoPlaying ? (
              <div className="relative w-full h-full cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <SafeImage
                  src={posterPath}
                  alt="Showreel Poster"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
                  errorFallback={<VideoPlaceholder />}
                />
                
                {/* Play Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
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
            ) : (
              <div className="w-full h-full">
                {videoError ? (
                  <VideoPlaceholder />
                ) : (
                  <video
                    src={videoPath}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    onError={() => setVideoError(true)}
                  />
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
