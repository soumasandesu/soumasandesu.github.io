import { useState } from "react";
import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function SelfIntroCollapsed({
    children,
    className,
    ...props
}) {
    const [isAfterOpened, setIsAfterOpened] = useState(false);
    return (
        <div className={ClassNames(styles.SelfIntroCollapsed, className)} {...props}>
            <button
                className={ClassNames(styles.ShowMoreButton, {
                    [styles.Hidden]: isAfterOpened,
                })}
                onClick={() => setIsAfterOpened(true)}
            >
                <span>
                    Show more
                </span>
            </button>
            <div
                className={ClassNames(styles.Collapsed, {
                    [styles.Opened]: isAfterOpened,
                })}
                onClick={() => setIsAfterOpened(false)}
            >
                {children}
            </div>
        </div>
    );
}