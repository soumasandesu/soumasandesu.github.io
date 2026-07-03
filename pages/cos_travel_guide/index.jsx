import Head from "next/head";
import Link from "next/link";
import Page from "@/components/Page";

import styles from "./styles.module.scss";

export default function CosGallery() {
    return (
        <Page className={styles.CosTravelGuidePage}>
            <Head>
                <title>Cos Travel Guide</title>
            </Head>

            <div className={styles.Diary}>
                <div className={styles.Header}>
                    Table of Contents 目錄
                </div>
                <div className={styles.Content}>
                    <ul>
                        <li>
                            <Link href="/cos_travel_guide/hongkong">
                                Hong Kong 香港
                            </Link>
                        </li>
                        <li>
                            <Link href="/cos_travel_guide/taiwan">
                                Taiwan 台灣
                            </Link>
                        </li>
                        <li>
                            <Link href="/cos_travel_guide/japan">
                                Japan 日本
                            </Link>
                        </li>
                        <li>
                            <Link href="/cos_travel_guide/malaysia">
                                Malaysia 馬來西亞
                            </Link>
                        </li>
                        <li>
                            <Link href="/cos_travel_guide/singapore">
                                Singapore 新加坡
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Page>
    );
}