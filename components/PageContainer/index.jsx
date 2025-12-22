import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function PageContainer({
    children,
    className,
    ...props
}) {
  return (
    <div
        className={ClassNames(styles.PageContainer, className)}
        {...props}
    >
        {children}
    </div>
  );
}