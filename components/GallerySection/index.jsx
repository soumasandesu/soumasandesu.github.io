import ClassNames from "classnames";

import Section from "@/components/Section";

import styles from "./styles.module.scss";

export default function GallerySection({
    anchorId,
    children,
    className,
    title,
    ...props
}) {
    return (
        <Section className={ClassNames(styles.GallerySection, className)} {...props}>
            <h2 id={anchorId}>
                <a href={`#${anchorId}`}>{title}</a>
            </h2>
            {children}
        </Section>
    );
}