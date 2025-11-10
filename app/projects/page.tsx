import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import Image1 from "../favicon.ico";
import Image2 from "../favicon.ico";
import Image3 from "../favicon.ico";

export default function ProjectsPage() {
  const projects = [
    {
      image: Image1,
      title: "Beauty Studio Instagram",
      description:
        "Розробила контент-план, створила стиль профілю та збільшила охоплення на 250%.",
      link: "/projects/beauty-studio", // можна поставити реальне посилання
    },
    {
      image: Image2,
      title: "Ресторан Milano",
      description:
        "Запустила Reels-кампанію, яка залучила понад 30 000 переглядів та збільшила кількість бронювань.",
      link: "/projects/milano",
    },
    {
      image: Image3,
      title: "Особистий бренд коуча",
      description:
        "Створила tone of voice, контент-стратегію та органічно зросла аудиторія на 3K.",
      link: "/projects/milano",
    },
  ];

  return (
    <main>
      <Navbar />
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Мої <span className="text-pink-500">кейси</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
