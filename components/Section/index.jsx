import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function Section({
    children,
    className,
    ...props
}) {
    return (
        <div className={ClassNames(styles.Section, className)} {...props}>
            {children}
        </div>
    );
}