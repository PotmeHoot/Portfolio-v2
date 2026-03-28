import { useState, ReactNode } from "react";
import { cn } from "../../lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  errorFallback?: ReactNode;
  containerClassName?: string;
  loading?: "lazy" | "eager";
  [key: string]: any; // Allow other standard props
}

export const SafeImage = ({ 
  src, 
  alt, 
  className, 
  fallbackSrc, 
  errorFallback,
  containerClassName,
  ...props 
}: SafeImageProps) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-white/5", containerClassName)}>
      {/* Loading Shimmer/Placeholder */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer z-10" />
      )}
      
      {/* Error State: Clean Internal Placeholder UI */}
      {error && !fallbackSrc && (
        <div className="absolute inset-0 z-0">
          {errorFallback ? (
            errorFallback
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02]">
              <div className="flex flex-col items-center gap-2 opacity-20">
                <ImageIcon className="w-5 h-5 text-white" strokeWidth={1.5} />
                <span className="text-[8px] uppercase tracking-[0.3em] font-bold text-white">Missing Asset</span>
              </div>
            </div>
          )}
        </div>
      )}
      
      <img
        src={error ? (fallbackSrc || undefined) : (src || undefined)}
        alt={alt}
        className={cn(
          "transition-opacity duration-700",
          loaded && !error ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!error) {
            setError(true);
          }
        }}
        referrerPolicy="no-referrer"
        style={error && !fallbackSrc ? { display: 'none' } : {}}
        {...props}
      />
    </div>
  );
};
