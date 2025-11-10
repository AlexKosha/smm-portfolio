import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="text-center py-24 bg-gradient-to-r from-pink-100 to-white px-4 sm:px-6 lg:px-0">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Hello! I am <span className="text-pink-500">SMM-Specialist</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Helping brands establish a powerful social media presence through
          compelling content that engages audiences and drives conversions.
        </p>

        {/* Контейнер кнопок */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center">
          <Link
            href="/projects"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            See My Projects
          </Link>
          <Link
            href="/contact"
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
