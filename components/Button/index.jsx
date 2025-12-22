import ClassNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

export default function Button({
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
        className={ClassNames(styles.Button, className)}
        {...containerProps}
    >
        <a
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {icon && (
                <div className={styles.Icon}>
                <Image
                        src={icon}
                        alt=""
                        fill
                    />
                </div>
            )}
            <div className={styles.Text}>
                {children}
            </div>
        </a>
    </div>
  );
}