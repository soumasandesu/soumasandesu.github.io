import Head from "next/head";
import Image from "next/image";
import ClassNames from "classnames";

import useEmblaCarousel from "embla-carousel-react";

import Page from "@/components/Page";

import styles from "./styles.module.scss";

export default function ThreeDShowcases() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    return (
        <Page className={styles.ThreeDShowcasesPage} dark>
            <Head>
                <title>3D Showcases</title>
            </Head>

            <div className={styles.ShowcaseContainer}>
            </div>

            <div className={styles.Embla}>
                <div className={styles.Viewport} ref={emblaRef}>
                    <div className={styles.Container}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((src, i) => (
                            <div className={ClassNames(styles.Slide)} key={i}>
                                <div className={styles.AvatarImageContainer} onClick={() => emblaApi.scrollTo(i)}>
                                    <Image
                                        src={src}
                                        alt=""
                                        fill
                                        unoptimized
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Page>
    );
}