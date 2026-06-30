import ClassNames from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function PagesNavigator({
    className,
    children,
    items,
    ...props
}) {
    return (
        <div
            className={ClassNames(styles.PagesNavigator, className)}
            {...props}
        >
            {items?.map(({ name, url }) => (
                <span key={name} className={ClassNames(styles.Link, className)}>
                    <Link
                        href={url}
                        title={name}
                    >
                        <span>
                            {name}
                        </span>
                    </Link>
                </span>
            )) || children}
        </div>
    );
}