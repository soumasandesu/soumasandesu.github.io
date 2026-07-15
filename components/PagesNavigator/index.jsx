import ClassNames from "classnames";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function PagesNavigator({
    className,
    rows,
    ...props
}) {
    return (
        <div
            className={ClassNames(styles.PagesNavigator, className)}
            {...props}
        >
            {rows?.map((row, i) => (
                <div key={i} className={styles.Row}>
                    {row.map(({ name, url, external, target, rel, ...props }) => {
                        const Component = external ? "a" : Link;
                        return (
                            <span key={name} className={className}>
                                <Component
                                    href={url}
                                    title={name}
                                    target={target}
                                    rel={rel}
                                    {...props}
                                >
                                    <span>
                                        {name}
                                    </span>
                                </Component>
                            </span>
                        );
                    })}
                </div>
            ))}
        </div>
    );
}