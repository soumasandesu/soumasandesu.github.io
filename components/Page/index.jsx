import ClassNames from "classnames";
import styles from "./styles.module.scss";

export default function Page({
    children,
    className,
    ...props
}) {
  return (
    <div
        className={ClassNames(styles.Page, className)}
        {...props}
    >
        {children}
    </div>
  );
}