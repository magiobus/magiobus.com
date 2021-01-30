import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

import BlogImage from '@/components/BlogImage';
import SoundCloudPlayer from '@/components/SoundCloudPlayer';
import ProsCard from '@/components/ProsCard';
import ConsCard from '@/components/ConsCard';
import Gumroad from '@/components/metrics/Gumroad';
import Unsplash from '@/components/metrics/Unsplash';
import YouTube from '@/components/metrics/Youtube';
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
  Gumroad,
  ProsCard,
  Step,
  Tweet,
  Unsplash,
  YouTube
};

export default MDXComponents;
