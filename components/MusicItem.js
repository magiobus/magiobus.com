import Image from 'next/image';

const MusicItem = ({imageUrl, title, year, credit, href}) => {
    return (
        <a
            className="mb-4 hover:shadow"
            href={href}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className="flex flex-col items-center justify-center border  border-gray-200 dark:border-gray-800 rounded py-4 px-2  sm: w-96 md:w-72 h-96">
                {imageUrl && (
                    <div className="mx-4">
                        <Image
                            src={imageUrl}
                            alt="magiobusprojects"
                            width={200}
                            height={200}
                            layout="fixed"
                        />
                    </div>
                )}
                <div className="p-5">
                    <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        {title} {year && `(${year})`}
                    </h4>
                    {credit && (
                        <p className="leading-5 text-gray-700 dark:text-gray-300">
                            <strong>Credit: </strong> {credit}
                        </p>
                    )}
                </div>
            </div>
        </a>

    )

} 

export default MusicItem