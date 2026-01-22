import Navbar from "@/components/Navbar";
import { Instagram } from "lucide-react";
import { projectData } from "@/data/projectData";
import ProjectGallery from "@/components/ProjectGallery";
import Image from "next/image";

interface ProjectPageProps {
  params: { slug: string };
}

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectData[slug];

  const { title, url, request, description, media } = project;

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

  const introFoto = media.find((item) => item.type === "introFoto");
  const beforeFoto = media.find((item) => item.type === "before");
  const afterFoto = media.find((item) => item.type === "after");
  const bgImage = project.image;
  return (
    <main
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <section className="max-w-[85%] mx-auto py-20 px-2 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          {" "}
          <h1 className="text-4xl font-bold text-center">{title}</h1>{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            {" "}
            <Instagram size={20} /> Instagram{" "}
          </a>{" "}
        </div>
        {/* Заголовок та кнопка Instagram */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-15 mb-25">
          {introFoto && (
            <div className="flex justify-center md:justify-start w-full md:w-auto">
              <Image
                src={introFoto.src}
                alt="Головне фото"
                width={400}
                height={500}
                className="rounded-xl shadow-md w-full max-w-[300px] h-auto object-cover"
              />
            </div>
          )}

          <div className="flex flex-col gap-4 text-left">
            {request && (
              <div className="flex flex-col gap-2">
                <h3 className="text-pink-500 text-xl font-bold">Запити</h3>
                <div className="bg-gray-100 p-4 rounded-md whitespace-pre-line text-black text-left">
                  {request}
                </div>
              </div>
            )}
            {description && (
              <div className="flex flex-col gap-2">
                <h3 className="text-pink-500 text-xl font-bold">Що зробили</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-line text-black text-left">
                  {description}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Блок ДО/ПІСЛЯ */}
        {(beforeFoto || afterFoto) && (
          <div className="flex flex-col md:flex-row justify-center items-center gap-50 mb-16 relative">
            {beforeFoto && (
              <div className="flex flex-col items-center relative">
                <span className="absolute -top-15 text-5xl font-bold text-pink-500">
                  ДО
                </span>
                <Image
                  src={beforeFoto.src}
                  alt="До"
                  width={350}
                  height={450}
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
            )}
            {afterFoto && (
              <div className="flex flex-col items-center relative">
                <span className="absolute -top-15 text-5xl font-bold text-pink-500">
                  ПІСЛЯ
                </span>
                <Image
                  src={afterFoto.src}
                  alt="Після"
                  width={350}
                  height={450}
                  className="object-cover rounded-xl shadow-md"
                />
              </div>
            )}
          </div>
        )}
        {/* Галерея */}
        <ProjectGallery project={project} />
      </section>
    </main>
  );
}
