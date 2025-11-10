import { StaticImageData } from "next/image";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image1 from "../../favicon.ico"; // заміни на свої реальні фото або імпорти
import Image2 from "../../favicon.ico"; // заміни на свої реальні фото або імпорти
import ProjectGallery from "@/components/ProjectGallery";

export type MediaItem =
  | { type: "video"; src: string; className?: string }
  | {
      type: "storis" | "analitic" | "post";
      src: string | StaticImageData;
      className?: string;
    }
  | { type: "realsVideo"; src: string; className?: string };

export interface Project {
  title: string;
  url: string;
  description: string;
  media: MediaItem[];
}

export const projectData: Record<string, Project> = {
  milano: {
    title: "Ресторан Milano",
    url: "https://www.instagram.com",
    description: `
      Кейc для ресторану: створено Reels-кампанію з понад 30k переглядів 🍝
      Розроблено tone of voice, фото- та відеоконтент, контент-план.
    `,
    media: [
      { type: "video", src: "/videos/intro.mp4", className: "top-video" },
      { type: "storis", src: Image1, className: "stories" },
      { type: "storis", src: Image2, className: "stories" },
      { type: "storis", src: Image2, className: "stories" },
      { type: "storis", src: Image2, className: "stories" },
      { type: "storis", src: Image2, className: "stories" },
      { type: "analitic", src: Image1, className: "reels" },
      { type: "analitic", src: Image1, className: "reels" },
      { type: "analitic", src: Image1, className: "reels" },
      { type: "realsVideo", src: "/videos/reels.mp4", className: "reels" },
      { type: "realsVideo", src: "/videos/reels.mp4", className: "reels" },
      { type: "post", src: Image2, className: "analytics" },
      { type: "post", src: Image1, className: "analytics" },
      { type: "post", src: Image1, className: "analytics" },
      { type: "post", src: Image2, className: "analytics" },
    ],
  },
};
interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectData[slug];

  if (!project) {
    return (
      <main>
        <Navbar />
        <div className="max-w-3xl mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Проект не знайдено 😢
          </h2>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        {/* Заголовок і кнопка Instagram */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <h2 className="text-4xl font-bold text-pink-500">{project.title}</h2>
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              className="bg-pink-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-600 transition flex items-center gap-2"
            >
              Instagram
              <Instagram size={20} />
            </Link>
          )}
        </div>

        {/* Опис */}
        <p className="text-gray-700 whitespace-pre-line mb-10">
          {project.description}
        </p>

        {/* Галерея */}
        <ProjectGallery media={project.media} />
        <Link
          href="/contact"
          className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
        >
          Contact
        </Link>
      </section>
    </main>
  );
}
