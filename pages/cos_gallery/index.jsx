import Image from "next/image";

import Page from "@/components/Page";
import GallerySection from "@/components/GallerySection";
import styles from "./styles.module.scss";

export default function CosGallery() {
    return (
        <Page className={styles.CosGalleryPage}>

            <GallerySection title="2026-01-03 RG33 Zander Netherbrand 2.0" anchorId="rg33-zander-netherbrand-20">
                <div className={styles.GalleryGrid}>
                    {[
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00111a.jpg",
                            alt: "DSC00111a",
                            width: 200,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00113a.jpg",
                            alt: "DSC00113a",
                            width: 200,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00115a.jpg",
                            alt: "DSC00115a",
                            width: 200,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00120a.jpg",
                            alt: "DSC00120a",
                            width: 300,
                            height: 200,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2182a.jpg",
                            alt: "IMG_2182a",
                            width: 200,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2184a.jpg",
                            alt: "IMG_2184a",
                            width: 300,
                            height: 200,
                        },
                        {
                            src: "/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2185a.jpg",
                            alt: "IMG_2185a",
                            width: 200,
                            height: 300,
                        },
                    ].map((img) => (
                        <a
                            key={img.alt}
                            href={img.src}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={img.width}
                                height={img.height}
                            />
                        </a>
                    ))}

                </div>
            </GallerySection>

            <GallerySection title="2023-07-22 pre-ACGHK2023 Doppio Dropscythe" anchorId="dopi-dropscythe">
                <div className={styles.GalleryGrid}>
                    {[
                        {
                            src: "/cos-img/20230722-dopi/+PXL_20230722_144802776.jpg",
                            alt: "DSC00111a",
                            width: 225,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20230722-dopi/+PXL_20230722_145345500.jpg",
                            alt: "DSC00113a",
                            width: 225,
                            height: 300,
                        },
                        {
                            src: "/cos-img/20230722-dopi/+PXL_20230722_145354458.jpg",
                            alt: "DSC00115a",
                            width: 225,
                            height: 300,
                        },
                    ].map((img) => (
                        <Image
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                        />
                    ))}

                </div>
            </GallerySection>

        </Page>
    );
}