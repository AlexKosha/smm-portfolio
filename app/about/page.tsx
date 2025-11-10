import Navbar from "@/components/Navbar";
import Image from "next/image";
import profilePic from "../favicon.ico";
import Link from "next/link";

export default function AbouutPage() {
  return (
    <main>
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-0 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-shrink-0">
          <Image
            src={profilePic}
            alt="SMM Specialist"
            width={300}
            height={300}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-green-900">
            Hello! I am <span className="text-pink-500">SMM-Specialist</span>
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Helping brands establish a powerful social media presence through
            compelling content that engages audiences and drives conversions.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            facere similique voluptatum? Sed quibusdam minus obcaecati ratione
            nam atque ullam dolore qui enim ut, neque tempora recusandae
            nesciunt maxime dicta!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center md:justify-start">
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
        </div>
      </section>
    </main>
  );
}
