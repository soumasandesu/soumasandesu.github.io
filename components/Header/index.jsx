import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function Header({
    as = "h1",
    children,
    className,
    ...props
}) {
    const As = as;
    return (
        <As className={ClassNames(styles.Header, className)} {...props}>
            {children}
        </As>
    );
}