import Image from "next/image";

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
                    <Image
                        src={`/cos-img-thumbnails/${img.src}`}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        unoptimized
                    />
                </a>
            ))}

        </div>
    );
}