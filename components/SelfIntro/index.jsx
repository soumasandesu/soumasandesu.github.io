import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function SelfIntro({
    children,
    className,
    ...props
}) {
    return (
        <div className={ClassNames(styles.SelfIntro, className)} {...props}>
            {children}
        </div>
    );
}

export { default as Collapsed } from "./Collapsed";