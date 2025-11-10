import Navbar from "@/components/Navbar";
import Image from "next/image";
import Image1 from "../../favicon.ico";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <main>
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-pink-500 mb-6">
          Analytics & Reporting
        </h1>
        <p className="text-gray-700 mb-8">
          I provide detailed analytics and reporting for social media campaigns:
          growth tracking, engagement metrics, and recommendations to optimize
          results.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <Image
            src={Image1}
            alt="Analytics example"
            className="rounded-xl shadow-md"
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-700">
              Example: analyzing past campaigns helped a client increase
              conversions by 20%.
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
