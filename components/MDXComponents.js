import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import BlogImage from '@/components/BlogImage';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';
import ProsCard from '@/components/ProsCard';
import ConsCard from '@/components/ConsCard';
import Step from '@/components/Step';

const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  BlogImage,
  SoundCloudPlayer,
  a: CustomLink,
  ConsCard,
  ProsCard,
  Step,
};

export default MDXComponents;
