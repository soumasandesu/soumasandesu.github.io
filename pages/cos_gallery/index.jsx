import Head from "next/head";

import Page from "@/components/Page";
import GalleryGrid from "@/components/GalleryGrid";
import GallerySection from "@/components/GallerySection";

import styles from "./styles.module.scss";
import gallerySections from "./defs.yaml";

export default function CosGallery() {
    return (
        <Page className={styles.CosGalleryPage} dark>
            <Head>
                <title>Cos Gallery</title>
            </Head>

            {gallerySections.map(({
                title,
                anchorId,
                images,
            }) => (
                <GallerySection key={anchorId} title={title} anchorId={anchorId}>
                    <GalleryGrid images={images} />
                </GallerySection>
            ))}
        </Page>
    );
}