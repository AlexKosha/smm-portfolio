import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";

interface CardInfo {
  image: string | StaticImageData;
  title: string;
  slug: string;
}

export default function ProjectCard({ image, title, slug }: CardInfo) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="object-cover w-full h-60"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h3>
        {slug && (
          <Link
            href={`/projects/${slug}`}
            className="text-pink-500 font-semibold hover:underline"
          >
            Переглянути
          </Link>
        )}
      </div>
    </div>
  );
}
