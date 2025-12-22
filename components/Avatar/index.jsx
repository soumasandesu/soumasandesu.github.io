import ClassNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function Avatar({
    containerProps: {
        className,
        ...containerProps
    } = {},
    ...props
}) {
    return (
        <div className={ClassNames(styles.Avatar, className)} {...containerProps}>
            <div className={styles.AvatarImageContainer}>
                <Image
                    {...props}
                    alt=""
                    fill
                    unoptimized={props?.src?.match(/^https?:\/\//)}
                />
            </div>
        </div>
    );
}