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
            {items?.map(({ name, url, external, target, rel }) => {
                const Component = external ? "a" : Link;
                return (
                    <span key={name} className={ClassNames(styles.Link, className)}>
                        <Component
                            href={url}
                            title={name}
                            target={target}
                            rel={rel}
                        >
                            <span>
                                {name}
                            </span>
                        </Component>
                    </span>
                );
            }) || children}
        </div>
    );
}