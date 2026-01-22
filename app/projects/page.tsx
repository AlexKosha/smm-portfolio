import Navbar from "../../components/Navbar";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <section className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Мої <span className="text-pink-500">кейси</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
