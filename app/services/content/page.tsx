import Navbar from "@/components/Navbar";
import Image from "next/image";
import Image1 from "../../favicon.ico";
import Link from "next/link";

export default function ContentCreationPage() {
  return (
    <main>
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">
          Content Creation
        </h1>
        <p className="text-gray-700 mb-8">
          I help brands create engaging content for social media: posts, reels,
          stories, and graphics tailored to the brands style and audience.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={Image1}
            alt="Content Creation example"
            className="rounded-xl shadow-md"
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-700">
              Example: content strategy and visuals increased engagement by 30%
              for a client.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
