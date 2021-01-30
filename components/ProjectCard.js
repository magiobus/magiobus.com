import Image from 'next/image';
import Link from 'next/link';


export default function ProjectCard({ title, description, href, imageUrl, target ="_blank" }) {
  return (
    <Link href={href}>
      <a
        className="mb-4 hover:shadow"
        aria-label={title}
        rel="noopener noreferrer"
      >
        <div className="flex items-center border border-gray-200 dark:border-gray-800 rounded py-4 px-2">
          {imageUrl && (
              <div className="mx-4">
                <Image
                  src={imageUrl}
                  alt="magiobusprojects"
                  width={80}
                  height={80}
                  layout="fixed"
                  className="rounded-full"
                />
              </div>
          )}
          <div>
            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {title}
            </h4>
            <p className="leading-5 text-gray-700 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
