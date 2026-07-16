import Head from "next/head";
import Image from "next/image";
import ClassNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import ReactMarkdown from "react-markdown";
import { useDebounce } from "use-debounce";

import Page from "@/components/Page";
import Online3dViewer from "@/components/Online3dViewer";
import { useDotButton } from "@/utils/emblaApi/useDotButton";

import assets from "./defs.yaml";
import styles from "./styles.module.scss";

const renderShowcaseAndDescription = (selectedIndex) => {
    if (!Array.isArray(assets) || selectedIndex < 0 || selectedIndex >= assets.length) return null;

    const {
        stl,
        files,
        description,
    } = assets[selectedIndex];

    return (
        <>
            <div className={styles.Showcase}>
                <Online3dViewer
                    modelUrls={stl}
                />
            </div>
            <div className={styles.Description}>
                {description && (
                    <ReactMarkdown>
                        {description}
                    </ReactMarkdown>
                )}
                {description && files && files.length > 0 && (
                    <hr />
                )}
                <h3>Files</h3>
                <ul className={styles.FilesList}>
                    {files.map((file, i) => (
                        <li key={i}>
                            <a href={file} target="_blank" rel="noopener noreferrer">
                                {file}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default function ThreeDShowcases() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });
    const { selectedIndex, onDotButtonClick } = useDotButton(emblaApi);
    const [debouncedSelectedIndex] = useDebounce(selectedIndex, 3000);

    return (
        <Page className={styles.ThreeDShowcasesPage} dark>
            <Head>
                <title>3D Showcases</title>
            </Head>

            <div className={styles.ShowcaseContainer}>
                {renderShowcaseAndDescription(debouncedSelectedIndex)}
            </div>

            <div className={styles.Embla}>
                <div className={styles.Viewport} ref={emblaRef}>
                    <div className={styles.Container}>
                        {assets.map(({ img }, i) => (
                            <div className={ClassNames(styles.Slide, { [styles.Selected]: i === debouncedSelectedIndex })} key={i}>
                                <div className={styles.AvatarImageContainer} onClick={() => onDotButtonClick(i)}>
                                    <Image
                                        src={img}
                                        alt={img}
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