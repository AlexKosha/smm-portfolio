"use client";

import Image, { StaticImageData } from "next/image";
import { Project } from "../types/projectTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import LazyVideo from "./LazyVideo"; // імпорт твого компонента

interface ImageItem {
  type: "storis" | "analitic" | "post" | "introFoto" | "before" | "after";
  src: string | StaticImageData;
  className?: string;
}

interface VideoItem {
  type: "video" | "realsVideo";
  src: string;
  className?: string;
}

type MediaItem = ImageItem | VideoItem;

interface ProjectGalleryProps {
  project: Project;
}

const optimizeImage = (url: string) => {
  if (typeof url !== "string") return url;

  if (url.includes("cloudinary")) {
    return url.replace("/upload/", "/upload/f_auto,q_auto,w_800/");
  }

  return url;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
  const { media } = project;
  const [showGallery, setShowGallery] = useState(false);

  // --- MAP пропорцій для кожного типу ---
  const styleMap: Record<string, string> = {
    storis: "aspect-[9/16] w-[260px] md:w-[260px]",
    analitic: "aspect-[3,5/5] w-[260px] md:w-[300px]",
    post: "aspect-[4/5] w-[320px] md:w-[380px]",
    video: "aspect-[9/16] w-[260px] md:w-[260px]",
    realsVideo: "aspect-[9/16] w-[260px] md:w-[260px]",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGallery(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const getStyle = (type: string) =>
    styleMap[type] || "aspect-[9/16] w-[260px]";

  // ---------- КАРУСЕЛІ ----------
  const renderCarousel = (type: MediaItem["type"], title: string) => {
    const items = media.filter((item) => item.type === type);
    if (!items.length) return null;

    return (
      <section>
        <h3 className="text-2xl font-bold text-pink-500 mb-8 text-center">
          {title}
        </h3>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
          >
            {items.map((item, i) => {
              const isVideo =
                typeof item.src === "string" && item.src.endsWith(".mp4");

              return (
                <SwiperSlide key={i}>
                  <div
                    className={`w-[260px] mx-auto rounded-xl overflow-hidden ${getStyle(
                      type,
                    )}`}
                  >
                    {isVideo ? (
                      <LazyVideo src={item.src as string} />
                    ) : (
                      <Image
                        src={optimizeImage(item.src as string)}
                        alt={title}
                        width={600}
                        height={1000}
                        sizes="(max-width: 768px) 260px, 300px"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex justify-center gap-8 flex-wrap">
          {items.map((item, i) => {
            const isVideo =
              typeof item.src === "string" && item.src.endsWith(".mp4");

            return (
              <div
                key={i}
                className={`rounded-xl overflow-hidden shadow-md w-[260px] ${getStyle(
                  type,
                )}`}
              >
                {isVideo ? (
                  <LazyVideo src={item.src as string} />
                ) : (
                  <Image
                    src={optimizeImage(item.src as string)}
                    alt={title}
                    width={600}
                    height={1000}
                    sizes="(max-width: 768px) 260px, 300px"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  // ---------- РІЛСИ / ВІДЕО ----------
  const renderBlock = (type: MediaItem["type"], title: string) => {
    const items = media.filter((item) => item.type === type);
    if (!items.length) return null;

    return (
      <section className="text-center">
        <h3 className="text-2xl font-bold text-pink-500 mb-8">{title}</h3>

        <div className="flex justify-center gap-8 flex-wrap">
          {items.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden shadow-md w-[260px] ${getStyle(
                type,
              )}`}
            >
              <LazyVideo src={item.src as string} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  if (!showGallery) {
    return (
      <div className="text-center py-20 text-gray-400">Завантаження...</div>
    );
  }

  return (
    <div className="flex flex-col gap-20 px-4 md:px-16">
      {renderBlock("realsVideo", "Рілс")}
      {renderCarousel("storis", "Сторіс")}
      {renderCarousel("analitic", "Аналітика")}
      {renderCarousel("post", "Пости")}
    </div>
  );
}
