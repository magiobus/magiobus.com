import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Acerca
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/magiobus">Twitter</ExternalLink>
          <ExternalLink href="https://instagram.com/magiobus">Instagram</ExternalLink>
          <ExternalLink href="https://www.youtube.com/magiobus">YouTube</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitch.tv/magiobus">Twitch</ExternalLink>
          <ExternalLink href="https://github.com/magiobus">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/magiobus/">Linkedin</ExternalLink>
        </div>
      </div>
    </footer>
  );
}
