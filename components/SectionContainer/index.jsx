import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function SectionContainer({
    children,
    className,
    ...props
}) {
    return (
        <div className={ClassNames(styles.SectionContainer, className)} {...props}>
            {children}
        </div>
    );
}