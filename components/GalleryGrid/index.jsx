import path from 'path';

import ImageWithFallback from "./ImageWithFallback";

import styles from "./styles.module.scss";

export default function GalleryGrid({
    images,
    ...props
}) {
    return (
        <div className={styles.GalleryGrid}>
            {images.map(({
                alt,
                src,
                width,
                height,
            }) => {
                const full = path.join('/cos-img', '2048', src);
                const thumb = path.join('/cos-img', '400', src);

                return (
                    <a
                        key={alt}
                        href={full}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ImageWithFallback
                            src={thumb}
                            alt={alt}
                            width={width}
                            height={height}
                            unoptimized
                            fallbackSrc={full}
                        />
                    </a>
                );
            })}

        </div>
    );
}