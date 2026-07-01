import path from 'path';

import ImageWithFallback from "./ImageWithFallback";

import styles from "./styles.module.scss";

export default function GalleryGrid({
    images,
    ...props
}) {
    return (
        <div className={styles.GalleryGrid}>
            {images.map((img) => {
                const full = path.join('/cos-img', img.src);
                const thumb = path.join('/cos-img-thumbnails', img.src);

                return (
                    <a
                        key={img.alt}
                        href={full}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ImageWithFallback
                            src={thumb}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            unoptimized
                            fallbackSrc={full}
                        />
                    </a>
                );
            })}

        </div>
    );
}