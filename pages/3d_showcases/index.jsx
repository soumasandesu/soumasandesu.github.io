import Head from "next/head";
import Image from "next/image";
import ClassNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { useDebounce } from "use-debounce";

import Page from "@/components/Page";
import Online3dViewer from "@/components/Online3dViewer";
import { useDotButton } from "@/utils/emblaApi/useDotButton";

import styles from "./styles.module.scss";

const assets = [
    {
        stl: '/3d/gavisbettel/accessory_suite_1_spade.stl',
        img: '/3d/gavisbettel/accessory_suite_1_spade.png',
        files: [
            '/3d/gavisbettel/accessory_suite_1_spade.stl',
            '/3d/gavisbettel/accessory_suite_1_spade.mqoz',
        ],
        description: `
            test description for accessory_suite_1_spade.stl
        `
    },
    {
        stl: '/3d/gavisbettel/accessory_suite_2_diamond.stl',
        img: '/3d/gavisbettel/accessory_suite_2_diamond.png',
        files: [
            '/3d/gavisbettel/accessory_suite_2_diamond.stl',
            '/3d/gavisbettel/accessory_suite_2_diamond.mqoz',
        ],
        description: `
            test description for accessory_suite_2_diamond.stl
        `
    },
    {
        stl: '/3d/gavisbettel/accessory_suite_3_club.stl',
        img: '/3d/gavisbettel/accessory_suite_3_club.png',
        files: [
            '/3d/gavisbettel/accessory_suite_3_club.stl',
            '/3d/gavisbettel/accessory_suite_3_club.mqoz',
        ],
        description: `
            test description for accessory_suite_3_club.stl
        `
    },
    {
        stl: '/3d/gavisbettel/accessory_suite_4_heart.stl',
        img: '/3d/gavisbettel/accessory_suite_4_heart.png',
        files: [
            '/3d/gavisbettel/accessory_suite_4_heart.stl',
            '/3d/gavisbettel/accessory_suite_4_heart.mqoz',
        ],
        description: `
            test description for accessory_suite_4_heart.stl
        `
    },
    {
        stl: '/3d/gavisbettel/柄.stl',
        img: '/3d/gavisbettel/柄.png',
        files: [
            '/3d/gavisbettel/柄.stl',
            '/3d/gavisbettel/柄.mqoz',
        ],
        description: `
            test description for 柄.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/aries-horn-v1c-left.stl',
        img: '/3d/zandernetherbrand/2/aries-horn-v1c-left.png',
        files: [
            '/3d/zandernetherbrand/2/aries-horn-v1c-left.stl',
            '/3d/zandernetherbrand/2/aries-horn-v1c-left.mqoz',
        ],
        description: `
            test description for 2/aries-horn-v1c-left.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/aries-horn-v1c-right.stl',
        img: '/3d/zandernetherbrand/2/aries-horn-v1c-right.png',
        files: [
            '/3d/zandernetherbrand/2/aries-horn-v1c-right.stl',
            '/3d/zandernetherbrand/2/aries-horn-v1c-right.mqoz',
        ],
        description: `
            test description for 2/aries-horn-v1c-right.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan-norm-all-tail-nohollow-20251125.stl',
        img: '/3d/zandernetherbrand/2/zan-norm-all-tail-nohollow-20251125.png',
        files: [
            '/3d/zandernetherbrand/2/zan-norm-all-tail-nohollow-20251125.stl',
            '/3d/zandernetherbrand/2/zan-norm-all-tail-nohollow-20251125.mqoz',
        ],
        description: `
            test description for 2/zan-norm-all-tail-nohollow-20251125.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2_c1.stl',
        img: '/3d/zandernetherbrand/2/zan2_c1.png',
        files: [
            '/3d/zandernetherbrand/2/zan2_c1.stl',
            '/3d/zandernetherbrand/2/zan2_c1.mqoz',
        ],
        description: `
            test description for 2/zan2_c1.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2_c2.stl',
        img: '/3d/zandernetherbrand/2/zan2_c2.png',
        files: [
            '/3d/zandernetherbrand/2/zan2_c2.stl',
            '/3d/zandernetherbrand/2/zan2_c2.mqoz',
        ],
        description: `
            test description for 2/zan2_c2.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2_x1.stl',
        img: '/3d/zandernetherbrand/2/zan2_x1.png',
        files: [
            '/3d/zandernetherbrand/2/zan2_x1.stl',
            '/3d/zandernetherbrand/2/zan2_x1.mqoz',
        ],
        description: `
            test description for 2/zan2_x1.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-l1.stl',
        img: '/3d/zandernetherbrand/2/zan2-l1.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-l1.stl',
            '/3d/zandernetherbrand/2/zan2-l1.mqoz',
        ],
        description: `
            test description for 2/zan2-l1.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-l2.stl',
        img: '/3d/zandernetherbrand/2/zan2-l2.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-l2.stl',
            '/3d/zandernetherbrand/2/zan2-l2.mqoz',
        ],
        description: `
            test description for 2/zan2-l2.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-l3.stl',
        img: '/3d/zandernetherbrand/2/zan2-l3.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-l3.stl',
            '/3d/zandernetherbrand/2/zan2-l3.mqoz',
        ],
        description: `
            test description for 2/zan2-l3.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-r1.stl',
        img: '/3d/zandernetherbrand/2/zan2-r1.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-r1.stl',
            '/3d/zandernetherbrand/2/zan2-r1.mqoz',
        ],
        description: `
            test description for 2/zan2-r1.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-r2.stl',
        img: '/3d/zandernetherbrand/2/zan2-r2.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-r2.stl',
            '/3d/zandernetherbrand/2/zan2-r2.mqoz',
        ],
        description: `
            test description for 2/zan2-r2.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2/zan2-r3.stl',
        img: '/3d/zandernetherbrand/2/zan2-r3.png',
        files: [
            '/3d/zandernetherbrand/2/zan2-r3.stl',
            '/3d/zandernetherbrand/2/zan2-r3.mqoz',
        ],
        description: `
            test description for 2/zan2-r3.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/cass-1-20250907.stl',
        img: '/3d/zandernetherbrand/2024halloween/cass-1-20250907.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/cass-1-20250907.stl',
            '/3d/zandernetherbrand/2024halloween/cass-1-20250907.mqoz',
        ],
        description: `
            test description for 2024halloween/cass-1-20250907.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/cass-2-20250907.stl',
        img: '/3d/zandernetherbrand/2024halloween/cass-2-20250907.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/cass-2-20250907.stl',
            '/3d/zandernetherbrand/2024halloween/cass-2-20250907.mqoz',
        ],
        description: `
            test description for 2024halloween/cass-2-20250907.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/cass-3-20250905.stl',
        img: '/3d/zandernetherbrand/2024halloween/cass-3-20250905.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/cass-3-20250905.stl',
            '/3d/zandernetherbrand/2024halloween/cass-3-20250905.mqoz',
        ],
        description: `
            test description for 2024halloween/cass-3-20250905.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/zanny-1-20250905.stl',
        img: '/3d/zandernetherbrand/2024halloween/zanny-1-20250905.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/zanny-1-20250905.stl',
            '/3d/zandernetherbrand/2024halloween/zanny-1-20250905.mqoz',
        ],
        description: `
            test description for 2024halloween/zanny-1-20250905.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/zanny-2-20250905.stl',
        img: '/3d/zandernetherbrand/2024halloween/zanny-2-20250905.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/zanny-2-20250905.stl',
            '/3d/zandernetherbrand/2024halloween/zanny-2-20250905.mqoz',
        ],
        description: `
            test description for 2024halloween/zanny-2-20250905.stl
        `
    },
    {
        stl: '/3d/zandernetherbrand/2024halloween/zanny-3.stl',
        img: '/3d/zandernetherbrand/2024halloween/zanny-3.png',
        files: [
            '/3d/zandernetherbrand/2024halloween/zanny-3.stl',
            '/3d/zandernetherbrand/2024halloween/zanny-3.mqoz',
        ],
        description: `
            test description for 2024halloween/zanny-3.stl
        `
    },
];

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
                <div className={styles.Showcase}>
                    <Online3dViewer
                        modelUrls={assets[debouncedSelectedIndex].stl}
                    />
                </div>
                <div className={styles.Description}>
                    {assets[selectedIndex].description}
                    <hr />
                    <h3>Files</h3>
                    <ul className={styles.FilesList}>
                        {assets[selectedIndex].files.map((file, i) => (
                            <li key={i}>
                                <a href={file} target="_blank" rel="noopener noreferrer">
                                    {file}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className={styles.Embla}>
                <div className={styles.Viewport} ref={emblaRef}>
                    <div className={styles.Container}>
                        {assets.map(({ img }, i) => (
                            <div className={ClassNames(styles.Slide)} key={i}>
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