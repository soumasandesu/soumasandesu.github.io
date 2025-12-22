import ClassNames from "classnames";
import Image from "next/image";
import ReactImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./styles.module.scss";

export default function ImageGallery({
    containerProps: {
        className,
        ...containerProps
    } = {},
    icon,
    children,
    ...props
}) {
    return (
        <div
            className={ClassNames(styles.ImageGallery, className)}
            {...containerProps}
        >
            <ReactImageGallery
                showThumbnails={false}
                showBullets
                showPlayButton={false}
                {...props}
            />
        </div>
    );
}