import Link from "next/link";
import Navbar from "@/components/Navbar";

const services = [
  { href: "/services/content", label: "Content Creation" },
  { href: "/services/analytics", label: "Analytics & Reporting" },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      <section className="max-w-5xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-pink-500 mb-8">My Services</h1>
        <ul className="flex flex-col md:grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <li
              key={service.href}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition"
            >
              <Link
                href={service.href}
                className="text-xl font-semibold text-gray-800 hover:text-pink-500"
              >
                {service.label}
              </Link>
              <p className="text-gray-600 mt-2">
                Click to see details about this service and examples of my work.
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
