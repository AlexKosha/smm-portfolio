"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoplay?: boolean;
}

const getVideoPoster = (url: string) => {
  if (!url.includes("cloudinary")) return "";
  return url
    .replace("/video/upload/", "/video/upload/so_1/")
    .replace(".mp4", ".jpg");
};

export default function LazyVideo({
  src,
  poster,
  className = "",
  autoplay = false,
}: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      ref={containerRef}
    >
      {isVisible ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster || getVideoPoster(src)}
          controls
          preload="metadata"
          playsInline
          muted={autoplay}
          autoPlay={autoplay}
          loop={autoplay}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={poster || getVideoPoster(src)}
          className="w-full h-full object-cover"
          alt="video poster"
        />
      )}
    </div>
  );
}
