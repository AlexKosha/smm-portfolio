import Image, { StaticImageData } from "next/image";

interface ImageItem {
  type: "storis" | "analitic" | "post";
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
  media: MediaItem[];
}

export default function ProjectGallery({ media }: ProjectGalleryProps) {
  const getRandomOffsetClass = (index: number) => {
    const classes = [
      "translate-y-[-10px] rotate-[-2deg]",
      "translate-y-[5px] rotate-[3deg]",
      "translate-y-[-5px] rotate-[1deg]",
    ];
    return classes[index % classes.length];
  };

  const renderSection = (type: MediaItem["type"], title: string) => {
    const items = media.filter((item) => item.type === type);
    if (!items.length) return null;

    return (
      <section className="mb-16 text-center">
        <h3 className="text-2xl font-bold text-pink-500 mb-8">{title}</h3>
        <div className="flex justify-center gap-8 flex-wrap">
          {items.map((item, i) => {
            if (item.type === "video" || item.type === "realsVideo") {
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl shadow-md ${
                    item.className || ""
                  }`}
                >
                  <video
                    controls
                    className="w-64 h-[360px] md:w-72 md:h-[400px] object-cover rounded-xl shadow-md"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              );
            } else {
              return (
                <div
                  key={i}
                  className={`overflow-hidden rounded-xl shadow-md ${
                    item.className || ""
                  } ${getRandomOffsetClass(i)}`}
                >
                  <Image
                    src={item.src}
                    alt={title + " image"}
                    width={250}
                    height={400} // смартфон-формат портрет
                    className="object-cover w-full h-auto"
                  />
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  };

  return (
    <div className="flex flex-col gap-16">
      {renderSection("video", "Відео")}
      {renderSection("storis", "Сторіс")}
      {renderSection("analitic", "Аналітика")}
      {renderSection("realsVideo", "Ріалс")}
      {renderSection("post", "Пости")}
    </div>
  );
}
