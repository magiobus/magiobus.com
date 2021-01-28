import Image from 'next/image';

const BlogImage = ({alt, src, width, height, caption}) => {
    return (
        <figure>
            <Image
            alt={alt}
            src={src}
            width={width}
            height={height}
            />
            {caption && (
                <figcaption>{caption}</figcaption>
            )}
        </figure>
    )
}

export default BlogImage;