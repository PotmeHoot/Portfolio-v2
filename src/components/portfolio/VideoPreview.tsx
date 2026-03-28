import { motion } from "motion/react";
import { RefObject, useState } from "react";
import { VideoPlaceholder } from "./ProjectPlaceholders";

interface VideoPreviewProps {
  src: string;
  isVisible: boolean;
  onLoadedMetadata: () => void;
  onError: () => void;
  videoRef: RefObject<HTMLVideoElement | null>;
}

export const VideoPreview = ({
  src,
  isVisible,
  onLoadedMetadata,
  onError,
  videoRef,
}: VideoPreviewProps) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError();
  };

  if (hasError) {
    return <VideoPlaceholder className={isVisible ? "opacity-100" : "opacity-0"} />;
  }

  return (
    <motion.video
      ref={videoRef}
      src={src || undefined}
      loop
      muted
      playsInline
      preload="auto"
      onLoadedMetadata={onLoadedMetadata}
      onError={handleError}
      initial={{ opacity: 0, filter: "blur(0px)" }}
      animate={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? ["blur(4px)", "blur(0px)"] : "blur(0px)",
      }}
      transition={{
        opacity: { duration: 0.5 },
        filter: { duration: 0.4 },
      }}
      style={{ 
        willChange: "opacity, filter",
        // Prevent broken video icon from showing
        backgroundColor: "transparent" 
      }}
      className="w-full h-full object-cover"
    />
  );
};
