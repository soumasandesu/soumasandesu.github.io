import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function Footer({
    children,
    className,
    ...props
}) {
    return (
        <div className={ClassNames(styles.Footer, className)} {...props}>
            {children}
        </div>
    );
}