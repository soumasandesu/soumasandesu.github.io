import Image from "next/image";

import Page from "@/components/Page";
import Section from "@/components/Section";
import styles from "./styles.module.scss";

export default function CosGallery() {
    return (
        <Page className={styles.CosGalleryPage}>
            
            <Section>
                <h1>2026-01-03 RG33 Zander Netherbrand 2.0</h1>
                <div className={styles.GalleryGrid}>
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00111a.jpg"
                        alt="DSC00111a"
                        width={200}
                        height={300}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00113a.jpg"
                        alt="DSC00113a"
                        width={200}
                        height={300}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00115a.jpg"
                        alt="DSC00115a"
                        width={200}
                        height={300}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/DSC00120a.jpg"
                        alt="DSC00120a"
                        width={400}
                        height={267}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2182a.jpg"
                        alt="IMG_2182a"
                        width={200}
                        height={300}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2184a.jpg"
                        alt="IMG_2184a"
                        width={400}
                        height={267}
                    />
                    <Image
                        src="/cos-img/20260103-rg33-awe-zandernetherbrand20/IMG_2185a.jpg"
                        alt="IMG_2185a"
                        width={200}
                        height={300}
                    />
                </div>
            </Section>
        </Page>
    );
}