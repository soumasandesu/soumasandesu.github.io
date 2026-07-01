import ImageWithFallback from "./ImageWithFallback";

import styles from "./styles.module.scss";

export default function GalleryGrid({
    images,
    ...props
}) {
    return (
        <div className={styles.GalleryGrid}>
            {images.map((img) => (
                <a
                    key={img.alt}
                    href={`/cos-img/${img.src}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ImageWithFallback
                        src={`/cos-img-thumbnails/${img.src}`}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        unoptimized
                        fallbackSrc={`/cos-img/${img.src}`}
                    />
                </a>
            ))}

        </div>
    );
}